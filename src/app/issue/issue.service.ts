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

    return this.httpClient.post(`/redmine/issues/${id}.json`, {
      estimated_hours: estimatedHours
    })
    .pipe(
      map(response => response['issue'])
    );
  }
}
