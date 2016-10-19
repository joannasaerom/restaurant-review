import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { Review } from './review.model';

@Component ({
  selector: 'add-review',
  template: `
    <div>
      <form id="add-review">
      <label for="restaurant-name">Restaurant Name:</label>
      <select class="form-control" #restaurantName>
        <option value="Sizzle Pie">Sizzle Pie</option>
        <option value="High Noon">High Noon</option>
        <option value="Pine State Biscuit">Pine State Biscuit</option>
        <option value="Sushi Taro">Sushi Taro</option>
        <option value="Chez Dodo">Chez Dodo</option>
        <option value="All Souls">All Souls</option>
      </select>
      <label for="title">Review Title:</label>
      <input class="form-control" type="text" #title name="title">
      <label for="rating">Rating:</label>
      <select class="form-control" #rating>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <label for="comment">Comments:</label>
      <textarea class="form-control" #comment name="comment"></textarea>
      <label for="waitTime">Approximate Wait Time (min)</label>
      <input class="form-control" type="text" #waitTime name="waitTime">
      <button (click)="addReview(restaurantName.value, title.value, comment.value, rating.value, waitTime.value)">Add Review</button>
      </form>
    </div>
  `
})

export class AddReviewComponent{
  @Output() newReviewSender = new EventEmitter();
  addReview(restaurantName: string, title: string, comment: string, rating: string, waitTime: string){
    var parsedRating: number = parseInt(rating);
    var parsedTime: number = parseInt(waitTime);
    var newReview = new Review(restaurantName, title, comment, parsedRating, parsedTime);
    this.newReviewSender.emit(newReview);
  }
}
