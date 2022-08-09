import { Component, Input, OnInit } from '@angular/core';
import { Form, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.css']
})
export class PersonalFormComponent implements OnInit {
  
  form: FormGroup;
  @Input() formGroupName: string;

  constructor(
    private fullFormGroup: FormGroupDirective
  ) { }

  ngOnInit(): void {
    this.form = this.fullFormGroup.control.get(this.formGroupName) as FormGroup;
  }

}
