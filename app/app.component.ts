import { Component } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { Review } from './review.model';
import { RestaurantListComponent } from './restaurant-list.component';
import { RestaurantComponent } from './restaurant.component';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
   <h1>Restaurant Reviews</h1>
   <div class="col-md-5">
     <restaurant-list
      [childRestaurantList]="masterRestaurantList"
      (clickSender)="showDetails($event)"
     ></restaurant-list>
    </div>
    <div class="col-md-5 col-md-offset-2">
    <restaurant-details
      [restaurant]="selectedRestaurant"
    ></restaurant-details>
    </div>
  `
})

export class AppComponent {
  public masterRestaurantList: Restaurant[] = [
    new Restaurant("Sizzle Pie", "American/Italian", "123 Main Street, Portland, OR", "$"),
    new Restaurant("High Noon", "Mexican", "524 3rd Street, Portland, OR", "$$$"),
    new Restaurant("Pine State Biscuit", "Southern", "142 Alberta Street, Portland, OR", "$$"),
    new Restaurant("Sushi Taro", "Japanese", "153 17th Street, Portland, OR", "$$$$$"),
    new Restaurant("Chez Dodo", "Mauritian", "523 Stark Street, Portland, OR", "$$"),
    new Restaurant("All Souls", "American", "129 7th Street, Portland, OR", "$$$$")
  ];
  selectedRestaurant: Restaurant = this.masterRestaurantList[0];
  showDetails(clickedRestaurant: Restaurant) {
    this.selectedRestaurant = clickedRestaurant;
  }
}
