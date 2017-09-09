import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../admin/auth/auth.service';

@Component({
    selector: 'app-navbar-component',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit {
    @Input() private title: string;

    constructor(private authService: AuthService) { }

    ngOnInit() { }
}