import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material';
import { Issue } from './issue.model';
import { Estimate } from './estimate/estimate.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
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
    high: 0,
    high_weight: 3,
    sum: 0
  },
  {
    name: 'Banco de dados',
    low: 0,
    low_weight: 1,
    medium: 0,
    medium_weight: 2,
    high: 0,
    high_weight: 3,
    sum: 0
  }];

  dataSource = new MatTableDataSource<Estimate>(this.estimates);

  ngOnInit() {

    this.dataSource.data.forEach(this.updateEstimateSum);    
  }

  updateProp = (prop: string, estimate : Estimate, inputValue) => {

    if(inputValue) {
      estimate[prop] = inputValue;    
      this.updateEstimateSum(estimate);
    }
  }

  updateEstimateSum(estimate : Estimate) {
    estimate.sum = (estimate.low * estimate.low_weight) + (estimate.medium * estimate.medium_weight) + (estimate.high * estimate.high_weight);
  }

  sumAll() {
    return this.dataSource.data.map(v => v.sum).reduce((s, v) => s + v, 0);
  }
}
