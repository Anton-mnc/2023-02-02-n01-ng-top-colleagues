import {Injectable} from '@angular/core';
import {Colleague} from "../models/colleague";

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {

  constructor() {
  }

  list(): Colleague[] {
    return [
      {photo: "https://picsum.photos/200/200", pseudo: "Anton", score: 0},
      {photo: "https://picsum.photos/200/210", pseudo: "Lolo", score: 100},
      {photo: "https://picsum.photos/200/220", pseudo: "Gio", score: -200},
      {photo: "https://picsum.photos/200/230", pseudo: "Jojo", score: 1000},
      {photo: "https://picsum.photos/200/240", pseudo: "Leonelle", score: -1000},
      {photo: "https://picsum.photos/200/250", pseudo: "Able", score: 400,},
      {photo: "https://picsum.photos/200/260", pseudo: "Lucas", score: 0},
      {photo: "https://picsum.photos/200/270", pseudo: "Matthieu", score: 0},
      {photo: "https://picsum.photos/200/280", pseudo: "Sebi", score: 0},
      {photo: "https://picsum.photos/200/290", pseudo: "Antoile", score: 0},
      {photo: "https://picsum.photos/200/300", pseudo: "Antoite", score: 0},
      {photo: "https://picsum.photos/200/310", pseudo: "Veepee", score: 0},
      {photo: "https://picsum.photos/200/320", pseudo: "Elich", score: 0},
      {photo: "https://picsum.photos/200/330", pseudo: "Syl", score: 0},
      {photo: "https://picsum.photos/200/340", pseudo: "Pöele", score: 0},
    ]

  }
}
