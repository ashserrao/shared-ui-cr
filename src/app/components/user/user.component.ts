import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  dashboard() {
    this._router.navigate(['/']);
  }
  constructor(private _router: Router) {}

  attendence() {
    this._router.navigate(['/attendence']);
  }
}
