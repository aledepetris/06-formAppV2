import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent {

/*   public myForm: FormGroup = new FormGroup({
    // Valor por defecto, validaciones sincronas y luego asincronas
    name: new FormControl('', [], []),
    price: new FormControl(0),
    inStorage: new FormControl(0)
  }) */

  // Otra forma con un builder
  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(3) ]],
    price: [0, [ Validators.required, Validators.min(0) ]],
    inStorage: [0, [ Validators.required, Validators.min(0) ]]
  })

  constructor ( private fb: FormBuilder ) {}

  onSave(): void {

    if ( this.myForm.invalid ) return;

    console.log(this.myForm.value);

  }

}
