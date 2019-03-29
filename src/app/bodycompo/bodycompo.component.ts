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
  constructor(private datafetch: NicoserviceService, private router: Router) {
    this.mydata = this.datafetch.getData();
    this.datafetch.changeData.subscribe(data => {
      this.mydata = data;
    });
   }
  public products = [];
  navigate() {
    this.router.navigate(['cardcompo']);
  }
  ngOnInit() {

  }

}
