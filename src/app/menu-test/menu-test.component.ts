import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-test',
  templateUrl: './menu-test.component.html',
  styleUrls: ['./menu-test.component.scss']
})
export class MenuTestComponent implements OnInit {

  icons = [
    {icon: 'star', title: 'Add to favorites'},
    {icon: 'plus', title: 'Add new folder'},
    {icon: 'copy', title: 'Copy'},
    {icon: 'pen', title: 'Rename'},
    {icon: 'delete', title: 'Delete'},
  ];
  types = ['1', '15', '2', '3'];

  constructor() { }

  ngOnInit(): void {
  }

}
