import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProjectsService, Project } from '@bb/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'bb-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  project: Project;
  projects$: Observable<Project[]>
  form: FormGroup;

  constructor(
    private projectsService: ProjectsService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getProjects();
    this.initForm();
  }

  select(project: Project) {
    this.project = project;
    this.form.patchValue(project);
  }

  save(project: Project) {
    if (project.id) {
      this.update(project)
    } else {
      this.create(project);
    }
  }

  create(project: Project) {
    this.projectsService.create(project)
      .subscribe(() => {
        this.reset();
        this.getProjects();
      })
  }

  update(project: Project) {
    this.projectsService.update(project)
      .subscribe(() => {
        this.reset();
        this.getProjects();
      })
  }

  delete(project: Project) {
    this.projectsService.delete(project)
      .subscribe(() => {
        this.reset();
        this.getProjects();
      })
  }

  private getProjects() {
    this.projects$ = this.projectsService.all();
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: null,
      title: ['', Validators.compose([
        Validators.required
      ])],
      details: ['', Validators.compose([
        Validators.required
      ])],
      importanceLevel: ['', Validators.compose([
      ])],
    })
  }

  private reset() {
    this.form.reset();
    this.project = {} as Project;
    Object.keys(this.form.controls).forEach((key) => {
      this.form.get(key).setErrors(null);
    });
  }

}
