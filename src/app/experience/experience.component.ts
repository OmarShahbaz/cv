import { formatDate } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  public experience : string = "experience";
  private _jobPosition : string="garbage";
  private _company : string="Ericsson";
  public _joiningDate = new Date(2022,11,7);
  public location = 'Islamabad, Pakistan';

  constructor(){}

  experienceTitle(){
    return this.experience.toUpperCase();
  }

  get jobPosition() : string{
    this._jobPosition="Jr. Angular Developer";
    return this._jobPosition;
  }

  get companyName() : string{
    this._company = "Ericsson Pakistan";
    return this._company;
  }

  joiningDate(): string{
    const formatedDate = `${(this._joiningDate.getMonth()).toString().padStart(2,'0')}-${this._joiningDate.getFullYear()}`;
  return formatedDate;
  }
}
