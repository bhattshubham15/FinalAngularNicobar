import { Injectable} from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';
import { setTNodeAndViewData } from '@angular/core/src/render3/state';
import { getClosureSafeProperty } from '@angular/core/src/util/property';

@Injectable({
  providedIn: 'root'
})
export class NicoserviceService {



constructor() {}

productsCollection = [
  {
    id: 1,
    name: 'United Color beniton',
    price: 499.99,
    currency: 'INR',
    image: 'assets/images/img4.jpg',
    image1: 'assets/images/img11.jpg'
  },
  {
    id: 2,
    name: 'Adidas sports shoes',
    price: 249.99,
    currency: 'INR',
    image: 'assets/images/img5.jpg',
    image1: 'assets/images/img14.jpg'
  },
  {
    id: 3,
    name: 'Adidas',
    price: 239.99,
    currency: 'INR',
    image: 'assets/images/img6.jpg',
    image1: 'assets/images/img12.jpg'
  },
  {
    id: 4,
    name: 'PUMA sports ',
    price: 119.99,
    currency: 'INR',
    image: 'assets/images/img7.jpg',
    image1: 'assets/images/img13.jpg'
  },
  {
    id: 5,
    name: 'puma track',
    price: 599.99,
    currency: 'INR',
    image: 'assets/images/img8.jpg',
    image1: 'assets/images/img4.jpg'
  },
  {
    id: 6,
    name: 'Adidas track',
    price: 149.99,
    currency: 'INR',
    image: 'assets/images/img9.jpg',
    image1: 'assets/images/img6.jpg'
  },
   {
    id: 7,
    name: 'United Color beniton',
    price: 760.99,
    currency: 'INR',
    image: 'assets/images/img13.jpg',
    image1: 'assets/images/img15.jpg'
  }
];

  setData(params) {
    params = this.productsCollection;
  }
  getData() {
    return this.productsCollection;
  }

}

