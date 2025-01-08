import { Component } from '@angular/core';
import { DpDatePickerModule } from 'ng2-date-picker';
import { HotelListingComponent } from '../hotel-listing/hotel-listing.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DpDatePickerModule, HotelListingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  datePickerConfig = {
    format: 'YYYY-MM-DD'
  };
}
