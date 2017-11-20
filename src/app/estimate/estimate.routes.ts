import { RouterModule, Routes } from '@angular/router';
import { EstimateComponent } from './estimate.component';

export const EstimateRoutes = RouterModule.forChild([
    { path: 'estimate/:id', component: EstimateComponent }
]);