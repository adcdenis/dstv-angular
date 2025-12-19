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
            :host ::ng-deep {
                .p-password input {
                    width: 100%;
                }

                .p-button {
                    transition: all 0.2s ease;
                    &:hover {
                        transform: translateY(-1px);
                        filter: brightness(1.1);
                    }
                }
            }

            .card {
                backdrop-filter: blur(10px);
                animation: slideIn 0.5s ease-out;
            }

            @keyframes slideIn {
                from { opacity: 0; transform: scale(0.95); }
                to { opacity: 1; transform: scale(1); }
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

    // Array de imagens do Unsplash com temas de tecnologia, código e gaming
    private techImages = [
        // Código e Programação
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&h=1080&fit=crop&q=80', // código em tela
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&h=1080&fit=crop&q=80', // monitor com código
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&h=1080&fit=crop&q=80', // laptop programação
        'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1920&h=1080&fit=crop&q=80', // código colorido
        'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1920&h=1080&fit=crop&q=80', // código escuro
        'https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?w=1920&h=1080&fit=crop&q=80', // código verde matrix

        // Setup Gaming e Workstation
        'https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=1920&h=1080&fit=crop&q=80', // setup gamer RGB
        'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=1920&h=1080&fit=crop&q=80', // setup gaming neon
        'https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=1920&h=1080&fit=crop&q=80', // setup gaming roxo
        'https://images.unsplash.com/photo-1600861194942-f883de0dfe96?w=1920&h=1080&fit=crop&q=80', // workstation dev
        'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=1920&h=1080&fit=crop&q=80', // setup minimalista

        // Hardware e Circuitos
        'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=1080&fit=crop&q=80', // placa de circuito
        'https://images.unsplash.com/photo-1555617778-02518510b9fa?w=1920&h=1080&fit=crop&q=80', // processador
        'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=1920&h=1080&fit=crop&q=80', // componentes PC
        'https://images.unsplash.com/photo-1562976540-1502c2145186?w=1920&h=1080&fit=crop&q=80', // placa mãe

        // Abstrato Tech
        'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&h=1080&fit=crop&q=80', // matrix digital
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&h=1080&fit=crop&q=80', // cyber security
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&h=1080&fit=crop&q=80', // servidor data center
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&q=80', // terra digital
        'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1920&h=1080&fit=crop&q=80', // fórmulas matemáticas

        // Tecnologia Moderna
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&h=1080&fit=crop&q=80', // laptops reunião
        'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1920&h=1080&fit=crop&q=80', // laptop roxo
        'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1920&h=1080&fit=crop&q=80', // tela de código
        'https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=1920&h=1080&fit=crop&q=80', // café e código
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&h=1080&fit=crop&q=80', // laptop branco código
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
