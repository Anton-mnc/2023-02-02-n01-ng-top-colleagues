import {Component, Input} from '@angular/core';
import {Colleague} from "../../../models/colleague";
import {LikeHate} from "../../../models/like-hate";
import {ColleagueListComponent} from "../colleague-list/colleague-list.component";

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})

export class ColleagueComponent {
  @Input() colleague: Colleague = {
    photo: "",
    pseudo: "Error",
    score: -1000,
  }

  vote(voting: LikeHate) {
    this.colleague.score += voting
  }
}
