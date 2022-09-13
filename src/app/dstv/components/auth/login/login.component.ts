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

           .fundo{
            //backgroundImage: 'url(https://source.unsplash.com/random)';
            backgroundImage : '../../../../../assets/dstv/backgrounds/background1.jpg';
            backgroundRepeat: 'no-repeat';
            backgroundSize: 'cover';
            backgroundPosition: 'center';
    }
        `,
    ],
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
