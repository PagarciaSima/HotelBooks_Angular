import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hotel-listing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hotel-listing.component.html',
  styleUrl: './hotel-listing.component.scss'
})
export class HotelListingComponent {
  prices = [100, 200, 300, 400, 500]; 

}
