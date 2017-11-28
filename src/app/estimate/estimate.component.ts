import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { tap, switchMap } from 'rxjs/operators';

import { MatTableDataSource } from '@angular/material';
import { MatSnackBar } from '@angular/material';
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

    issue: Issue;
    dataSource = new MatTableDataSource<Estimate>();

    constructor(private activatedRoute: ActivatedRoute,
                private estimateService: EstimateService,
                private issueService: IssueService,
                private snackBar: MatSnackBar) {}

    ngOnInit() {

      this.activatedRoute.params
        .pipe(
          switchMap(param => this.issueService.findIssue(param.id))
        )
        .subscribe(issue => {
          this.issue = issue;

          this.estimateService.findEstimatesByIssue(issue.id)
            .subscribe(data => {
              this.dataSource.data = data;
              this.dataSource.data.forEach(this.updateEstimateSum);
          });
      });
    }

    updateProp = (prop: string, estimate: Estimate, inputValue) => {

      if (inputValue) {
        estimate[prop] = inputValue;
        this.updateEstimateSum(estimate);
      }
    }

    updateEstimateSum(estimate: Estimate) {
      estimate.sum = (estimate.low * estimate.low_weight) +
                     (estimate.medium * estimate.medium_weight) +
                     (estimate.high * estimate.high_weight);
    }

    estimate() {

      this.issueService.updateIssue(this.issue, this.sumAll())
        .subscribe(result => {
          this.snackBar.open('Estimate!', 'Dismiss', {
            duration: 2000
          });
        });
    }

    sumAll() {
      return this.dataSource.data.map(v => v.sum).reduce((s, v) => s + v, 0);
    }

}
