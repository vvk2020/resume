import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Card } from './components/card/card';
import { CardsList } from "./components/cards-list/cards-list";
import { Experience } from './components/experience/experience';
import { Data } from './services/data';
import { IExperience } from './interfaces/experience';
import { IEducation } from './interfaces/education';
import { Education } from './components/education/education';
import { Skill } from './types/skills';
import { Skills } from './components/skills/skills';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Card, CardsList, Education, Experience, Skills],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected education!: IEducation[];
  protected experiance!: IExperience[];
  protected hardSkills!: Skill[];
  protected softSkills!: Skill[];

  constructor(private _dataServ: Data) {
    this.education = this._dataServ.education;
    this.experiance = this._dataServ.experience;
    this.hardSkills = this._dataServ.hardSkills;
    this.softSkills = this._dataServ.softSkills;
  }
}
