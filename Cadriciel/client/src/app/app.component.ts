import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isAdmin: boolean = false;
  isAdminModule: boolean = false;

  constructor () { }

  public title = 'LOG2990';

  public ngOnInit(): void { }

  private onActivate(event): void {
    this.isAdminModule = event.requiresPermission;
    console.log(this.isAdminModule?'admin requis':'module pour tout le monde');
  }

  private connect(): void {
    this.isAdmin = true;
  }

  private disconnect(): void {
    this.isAdmin = false;
  }
}
