import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

type ButtonTypes = 'primary' | 'secondary' | 'destructive';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() type: ButtonTypes = 'primary';
  @Input() text: string = '';
}
