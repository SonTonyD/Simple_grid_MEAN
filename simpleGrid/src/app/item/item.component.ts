import { Component, OnInit } from '@angular/core';
import { ITEMS } from './mock-items';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items = ITEMS;

  

}
