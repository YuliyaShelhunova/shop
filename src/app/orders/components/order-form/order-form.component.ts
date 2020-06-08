import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from '../../model/user.model';
import { pluck } from 'rxjs/operators';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  constructor(private route: ActivatedRoute,
              private router: Router,
              private orderService: OrderService) { }

  user: UserModel;
  originalUser: UserModel;
  isSendOrder = false;

  ngOnInit(): void {
    this.route.data.pipe(pluck('user')).subscribe((user: UserModel) => {
      this.user = { ...user };
    });
  }

  onGoBack(): void {
    this.router.navigate(['/cart']);
  }

  onSendOrder() {
    this.orderService.sendOrder(this.user).subscribe(data => {
      if (data) {
        this.isSendOrder = true;
        this.onGoBack();
      }
    });
  }
}
