import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

export const HomeRoutes = RouterModule.forChild([
    { path: 'home', component: HomeComponent }
]);