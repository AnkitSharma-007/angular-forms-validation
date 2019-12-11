import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup } from '@angular/forms';
import { CustomvalidationService } from '../services/customvalidation.service';

@Directive({
  selector: '[appMatchPassword]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MatchPasswordDirective, multi: true }]
})
export class MatchPasswordDirective implements Validator {
  @Input('appMatchPassword') MatchPassword: string[] = [];

  constructor(private customValidator: CustomvalidationService) { }

  validate(formGroup: FormGroup): ValidationErrors {
    return this.customValidator.MatchPassword(this.MatchPassword[0], this.MatchPassword[1])(formGroup);
  }

}
