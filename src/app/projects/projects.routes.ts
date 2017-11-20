import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';

export const ProjectsRoutes = RouterModule.forChild([
    { path: 'projects', component: ProjectsComponent }
]);