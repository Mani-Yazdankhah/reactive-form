import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnInit {
  venderForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.venderForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      bio: ['', Validators.required],
      domain: ['', Validators.required]
    })
  }

  get isNameNotFilled() { return this.venderForm.get('name')?.errors?.['required'] && this.venderForm.get('name')?.touched }
  get isEmailNotFilled() { return this.venderForm.get('email')?.errors?.['required'] && this.venderForm.get('email')?.touched }
  get isEmailInvalid() { return this.venderForm.get('email')?.errors?.['email'] }
  get isBioNotFilled() { return this.venderForm.get('bio')?.errors?.['required'] && this.venderForm.get('bio')?.touched }
  get isDomainNotFilled() { return this.venderForm.get('domain')?.errors?.['required'] && this.venderForm.get('domain')?.touched }

  onSubmit() {
    let info = document.getElementById("info");
    if (info != undefined) {
      info.innerHTML = `<div>
      <h1>Object should be print here</h1>
      name: ${this.venderForm.get("name")?.value} <br>
      email: ${this.venderForm.get("email")?.value}<br>
      bio: ${this.venderForm.get("bio")?.value}<br>
      domain: ${this.venderForm.get("domain")?.value}<br>
      </div>`
    }
  }

}
