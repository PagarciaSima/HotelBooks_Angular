import { Component } from '@angular/core';
import { DpDatePickerModule } from 'ng2-date-picker';
import { HotelListingComponent } from '../hotel-listing/hotel-listing.component';
import { HttpClientModule } from '@angular/common/http';
import { Hotel } from '../../../interface/hotel';
import { HotelsService } from '../../../services/hotels.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    DpDatePickerModule,
    HotelListingComponent,
    HttpClientModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  datePickerConfig = {
    format: 'YYYY-MM-DD'
  };

  hotels: Hotel[] = [];

  constructor(private hotelService: HotelsService) {
    this.loadHotels();
  }

  loadHotels(): void {
    const startDate = '2024-10-10';
    const endDate = '2024-10-20';
    const cityID = 1;
    this.hotelService.getHotels(startDate, endDate, cityID).subscribe({
      next: (data) => {
        this.hotels = data;
        console.log('hotels: ', this.hotels);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
