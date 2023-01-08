import { Component, OnInit } from '@angular/core';
import { map, Observable, Subscription, tap } from 'rxjs';
import { Item } from 'src/app/classes/item';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  pageSize: number = 5;
  pageIndexx: number = 0;

  items!: Array<Item>;
  itemsSubscription!: Subscription;
  selectedItem!: Item;

  constructor(public service: ItemsService) { }

  ngOnInit(): void {
    this.GetData();
  }

  GetData() {
    this.itemsSubscription = this.service.GetAll().pipe(
      map(itemsList => this.items = itemsList.data)
    ).subscribe();
  }

  ngOnDestroy() {
    this.itemsSubscription.unsubscribe();
  }
}
