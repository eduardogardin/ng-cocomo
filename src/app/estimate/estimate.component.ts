import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';

import { MatTableDataSource } from '@angular/material';
import { Issue } from '../issue/issue.model';
import { Estimate } from './estimate.model';
import { EstimateService } from './estimate.service';
import { IssueService } from '../issue/issue.service';

@Component({
  selector: 'app-estimate',
  templateUrl: './estimate.component.html',
  styleUrls: ['./estimate.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EstimateComponent implements OnInit {

  displayedColumns = ['name', 'low', 'medium', 'high', 'sum'];
  
    issue : Observable<Issue>;    
    dataSource = new MatTableDataSource<Estimate>();

    constructor(private estimateService : EstimateService,
                private issueService : IssueService) {}
  
    ngOnInit() {
      
      this.issue = this.issueService.findIssue(1);
      this.estimateService.findEstimatesByIssue(1).subscribe(data => {
        this.dataSource.data = data;  
        this.dataSource.data.forEach(this.updateEstimateSum);    
      })
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
