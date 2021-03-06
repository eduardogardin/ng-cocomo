import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { EstimateService } from './estimate.service';
import { IssueService } from '../issue/issue.service';
import { EstimateComponent } from './estimate.component';
import { EstimateRoutes } from './estimate.routes';

@NgModule({
    imports: [
        CommonModule,
        EstimateRoutes,
        FormsModule,
        MatCardModule,
        MatTableModule,
        MatListModule,
        MatInputModule,
        MatButtonModule,
        MatSnackBarModule
    ],
    declarations: [ EstimateComponent],
    providers: [ EstimateService, IssueService ]
})
export class EstimateModule {}
