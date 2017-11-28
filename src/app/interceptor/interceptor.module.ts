import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RedmineInterceptor } from './redmine-interceptor';

@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RedmineInterceptor, multi: true }
  ]
})
export class InterceptorModule {
}
