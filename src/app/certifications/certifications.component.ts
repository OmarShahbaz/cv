import { Component } from '@angular/core';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent {

  public certifications : string = "certifications";

  constructor(){}

  certificationTitle(): string {
    return this.certifications.toUpperCase();
  }
}
