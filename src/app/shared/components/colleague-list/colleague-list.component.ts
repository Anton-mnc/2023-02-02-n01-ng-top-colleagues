import {Component, Output} from '@angular/core';
import {Colleague} from "../../models/colleague";


@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent {

  colleagues: Colleague[] = [
    {photo: "https://picsum.photos/200/250", pseudo: "Anton", score: 0},
    {photo: "https://picsum.photos/200/250", pseudo: "Lolo", score: 0},
    {photo: "https://picsum.photos/200/250", pseudo: "Gio", score: 0},
    {photo: "https://picsum.photos/200/250", pseudo: "Jojo", score: 0},
    {photo: "https://picsum.photos/200/250", pseudo: "Leonelle", score: 0},
    {photo: "https://picsum.photos/200/250", pseudo: "Able", score: 0,},
    {photo: "https://picsum.photos/200/250", pseudo: "Lucas", score: 0},
    {photo: "https://picsum.photos/200/250", pseudo: "Matthieu", score: 0},
    {photo: "https://picsum.photos/200/250", pseudo: "Sebi", score: 0},
  ]
}
