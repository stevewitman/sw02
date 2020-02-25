import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Project } from './project.model';

const BASE_URL = 'https://server-30-x-30.herokuapp.com';
const model = 'projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpClient: HttpClient) { }

  getUrl() {
    return `${BASE_URL}/${model}`;
  }

  getUrlWithId(id: string) {
    return `${this.getUrl()}/${id}`;
  }

  all(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.getUrl());
  }

  findOne(id: string): Observable<Project> {
    return this.httpClient.get<Project>(this.getUrlWithId(id));
  }

  create(project: Project): Observable<Project> {
    return this.httpClient.post<Project>(this.getUrl(), project);
  }

  update(project: Project): Observable<Project> {
    return this.httpClient.patch<Project>(this.getUrlWithId(project.id), project);
  }

  delete(project: Project): Observable<{}> {
    return this.httpClient.delete<{}>(this.getUrlWithId(project.id));
  }
}
