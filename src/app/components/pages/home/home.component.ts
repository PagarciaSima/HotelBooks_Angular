import { Component } from '@angular/core';
import { DpDatePickerModule } from 'ng2-date-picker';
import { HotelListingComponent } from '../hotel-listing/hotel-listing.component';
import { HttpClientModule } from '@angular/common/http';
import { Hotel } from '../../../interface/hotel';
import { HotelsService } from '../../../services/hotels.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    DpDatePickerModule,
    HotelListingComponent,
    HttpClientModule,
    ReactiveFormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  datePickerConfig = {
    format: 'YYYY-MM-DD'
  };

  hotels: Hotel[] = [];
  hotelForm: FormGroup;

  constructor(
    private hotelService: HotelsService,
    private fb: FormBuilder
  ) {
    // this.loadHotels();
    this.hotelForm = this.fb.group({
      startDate: [''],
      endDate: [''],
      cityID: ['']
    });
  }

  loadHotels(): void {
    
    const { startDate, endDate, cityID } = this.hotelForm.value;

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
