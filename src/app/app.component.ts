import { Component } from '@angular/core';

import { MatTableDataSource } from '@angular/material';
import { Issue } from './issue.model';
import { Estimate } from './estimate/estimate.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  displayedColumns = ['name', 'low', 'medium', 'high', 'sum'];

  issue : Issue = {
    id: 193663,
    project: {
        id: 904,
        name: 'E-Almoxarifado'
    },
    tracker: {
        id: 9,
        name: 'História'
    },
    status: {
        id: 2,
        name: 'Doing'
    },
    subject: 'Implementar endpoint no backend para consultar Lotes de um Item'
  };

  estimates : Estimate[] = [{
    name: 'Telas',
    low: 0,
    low_weight: 1,
    medium: 0,
    medium_weight: 2,
    high: 3,
    high_weight: 3,
    sum: 0
  },
  {
    name: 'Banco de dados',
    low: 0,
    low_weight: 1,
    medium: 0,
    medium_weight: 2,
    high: 3,
    high_weight: 3,
    sum: 0
  }];

  dataSource = new MatTableDataSource<Estimate>(this.estimates);

  update(estimate, $event) {

    console.log('estimate', estimate);
    console.log('event', $event);
  }
}
