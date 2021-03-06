import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRouterModule } from './app.routes';
import { AppComponent } from './app.component';
import { EstimateModule } from './estimate/estimate.module';
import { ProjectsModule } from './projects/projects.module';
import { InterceptorModule } from './interceptor/interceptor.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    InterceptorModule,
    MatToolbarModule,
    AppRouterModule,
    HomeModule,
    ProjectsModule,
    EstimateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
