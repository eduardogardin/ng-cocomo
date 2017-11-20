import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Estimate } from './estimate.model';

@Injectable()
export class EstimateService {

  constructor() { }

  findEstimatesByIssue(id : number) : Observable<Estimate[]> {

    return Observable.of([{
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
    }]);
  }
}
