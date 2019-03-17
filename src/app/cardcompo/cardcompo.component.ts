import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NicoserviceService } from '../nicoservice.service';

@Component({
  selector: 'app-cardcompo',
  templateUrl: './cardcompo.component.html',
  styleUrls: ['./cardcompo.component.css']
})
export class CardcompoComponent implements OnInit {
  constructor(private datafetch: NicoserviceService, private router: Router) { }

  ngOnInit() {
  }

}
