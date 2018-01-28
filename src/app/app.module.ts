import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { DoclistComponent } from './doclist/doclist.component';
import { AdddocComponent } from './adddoc/adddoc.component';
import { AppRoutingModule } from './/app-routing.module';
import { CatelistComponent } from './catelist/catelist.component';
import { DocuploadComponent } from './docupload/docupload.component';
import { CateaddComponent } from './cateadd/cateadd.component';
//import './rxjs-operators';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    DoclistComponent,
    AdddocComponent,
    CatelistComponent,
    DocuploadComponent,
    CateaddComponent
    //ReactiveFormsModule,
    //BrowserAnimationsModule,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
