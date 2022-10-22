import { Directive, Input } from "@angular/core";
import {
  NG_VALIDATORS,
  Validator,
  ValidationErrors,
  AbstractControl,
} from "@angular/forms";
import { CustomvalidationService } from "../services/customvalidation.service";

@Directive({
  selector: "[appMatchPassword]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MatchPasswordDirective,
      multi: true,
    },
  ],
})
export class MatchPasswordDirective implements Validator {
  @Input("appMatchPassword") MatchPassword: string[] = [];

  constructor(private readonly customValidator: CustomvalidationService) {}

  validate(control: AbstractControl): ValidationErrors {
    return this.customValidator.matchPassword(
      this.MatchPassword[0],
      this.MatchPassword[1]
    )(control);
  }
}
