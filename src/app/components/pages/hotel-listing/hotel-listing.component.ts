import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Hotel } from '../../../interface/hotel';

@Component({
  selector: 'app-hotel-listing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hotel-listing.component.html',
  styleUrl: './hotel-listing.component.scss'
})
export class HotelListingComponent {

  prices = [100, 200, 300, 400, 500]; 

  @Input() hotels: Hotel[] = [];

  trackByID(index: number, hotel: Hotel): any {
    return hotel.id; // Devuelve el cityID como clave única
  }
}
