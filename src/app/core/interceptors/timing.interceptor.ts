import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpParams, HttpEventType } from '@angular/common/http';

import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable()
export class TimingInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // request interceptor
        let clonedRequest;
        const start = performance.now();
        if (req.url.includes('products')) {
            clonedRequest = req.clone({
                params: new HttpParams()
                    .set('timing_interceptor', Date.now().toString())
            });
            console.log(clonedRequest);
        } else {
            clonedRequest = req;
        }

        return next.handle(clonedRequest).pipe(
            filter((event: HttpEvent<any>) => event.type === HttpEventType.Response),
            map((event: HttpResponse<any>) => {
                // do stuff with response
                if (event.url.includes('products')) {
                    console.log('Response Interceptor:');
                    console.log(event);
                    console.log(event.body);
                    console.log('Performance: ' + (performance.now() - start));
                }
                return event;
            })
        );
    }
}
