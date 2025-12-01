import { Component, OnInit } from '@angular/core';
import packageJson from '../../../../../../package.json';
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
                background-image: url('https://picsum.photos/1920/1080.jpg');
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
            }

            #random{
                /* BOX MODEL */
                width: 100%;
                height: 100vh;
                border: none;

                /* ENHANCEMENT */
                background-position: center center;
                background-size: cover;
                background-repeat: no-repeat;
                position: relative;
            }

            #random::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
                z-index: 1;
            }

            #random > div {
                position: relative;
                z-index: 2;
            }

            .surface-card {
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
                animation: fadeInUp 0.6s ease-out;
            }

            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 0.9;
                    transform: translateY(0);
                }
            }

            :host ::ng-deep .p-button {
                transition: all 0.3s ease;
            }

            :host ::ng-deep .p-button:hover {
                transform: translateY(-2px);
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            }
        `,
    ],
    standalone: false
})
export class LoginComponent implements OnInit{
    valCheck: string[] = ['remember'];

    email!: string;
    password!: string;
    version: string = packageJson.version;

    // Array de imagens com temas de tecnologia e games
    private techImages = [
        'https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2',
        'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2',
        'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2',
        'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2',
        'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2',
        'https://images.pexels.com/photos/2115554/pexels-photo-2115554.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2',
        'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2',
        'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2'
    ];

    constructor(private auth: AuthServiceService, private router: Router, public layoutService: LayoutService, private activateRoute: ActivatedRoute) {}

    ngOnInit(): void {
        // Define uma imagem aleatória como fundo
        this.setRandomBackground();

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

    private setRandomBackground(): void {
        const randomIndex = Math.floor(Math.random() * this.techImages.length);
        const randomImage = this.techImages[randomIndex];
        const element = document.getElementById('random');
        if (element) {
            element.style.backgroundImage = `url('${randomImage}')`;
        }
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
