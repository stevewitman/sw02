import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiToolbarModule } from '@bb/ui-toolbar';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectsListComponent,
    ProjectDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UiToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
