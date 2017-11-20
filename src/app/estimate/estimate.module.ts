import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { EstimateService } from './estimate.service';
import { EstimateComponent } from './estimate.component';
import { EstimateRoutes } from './estimate.routes';

@NgModule({
    imports: [
        EstimateRoutes,
        FormsModule,
        MatCardModule,
        MatTableModule,
        MatListModule,        
        MatInputModule,
        MatButtonModule
    ],
    declarations: [ EstimateComponent ],
    providers: [ EstimateService ]
})
export class EstimateModule {}