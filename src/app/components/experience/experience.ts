import { Component } from '@angular/core';
import { Data } from '../../services/data';
import { IExperience } from '../../interfaces/experience';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {
  protected experience!: IExperience[];

  constructor(private _dataServ: Data) {
    this.experience = this._dataServ.experience;
  }
}
