import { Component } from '@angular/core';
import {Colleague} from "../models/Colleague";

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent {
  colleague: Colleague={
    photo: "https://picsum.photos/200/250",
    pseudo:"Anton",
    score:0,
  }
}
