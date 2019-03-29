import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NicoserviceService } from '../nicoservice.service';

@Component({
  selector: 'app-cardcompo',
  templateUrl: './cardcompo.component.html',
  styleUrls: ['./cardcompo.component.css']
})
export class CardcompoComponent implements OnInit {
  product: any = null;
  constructor(private datafetch: NicoserviceService, private router: Router) { 
    const url = window.location ;
    const word = url.toString().split('/');
    const id =  word[word.length - 1];
    this.product = datafetch.getProductDetailById(id);
  }
  ngOnInit() {

  }
}
