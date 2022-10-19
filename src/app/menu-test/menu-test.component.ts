import { Component, OnInit } from '@angular/core';
import {ICONS, TYPES} from "../consts";

@Component({
  selector: 'app-menu-test',
  templateUrl: './menu-test.component.html',
  styleUrls: ['./menu-test.component.scss']
})
export class MenuTestComponent implements OnInit {
  public icons = ICONS;
  public types = TYPES;

  constructor() { }

  ngOnInit(): void {
  }

}
