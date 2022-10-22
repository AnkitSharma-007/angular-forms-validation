import { Component, OnInit } from "@angular/core";
import {
  Validators,
  FormGroup,
  NonNullableFormBuilder,
  FormControl,
} from "@angular/forms";
import { UserRegistration } from "../models/userRegistration";
import { CustomvalidationService } from "../services/customvalidation.service";
import { UserNameValidationService } from "../services/user-name-validation.service";

@Component({
  selector: "app-reactive-form",
  templateUrl: "./reactive-form.component.html",
  styleUrls: ["./reactive-form.component.scss"],
})
export class ReactiveFormComponent implements OnInit {
  protected registerForm!: FormGroup<UserRegistration>;
  protected submitted = false;

  constructor(
    private readonly formBuilder: NonNullableFormBuilder,
    private readonly customValidator: CustomvalidationService,
    private readonly userNameValidationService: UserNameValidationService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        name: new FormControl("", Validators.required),
        email: new FormControl("", [Validators.required, Validators.email]),
        username: new FormControl("", {
          asyncValidators: [
            this.userNameValidationService.validate.bind(
              this.userNameValidationService
            ),
          ],
          validators: [Validators.required],
        }),
        password: new FormControl("", [
          Validators.required,
          this.customValidator.patternValidator(),
        ]),
        confirmPassword: new FormControl("", [Validators.required]),
      },
      {
        validators: [
          this.customValidator.matchPassword("password", "confirmPassword"),
        ],
      }
    );
  }

  protected get registerFormControl() {
    return this.registerForm.controls;
  }

  protected onSubmit(): void {
    this.submitted = true;

    if (this.registerForm.valid) {
      alert(
        "Form Submitted succesfully!!!\n Check the values in browser console."
      );
      console.table(this.registerForm.value);
    }
  }

  protected resetForm(): void {
    this.registerForm.reset();
  }
}
