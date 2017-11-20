import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routes';

@NgModule({
    imports: [
        HomeRoutes
    ],
    declarations: [ HomeComponent ]
})
export class HomeModule {}