import { FormControl } from "@angular/forms";

export interface UserRegistration {
  name: FormControl<string>;
  email: FormControl<string>;
  username: FormControl<string>;
  password: FormControl<string>;
  confirmPassword: FormControl<string>;
}
