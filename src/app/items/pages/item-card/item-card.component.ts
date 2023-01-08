import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, Subscription } from 'rxjs';
import { Item } from 'src/app/classes/item';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  iid: any;
  private routeSubscription: Subscription;

  item!: Item;
  itemSubscription!: Subscription;
  // для теста
  // item: Item = {
  //   id: 0,
  //   name: 'Второй',
  //   description: 'FASSAGAS gasgasgm22 4424 **NFNJA zzzzzzzzzzzzzzzzzzzzzzz ssssssssssssssssssssssssssssfas fqqw'
  // }

  constructor(private route: ActivatedRoute, private service: ItemsService) {
    this.routeSubscription = route.params.subscribe(params => this.iid = params['iid']);
  }

  ngOnInit(): void {
    this.GetItem();
  }

  GetItem() {
    this.itemSubscription = this.service.GetOne(this.iid).pipe(
      map(item => this.item = item.data)).subscribe();
  }

  ngOnDestroy() {
    this.itemSubscription.unsubscribe();
  }
}
