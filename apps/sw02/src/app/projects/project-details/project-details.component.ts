import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Project } from '@bb/core-data';

@Component({
  selector: 'bb-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  selectedProject: Project;

  @Input() group: FormGroup;
  @Input() set project(value: Project) {
    this.selectedProject = Object.assign({}, value);
  };
  @Output() cancelled = new EventEmitter();
  @Output() saved = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
