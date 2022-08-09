import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-full-form',
  templateUrl: './full-form.component.html',
  styleUrls: ['./full-form.component.css']
})
export class FullFormComponent implements OnInit {

  fullForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.fullForm = this.fb.group({
      additionalForm: this.fb.group({
        phoneNumber: [],
        etc: []
      }),
      personalForm: this.fb.group({
        name: [],
        age: [],
        address: []
      })
    });
  }

  submit() {
    console.log(this.fullForm.value);
  }

  fillForm(){
    this.fullForm.get('additionalForm')?.patchValue({
      phoneNumber: "070121212",
      etc: "etcetcetc"
    });

    this.fullForm.get('personalForm')?.patchValue({
      name: "abbe",
      age: 50,
      address: "vägen 42"
    });
  }

}
