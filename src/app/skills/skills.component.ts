import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  public skills : string = "skills";

  skillsTitle(){
    return this.skills.toUpperCase();
  }
}
