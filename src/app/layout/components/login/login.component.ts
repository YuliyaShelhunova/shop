import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

// rxjs
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  message: string;
  private unsubscribe: Subject<void> = new Subject();


  constructor(public authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.setMessage();
  }

  ngOnDestroy() {
    console.log('[takeUntil ngOnDestroy]');
    this.unsubscribe.complete();
  }

  onLogin() {
    this.message = 'Trying to log in ...';
    const observer = {
      next: () => {
        this.setMessage();
        if (this.authService.isLoggedIn) {
          // Get the redirect URL from our auth service
          // If no redirect has been set, use the default
          const redirect = this.authService.redirectUrl
            ? this.authService.redirectUrl
            : '/admin';
          const navigationExtras: NavigationExtras = {
              queryParamsHandling: 'preserve',
              preserveFragment: true
            };
          // Redirect the user
          this.router.navigate([redirect], navigationExtras);
        }
      },
      error: (err: any) => console.log(err),
      complete: () => console.log('[takeUntil] complete')
    };
    this.authService
      .login()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(observer);
  }
  onLogout() {
    this.authService.logout();
    this.setMessage();
  }

  private setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }
}
