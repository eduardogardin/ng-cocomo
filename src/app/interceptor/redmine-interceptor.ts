import { Injectable, NgModule } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class RedmineInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const interceptedRequest = req.clone({
      setHeaders: {
        'X-Redmine-API-Key': environment.apiToken
      }
    });

    return next.handle(interceptedRequest);
  }
}
