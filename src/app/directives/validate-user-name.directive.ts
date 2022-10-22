import { Directive, forwardRef } from "@angular/core";
import {
  AbstractControl,
  NG_ASYNC_VALIDATORS,
  ValidationErrors,
  AsyncValidator,
} from "@angular/forms";
import { Observable } from "rxjs";
import { UserNameValidationService } from "../services/user-name-validation.service";

@Directive({
  selector: "[appValidateUserName]",
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => ValidateUserNameDirective),
      multi: true,
    },
  ],
})
export class ValidateUserNameDirective implements AsyncValidator {
  constructor(
    private readonly userNameValidationService: UserNameValidationService
  ) {}

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.userNameValidationService.validate(control);
  }
}
