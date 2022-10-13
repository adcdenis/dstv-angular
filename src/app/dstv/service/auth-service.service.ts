import { Observable, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { browserSessionPersistence, getAuth, setPersistence, signInWithEmailAndPassword } from 'firebase/auth';

@Injectable({
    providedIn: 'root',
})
export class AuthServiceService {
    private logado = false;
    private user: any;

    constructor(public authF: AngularFireAuth, private router: Router) {}

    public isLogado(): Observable<boolean> {
        return this.authF.authState.pipe(
            map((resp) => {
                if (resp) {
                    return true;
                } else {
                    this.router.navigate(['auth/login']);
                    return false;
                }
            })
        );

        // this.authF.authState.subscribe((user) => {
        //     if (user) {
        //         console.log('user: ', user);
        //         return true;
        //     } else {
        //         return false;
        //     }
        //   });

        //if(localStorage.getItem("userdstv")) {
        //this.user = JSON.parse(localStorage.getItem('userdstv')!);
        //return true;
        // }

        //return false;
    }

    login(email: string, password: string) {
        const auth = getAuth();

        setPersistence(auth, browserSessionPersistence)
        .then(() => {
          // Existing and future Auth states are now persisted in the current
          // session only. Closing the window would clear any existing state even
          // if a user forgets to sign out.
          // ...
          // New sign-in will be persisted with session persistence.
          signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              // Signed in
              this.user = userCredential.user;

              this.authF.authState.subscribe((user) => {
                  if (user) {
                      this.user = user;
                      //localStorage.setItem('userdstv',JSON.stringify(this.user));
                      this.router.navigate(['cliente']);
                  }
              });
          })
          .catch((error) => {
              console.log('error: ', error);
              const errorCode = error.code;
              const errorMessage = error.message;
              //localStorage.removeItem('userdstv');
              window.alert(error.message);
          });
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
        });



        // signInWithEmailAndPassword(auth, email, password)
        //     .then((userCredential) => {
        //         // Signed in
        //         this.user = userCredential.user;

        //         this.authF.authState.subscribe((user) => {
        //             if (user) {
        //                 this.user = user;
        //                 //localStorage.setItem('userdstv',JSON.stringify(this.user));
        //                 this.router.navigate(['dashboard']);
        //             }
        //         });
        //     })
        //     .catch((error) => {
        //         console.log('error: ', error);
        //         const errorCode = error.code;
        //         const errorMessage = error.message;
        //         //localStorage.removeItem('userdstv');
        //         window.alert(error.message);
        //     });
    }
    logout() {
        this.authF.signOut();
        //localStorage.removeItem('userdstv');
    }
}
