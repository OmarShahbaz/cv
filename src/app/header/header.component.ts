import { Component } from "@angular/core";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css'] 
})
export class HeaderComponent{
    name : string = "Omar Shahbaz";
    jobTitle : string = "Angular Developer";
    email : string = "omarshahbaz@gmail.com";
    phone : string = "+92 333 5716128";
    socialLink : string = "https://www.linkedin.com/in/omar-shahbaz/";
    location : string = "Islamabad, Pakistan";

    userName():string {
        return this.name.toUpperCase();
    }

}