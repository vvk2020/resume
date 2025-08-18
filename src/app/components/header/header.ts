import { Component } from '@angular/core';
import { FullPersonlNamePipe } from '../../pipies/full-personl-name-pipe';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { PhoneNumberPipe } from '../../pipies/phone-number-pipe';
import { IPerson } from '../../interfaces/person';
import { Data } from '../../services/data';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FullPersonlNamePipe, UpperCasePipe, PhoneNumberPipe, DatePipe],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  protected person!: IPerson;
  protected position: string = "";


  constructor(private _dataServ: Data) {
    this.person = this._dataServ.person;
    this.position = this._dataServ.position;
  }

}
