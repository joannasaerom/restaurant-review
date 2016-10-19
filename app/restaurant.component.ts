import {Component, Input} from '@angular/core';
import {Restaurant} from './restaurant.model';

@Component ({
  selector: 'restaurant-details',
  template: `
    <div>
      <h4>{{restaurant.name}}<br>
          {{restaurant.speciality}}<br>
          {{restaurant.address}}<br>
          {{restaurant.priceRange}}
      </h4>
    </div>
  `
})

export class RestaurantComponent {
  @Input() restaurant: Restaurant;
}
