import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EstimateComponent } from './estimate/estimate.component';
import { ProjectsComponent } from './projects/projects.component';

const appRoutes: Routes = [
    { path: '', component: AppComponent }
];

export const AppRouterModule = RouterModule.forRoot(appRoutes, { enableTracing: true});