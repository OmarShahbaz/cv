import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  public experience : string = "experience";

  experienceTitle(){
    return this.experience.toUpperCase();
  }

}
