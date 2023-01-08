import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ItemNewComponent } from './pages/item-new/item-new.component';
// import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    ItemNewComponent
  ],
  imports: [
    CommonModule,

    FormsModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,

    RouterModule.forChild(
      [
        {
          path: '',
          children: [
            {
              path: 'create-item',
              component: ItemNewComponent
            }
          ]
        }
      ]
    ),
  ],
})
export class AdminModule { }