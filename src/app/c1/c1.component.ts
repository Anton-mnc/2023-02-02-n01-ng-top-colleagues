import { Component } from '@angular/core';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'tc-c1',
  standalone: true,
  imports: [NgbCollapseModule],
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.scss']
})
export class C1Component {
  public isCollapsed = false;
}
