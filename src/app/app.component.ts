import { Component } from '@angular/core';

@Component({
  selector: 'tc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'top-colleagues';
}

import {Component} from '@angular/core';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-collapse-horizontal',
  standalone: true,
  imports: [NgbCollapseModule],
  templateUrl: './collapse-horizontal.html',
})
export class NgbdCollapseHorizontal {
  public isCollapsed = false;
}
