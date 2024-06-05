import { Component, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
  scroll:boolean=false;

  img="/assets/images/home_img.jpg";
  constructor(private activateroute:ActivatedRoute){}

  ngOnInit()
  {
    this.activateroute.fragment.subscribe(value=>
      {
        console.log(value);
        this.jumpTo(value);
      }
    )
  }

  jumpTo(section:any)
  {
    document.getElementById(section)?.scrollIntoView({behavior:'smooth'});
  }

  @HostListener('window:scroll',['$event'])
  Onscroll(event:any)
  {
    this.scroll=true
  }
}
