import { Component, OnInit } from '@angular/core';
import { ITEMS } from './mock-items';
import { ItemService } from '../item.service';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private _itemService: ItemService) { }

  items$!: Observable<any[]>;

  ngOnInit(): void {
    this.items$ = this._itemService.getItems()
  }  
}
