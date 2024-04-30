import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input() isAdmin: boolean | undefined;

  @Output() homeFn = new EventEmitter();
  @Output() attFn = new EventEmitter();
  @Output() addUserFn = new EventEmitter();
  @Output() finFn = new EventEmitter();
  @Output() profileFn = new EventEmitter();

  constructor() {}
}
