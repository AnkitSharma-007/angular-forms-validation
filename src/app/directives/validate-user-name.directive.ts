import { Directive, forwardRef } from '@angular/core';
import { Validator, AbstractControl, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { CustomvalidationService } from '../services/customvalidation.service';
import { Observable } from 'rxjs';

@Directive({
  selector: '[appValidateUserName]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef(() => ValidateUserNameDirective), multi: true }]

})
export class ValidateUserNameDirective implements Validator {

  constructor(private customValidator: CustomvalidationService) { }

  validate(control: AbstractControl): Promise<{ [key: string]: any }> | Observable<{ [key: string]: any }> {
    return this.customValidator.userNameValidator(control);
  }

}
