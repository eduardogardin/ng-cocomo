import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SatPopoverModule } from '@ncstate/sat-popover';

import { AppComponent } from './app.component';
import { InlineEditComponent } from './inline-edit/inline-edit.component';
import { EstimateComponent } from './estimate/estimate.component';

@NgModule({
  declarations: [
    AppComponent,
    EstimateComponent,
    InlineEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatTableModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    SatPopoverModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
