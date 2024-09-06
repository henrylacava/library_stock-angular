import { Component } from '@angular/core';
import { PrimaryInputComponent } from "../../components/primary-input/primary-input.component";
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [PrimaryInputComponent, ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
