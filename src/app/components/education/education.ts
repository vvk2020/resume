import { Component } from '@angular/core';
import { IEducation } from '../../interfaces/education';
import { Data } from '../../services/data';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.html',
  styleUrl: './education.css'
})
export class Education {
  protected education!: IEducation[];

  constructor(private _dataServ: Data) {
    this.education = this._dataServ.education;
  }
}
