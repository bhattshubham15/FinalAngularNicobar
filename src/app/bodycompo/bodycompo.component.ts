import { Component, OnInit } from '@angular/core';
import { NicoserviceService } from '../nicoservice.service';
import { Router } from '@angular/router';
import { RouterModule, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-bodycompo',
  templateUrl: './bodycompo.component.html',
  styleUrls: ['./bodycompo.component.css']
})
export class BodycompoComponent implements OnInit {
  mydata = this.datafetch.getData();
  hideElement = false;
  constructor(private datafetch: NicoserviceService, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (router.url === '/cardcompo') {
          this.hideElement = true;
        }  else {
          this.hideElement = false;
        }
      }
    });
  }


  // navigate() {
  //   this.router.navigate(['cardcompo']);
  // }
  ngOnInit() {

  }

}
