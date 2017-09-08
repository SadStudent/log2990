import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-admin-component',
    templateUrl: 'admin.component.html'
})

export class AdminComponent implements OnInit {
    public requiresPermission: boolean = true;

    constructor() { }

    ngOnInit() { }
}