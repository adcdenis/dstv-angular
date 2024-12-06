import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthServiceService } from './../../../service/auth-service.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [
        `
            :host ::ng-deep .p-password input {
                width: 100%;
                padding: 1rem;
            }

            :host ::ng-deep .pi-eye {
                transform: scale(1.6);
                margin-right: 1rem;
                color: var(--primary-color) !important;
            }

            :host ::ng-deep .pi-eye-slash {
                transform: scale(1.6);
                margin-right: 1rem;
                color: var(--primary-color) !important;
            }

            .image {
                backgroundImage: 'url(https://source.unsplash.com/1920x1280/?gaming)';
                backgroundRepeat: 'no-repeat';
                backgroundSize: 'cover';
                backgroundPosition: 'center';
            }

            #random{
            /* BOX MODEL */
            width: 100%;
            height: 450px;
            border: 1px solid black;

            /* ENHANCEMENT */
            background-image: url('https://source.unsplash.com/1920x1280/?gaming');
            background-position: center center;
            background-size: cover;
            background-repeat: no-repeat;
            }
        `,
    ],
    standalone: false
})
export class LoginComponent implements OnInit{
    valCheck: string[] = ['remember'];

    email!: string;
    password!: string;

    constructor(private auth: AuthServiceService, private router: Router, public layoutService: LayoutService, private activateRoute: ActivatedRoute) {}

    ngOnInit(): void {

        this.activateRoute.queryParams.subscribe(
            params => {
              const logout : boolean =  params['sair'];
              console.log('logout: ', logout);
              if(logout) {
                this.auth.logout();
              }
            }
          )
    }

    public verificaLogin() {

        this.auth.login(this.email, this.password);

        // if (
        //     this.email === 'adcdenis@gmail.com' &&
        //     this.password === '30854165'
        // ) {
        //     this.auth.efetuarLogin();
        //     this.router.navigate(['dashboard']);
        // }
    }




}
