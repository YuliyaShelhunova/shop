import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { Observable, throwError, of } from 'rxjs';
import { catchError, finalize, map, retry, share } from 'rxjs/operators';
import { AppSettingsModel } from '../models/app-setting';


@Injectable({
    providedIn: 'root'
})

export class AppSettings {
    settings: AppSettingsModel;

    constructor(private localStorageService: LocalStorageService, private http: HttpClient) {}

    getSettings(): Observable<AppSettingsModel> {
        this.settings = new AppSettingsModel('You can select and buy some products!');
        let settings = JSON.parse(this.localStorageService.getItem('appSettings'));
        if (settings) {
            return of(settings);
        } else {
            return this.http.get('/assets/app-settings.json')
                .pipe(retry(2),
                map(data => {
                    return settings = data as AppSettingsModel || this.settings ;
                }),
                share(),
                catchError(this.handleError),
                finalize(() => {
                    this.setDescription(settings);
                }));
        }
    }

    setDescription(settings: AppSettingsModel): void {
        this.localStorageService.setItem('appSettings', JSON.stringify(settings));
    }

    private handleError(err: HttpErrorResponse) {
        if (err.error instanceof Error) {
            console.error('An error occurred:', err.error.message);
        } else {
            console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
        }

        return throwError('Something bad happened; please try again later.');
    }
}

