import { Component } from "@angular/core";
import { User } from "../models/user";

@Component({
  selector: "app-template-driven-form",
  templateUrl: "./template-driven-form.component.html",
  styleUrls: ["./template-driven-form.component.scss"],
})
export class TemplateDrivenFormComponent {
  protected userModal = new User();

  protected onSubmit() {
    alert(
      "Form Submitted succesfully!!!\n Check the values in browser console."
    );
    console.table(this.userModal);
  }

  protected resetForm(): void {
    this.userModal = new User();
  }
}
