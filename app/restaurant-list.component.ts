import {Component, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant } from './restaurant.model';

@Component ({
  selector: 'restaurant-list',
  template: `
    <div>
    <label for="cuisines">Filter by cuisines</label>
      <select (change)="onChange($event.target.value)" class="cuisines form-control">
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Mexican">Mexican</option>
        <option value="Japanese">Japanese</option>
      </select>
    </div>
    <br>
    <div class="restaurant-list well" *ngFor="let currentRestaurant of childRestaurantList | cuisines:selectedCuisine">
      <h2 (click)="showRestaurant(currentRestaurant)">{{currentRestaurant.name}}</h2>
      <h4>{{currentRestaurant.specialty}}</h4>
    </div>
  `
})

export class RestaurantListComponent {
  @Input() childRestaurantList: Restaurant[];
  @Output() clickSender = new EventEmitter();

  showRestaurant(restaurantToDisplay: Restaurant){
    this.clickSender.emit(restaurantToDisplay);
  }
  public selectedCuisine: string = "All";
  onChange(cuisineOption) {
    this.selectedCuisine = cuisineOption;

  }
}
