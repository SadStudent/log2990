import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { AuthService } from './auth.service';

@Component({
    moduleId: module.id,
    selector: 'app-password-form-component',
    templateUrl: 'password-form.component.html',
    styleUrls: ['./password-form.component.css']
})

export class PasswordFormComponent implements OnInit {
    requiresPermission: boolean = true
    validPassword: boolean = false;
    error: boolean = false;
    password: string;

    @Output() success: EventEmitter<any> = new EventEmitter();

    constructor(private authService: AuthService) { }

    ngOnInit() { }

    private validatePassword(): void {
        this.error = false;
        this.authService.connect(this.password).then(isOk => this.grantAccess(isOk));
    }

    private grantAccess(isValid: boolean): void {
        if(isValid) {
            this.success.emit(undefined);
            this.validPassword = true;
        }
        else {
            this.error = true;
        }
        this.password = "";
    }
}