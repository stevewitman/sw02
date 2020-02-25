import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '@bb/core-data';

@Component({
  selector: 'bb-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
  }

}
