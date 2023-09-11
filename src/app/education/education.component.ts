import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

  public education : string = "education";

  educationTitle(){
    return this.education.toUpperCase();
  }
}
