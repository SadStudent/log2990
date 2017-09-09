import { Component, OnInit } from '@angular/core';
import { AuthService } from './admin/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isAdminModule: boolean = false;

  constructor (private authService: AuthService) { }

  public title = 'LOG2990';

  public ngOnInit(): void { }

  private onActivate(event): void {
    this.isAdminModule = event.requiresPermission;
  }
}
