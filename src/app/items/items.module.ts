import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './pages/items/items.component';
import { RouterModule } from '@angular/router';
import { ItemCardComponent } from './pages/item-card/item-card.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    ItemsComponent
  ],
  imports: [
    CommonModule,

    MatSidenavModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatCardModule,
    MatRadioModule,
    MatGridListModule,

    RouterModule.forChild(
      [
        {
          path: '',
          component: ItemsComponent
        },
        {
          path: ':iid',
          component: ItemCardComponent
        }
      ]
    )
  ]
})
export class ItemsModule { }
