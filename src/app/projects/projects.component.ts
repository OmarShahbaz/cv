import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  public projects : string = "projects";

  constructor(){}

  projectTitle(): string{
    return this.projects.toUpperCase();
  }
}
