import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRouterModule } from './app.routes';
import { AppComponent } from './app.component';
import { EstimateModule } from './estimate/estimate.module';
import { ProjectsModule } from './projects/projects.module';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    AppRouterModule,    
    ProjectsModule,
    EstimateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
