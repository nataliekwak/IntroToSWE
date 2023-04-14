import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecureModule } from './secure/secure.module';
import { SecureComponent } from './secure/secure.component';
import { PublicComponent } from './public/public.component';
import { PublicModule } from './public/public.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { CredentialInterceptor } from './interceptors/credential.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SecureModule,
    PublicModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: CredentialInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
