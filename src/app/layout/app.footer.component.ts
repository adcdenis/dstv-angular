import { Component } from '@angular/core';
import { LayoutService } from "./service/app.layout.service";
import packageJson from '../../../package.json';

@Component({
    selector: 'app-footer',
    templateUrl: './app.footer.component.html',
    standalone: false
})
export class AppFooterComponent {
    version: string = packageJson.version;
    constructor(public layoutService: LayoutService) { }
}
