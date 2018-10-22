import { AbstractControl, ValidationErrors } from "@angular/forms";
import { reject } from "q";

export class PasswordValidators{
    static checkOldPassword(control:AbstractControl):Promise<ValidationErrors|null>{
        return new Promise((resolve, reject)=>{
            if(control.value !== 'abcdefg')
                resolve({invalidPassword:true});
            else
                resolve(null);
        });
    }

    static passwordShouldMatch(control: AbstractControl) {
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');

        if(newPassword.value !== confirmPassword.value)
            return {passwordShouldMatch: true};
        
        return null;
    }
}