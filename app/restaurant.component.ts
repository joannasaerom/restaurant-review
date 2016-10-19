import {Component, Input} from '@angular/core';
import {Restaurant} from './restaurant.model';
import { Review } from './review.model';

@Component ({
  selector: 'restaurant-details',
  template: `
    <div>
    <div>
        <h4>{{restaurant.name}}<br>
            {{restaurant.speciality}}<br>
            {{restaurant.address}}<br>
            {{restaurant.priceRange}}
        </h4>
        <div *ngFor="let currentReview of reviews">
          <div class="well" *ngIf="currentReview.restaurantName === restaurant.name">
            <h4>{{currentReview.restaurantName}}</h4>
            <h4>{{currentReview.title}}</h4>
            <h4>{{currentReview.comment}}</h4>
            <h4>{{currentReview.rating}}</h4>
            <h4>{{currentReview.waitTime}}</h4>
          </div>
        </div>
        <add-review
        (newReviewSender)="addReview($event)"
        ></add-review>
      </div>
    </div>
  `
})

export class RestaurantComponent {
  @Input() restaurant: Restaurant;
  public reviews: Review[] = [
    new Review("Sizzle Pie", "Delicious", "This place is the bomb", 5, 30)
  ];
  addReview(newReviewFromChild: Review){
    this.reviews.push(newReviewFromChild);
  }
}
