import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Project } from './project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent implements OnInit {

  displayedColumns = ['name', 'low', 'medium', 'high', 'sum'];
  projects = [{id: 1, name: 'Project 1', identifier: 'project', status: 1}];
  dataSource = new MatTableDataSource<Project>(this.projects);

  constructor() { }

  ngOnInit() {
  }

}
