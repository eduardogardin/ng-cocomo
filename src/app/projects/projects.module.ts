import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { ProjectsComponent } from './projects.component';
import { ProjectsRoutes } from './projects.routes';

@NgModule({
    imports: [
        ProjectsRoutes,
        MatCardModule,
        MatTableModule,
        MatListModule,        
        MatInputModule,
        MatButtonModule
    ],
    declarations: [ ProjectsComponent ]
})
export class ProjectsModule {}