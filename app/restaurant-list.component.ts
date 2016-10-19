import {Component, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant } from './restaurant.model';

@Component ({
  selector: 'restaurant-list',
  template: `
    <div class="restaurant-list" *ngFor="let currentRestaurant of childRestaurantList">
      <h2>{{currentRestaurant.name}}</h2>
      <h4>{{currentRestaurant.specialty}}</h4>
      <button (click)="showRestaurant(currentRestaurant)">Show Details</button>
    </div>
  `
})

export class RestaurantListComponent {
  @Input() childRestaurantList: Restaurant[];
  @Output() clickSender = new EventEmitter();

  showRestaurant(restaurantToDisplay: Restaurant){
    this.clickSender.emit(restaurantToDisplay);
  }
}
