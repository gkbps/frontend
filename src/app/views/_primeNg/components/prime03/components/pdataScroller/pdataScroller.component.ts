// External
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Car {
    vin;
    year;
    brand;
    color;
}

import { CarService } from './car.service';

@Component({
  selector: 'pdataScroller',
  templateUrl: './pdataScroller.html',
  styleUrls: ['./pdataScroller.scss'],
})

export class PDataScroller implements OnInit {

  cars: Car[];

  selectedCar: Car;

  displayDialog: boolean;


  constructor(
    private carService: CarService,
  ) { }

  ngOnInit() {
    this.cars = this.carService.getCarsLarge();
  }

  selectCar(car: Car) {
      this.selectedCar = car;
      this.displayDialog = true;
  }

  onDialogHide() {
      this.selectedCar = null;
  }

}
