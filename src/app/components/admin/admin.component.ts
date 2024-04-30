import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
profile() {
this._router.navigate(['/']);
}

  constructor(private _router:Router){}

accounts() {
this._router.navigate(['/admin/accounts']);
}

addUser() {
this._router.navigate(['/admin/adduser']);
}

}
