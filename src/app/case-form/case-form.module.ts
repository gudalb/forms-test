import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalFormComponent } from './personal-form/personal-form.component';
import { AdditionalFormComponent } from './additional-form/additional-form.component';
import { FullFormComponent } from './full-form/full-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    PersonalFormComponent,
    AdditionalFormComponent,
    FullFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    FullFormComponent
  ]

})
export class CaseFormModule { }
