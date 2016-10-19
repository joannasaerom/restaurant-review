import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { Review } from './review.model';

@Component ({
  selector: 'add-review',
  template: `
    <div>
      <form id="add-review">
      <h2>Review {{currentRestaurant.name}}</h2>
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
      <button (click)="addReview(title.value, comment.value, rating.value, waitTime.value); title.value=''; rating.value=''; comment.value=''; waitTime.value='';">Add Review</button>
      </form>
    </div>
  `
})

export class AddReviewComponent{
  @Input() currentRestaurant: Restaurant;
  @Output() newReviewSender = new EventEmitter();
  addReview(title: string, comment: string, rating: string, waitTime: string){
    var parsedRating: number = parseInt(rating);
    var parsedTime: number = parseInt(waitTime);
    var newReview = new Review(this.currentRestaurant.name, title, comment, parsedRating, parsedTime);
    this.newReviewSender.emit(newReview);
  }
}
