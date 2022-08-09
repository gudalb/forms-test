import { Component, Input, OnInit } from '@angular/core';
import { Form, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-additional-form',
  templateUrl: './additional-form.component.html',
  styleUrls: ['./additional-form.component.css']
})
export class AdditionalFormComponent implements OnInit {

  form: FormGroup;
  @Input() formGroupName: string;
  
  constructor(
    private fullFormGroup: FormGroupDirective
  ) { }

  ngOnInit(): void {
    this.form = this.fullFormGroup.control.get(this.formGroupName) as FormGroup;
  }

}
