import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Issue } from './issue.model';

@Injectable()
export class IssueService {

  constructor() { }

  findIssue(id: number): Observable<Issue> {

    return Observable.of({
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
    });
  }

  updateIssue({id}: Issue, estimatedTime: number): Observable<any> {

    console.log('updating issue id', id);

    return Observable.of({});
  }
}
