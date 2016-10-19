import {Component, Input} from '@angular/core';
import {Restaurant} from './restaurant.model';
import { Review } from './review.model';

@Component ({
  selector: 'restaurant-details',
  template: `
    <div class="restaurant" *ngIf="restaurant">
      <div class="restaurant-info">
        <h2>{{restaurant.name}}</h2>
        <h4>Cuisine: {{restaurant.specialty}}<br>
            Address: {{restaurant.address}}<br>
            Price Range: {{restaurant.priceRange}}
        </h4>
      </div>
        <h3>Reviews</h3>
        <div *ngFor="let currentReview of reviews">
          <div *ngIf="currentReview.restaurantName === restaurant.name" class="well">
            <h3>{{currentReview.title}}</h3>
            <h4>Review Comment: {{currentReview.comment}}</h4>
            <h4>Overall Rating: {{currentReview.rating}}</h4>
            <h4>Approximate Wait Time: {{currentReview.waitTime}} mins</h4>
          </div>
        </div>
        <hr>
        <add-review
        [currentRestaurant]="restaurant"
        (newReviewSender)="addReview($event)"
        ></add-review>
    </div>
  `
})

export class RestaurantComponent {
  @Input() restaurant: Restaurant;
  public reviews: Review[] = [
    new Review("Sushi Hana", "Delicious!!!", "This place is the bomb", 5, 30),
    new Review("Sushi Hana", "I prefer Bamboo Sushi", "It's good, could be better", 3, 30),
    new Review("Five Guys", "Predictable", "You get what you pay for.", 3, 5),
    new Review("Five Guys", "My Go To", "So good, the fries are absolutely the best.", 4, 4)
  ];
  addReview(newReviewFromChild: Review){
    this.reviews.push(newReviewFromChild);
  }
}
