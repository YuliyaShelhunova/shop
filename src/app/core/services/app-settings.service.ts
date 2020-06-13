import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, finalize, map, publish, refCount, retry } from 'rxjs/operators';
import { AppSettingsModel } from '../models/app-setting';


@Injectable({
    providedIn: 'root'
})

export class AppSettings {
    settings: AppSettingsModel;
    private appSettings = new Subject<AppSettingsModel>();
    appSettings$: Observable<AppSettingsModel> = this.appSettings.asObservable();

    constructor(private localStorageService: LocalStorageService, private http: HttpClient) {
        this.settings.description = 'You can select and buy some products!';
        let settings = JSON.parse(localStorageService.getItem('appSettings')) as AppSettingsModel;
        if (settings) {
            this.appSettings.next(settings);
        } else {
            http.get('../../../assets/app-settings.json')
                .pipe(retry(2),
                map(data => {
                    settings = data as AppSettingsModel || this.settings ;
                    this.appSettings.next(settings);
                }),
                publish(),
                refCount(),
                catchError(this.handleError)),
                finalize(() => {
                    this.setDescription(settings);
                });
        }
    }

    setDescription(settings: AppSettingsModel): void {
        this.localStorageService.setItem('appSettings', JSON.stringify(settings));
        this.appSettings.next(settings);
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

