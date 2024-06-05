import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
  scroll:boolean=false;

  img="/assets/images/home_img.jpg";

  @HostListener('window:scroll',['$event'])
  Onscroll(event:any)
  {
    this.scroll=true
  }
}
