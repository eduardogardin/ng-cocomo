import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Issue } from './issue.model';

@Injectable()
export class IssueService {

  constructor(private httpClient: HttpClient) { }

  findIssue(id: number): Observable<Issue> {

    return this.httpClient.get(`/redmine/issues/${id}.json`)
      .pipe(
        map(response => response['issue'])
      );
  }

  updateIssue({id}: Issue, estimatedHours: number): Observable<any> {

    return this.httpClient.put(`/redmine/issues/${id}.json`, {
      issue: {
        custom_fields: [{id: 137, name: 'Pontos Estimados', value: estimatedHours}]
      }
    }, {
      responseType: 'text'
    });
  }
}
