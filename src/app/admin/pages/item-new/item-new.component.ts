import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Item } from 'src/app/classes/item';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-item-new',
  templateUrl: './item-new.component.html',
  styleUrls: ['./item-new.component.scss']
})
export class ItemNewComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private service: ItemsService) {
    this.form = this.fb.group({
      name: new FormControl('', [Validators.required, this.NoSpaceAllowed]),
      description: new FormControl(''),
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    let item = new Item();
    item.id = 0;
    item.name = this.form.controls["name"].value;
    item.description = this.form.controls["description"].value;

    this.service.CreateItem(item);
  }

  NoSpaceAllowed(control: FormControl) {
    if (control.value != null && control.value.indexOf(' ') != -1) {
      return { noSpaceAllowed: true }
    }
    return null;
  }

}
