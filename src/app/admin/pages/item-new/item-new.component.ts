import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-item-new',
  templateUrl: './item-new.component.html',
  styleUrls: ['./item-new.component.scss']
})
export class ItemNewComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: new FormControl('', [Validators.required, this.NoSpaceAllowed]),
      description: new FormControl(''),
    })
  }

  ngOnInit(): void {
    console.log("FASFASF");
  }

  onSubmit() {
    console.log(this.form);
  }

  NoSpaceAllowed(control: FormControl) {
    if (control.value != null && control.value.indexOf(' ') != -1) {
      return { noSpaceAllowed: true }
    }
    return null;
  }

}
