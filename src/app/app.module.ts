import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './dstv/components/notfound/notfound.component';
import { CountryService } from './dstv/service/country.service';
import { CustomerService } from './dstv/service/customer.service';
import { EventService } from './dstv/service/event.service';
import { IconService } from './dstv/service/icon.service';
import { NodeService } from './dstv/service/node.service';
import { PhotoService } from './dstv/service/photo.service';
import { ProductService } from './dstv/service/product.service';
import { AppLayoutModule } from './layout/app.layout.module';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

@NgModule({
    declarations: [AppComponent, NotfoundComponent],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),
        provideAuth(() => getAuth()),
        AngularFireAuthModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService,
        CustomerService,
        EventService,
        IconService,
        NodeService,
        PhotoService,
        ProductService,
        { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
