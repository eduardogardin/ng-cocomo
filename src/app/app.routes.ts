import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

export const AppRouterModule = RouterModule.forRoot(appRoutes, { enableTracing: false});
