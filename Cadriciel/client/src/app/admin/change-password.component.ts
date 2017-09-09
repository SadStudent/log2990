import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { AuthService } from './auth/auth.service';

@Component({
    moduleId: module.id,
    selector: 'app-change-password-component',
    templateUrl: 'change-password.component.html'
})

export class ChangePasswordComponent implements OnInit {
    public requiresPermission = true;

    private password:string;
    private confirmPassword:string;
    private error:string;

    constructor(
        private authService: AuthService,
        private location: Location) { }

    ngOnInit() { }

    changePassword():void {
        if(this.password === this.confirmPassword){
            this.error = undefined;
            this.authService.changePassword(this.password).then(isOk => this.onSuccess(isOk));
        }
        else{
            this.error = "les mots de passe ne sont pas identiques";
        }
    }

    onSuccess(isOk:boolean): void {
        if(isOk) {
            alert("Le mot de passe a été changé");
            this.goBack();
        }
        else {
            this.error = "Erreur de modification du mot de passe";
        }
    }

    goBack(): void {
        this.location.back();
    }
}