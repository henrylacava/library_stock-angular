import { Component, Input } from '@angular/core';

type InputTypes = 'text' | 'email' | 'password';

@Component({
  selector: 'app-primary-input',
  standalone: true,
  imports: [],
  templateUrl: './primary-input.component.html',
  styleUrl: './primary-input.component.css',
})
export class PrimaryInputComponent {
  @Input() type: InputTypes = 'text';
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() inputName: string = '';
}
