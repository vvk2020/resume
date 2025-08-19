import { Component } from '@angular/core';
import { IProjects } from '../../interfaces/projects';
import { Data } from '../../services/data';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  protected projects!: IProjects;

  constructor(private _dataServ: Data) {
    this.projects = this._dataServ.projects;
  }
}
