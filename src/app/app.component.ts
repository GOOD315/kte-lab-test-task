import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kte_lab_sobes';

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
    console.log("FASFASF");
  }

  onSubmit() {
    console.log(this.form);
  }
}
