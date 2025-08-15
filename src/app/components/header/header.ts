import { Component } from '@angular/core';
import { DATA } from '../../../../public/data/portfolio-data';
import { FullPersonlNamePipe } from '../../pipies/full-personl-name-pipe';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { PhoneNumberPipe } from '../../pipies/phone-number-pipe';
import { IPerson } from '../../interfaces/person';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FullPersonlNamePipe, UpperCasePipe, DatePipe, PhoneNumberPipe],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  protected person: IPerson = { ...DATA.person };
  protected position = DATA.position;
}
