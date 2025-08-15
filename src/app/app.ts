import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Card } from './components/card/card';
import { CardsList } from "./components/cards-list/cards-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Card, CardsList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
