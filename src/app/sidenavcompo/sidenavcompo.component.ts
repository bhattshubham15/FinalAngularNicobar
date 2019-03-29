import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NicoserviceService } from '../nicoservice.service';

@Component({
  selector: 'app-sidenavcompo',
  templateUrl: './sidenavcompo.component.html',
  styleUrls: ['./sidenavcompo.component.css']
})
export class SidenavcompoComponent implements OnInit {
  filterData = { category: '' };
    constructor(private datafetch: NicoserviceService, private router: Router) {}
  ngOnInit() {
  }
  myFunction1() {
    document.getElementById('myDropdown1').classList.toggle('show');
  }
    filter(key, val) {
    this.filterData[key] = val;
    console.log(key, val);
    this.datafetch.setData(this.filterData);
  }
}
