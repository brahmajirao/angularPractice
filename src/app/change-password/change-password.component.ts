import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

  form = new FormGroup({
    'oldPassword': new FormControl(
      '',
      [Validators.required, Validators.minLength(6)], 
      PasswordValidators.checkOldPassword
      ),
    'newPassword': new FormControl('', 
    [Validators.required, Validators.minLength(6)]
    ),
    'confirmPassword': new FormControl('', [Validators.required, Validators.minLength(6)])
  }, PasswordValidators.passwordShouldMatch);

  get getOldPassword(){
    return this.form.get('oldPassword');
  }

  get getNewPassword(){
    return this.form.get('newPassword');
  }

  get getConfirmPassword(){
    return this.form.get('confirmPassword');
  }
}
