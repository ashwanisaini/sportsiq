import {APP_BASE_HREF} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';


import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AdminServices} from './services/admin.services';
import {AuthServices} from './services/auth.services';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FileDropDirective, FileSelectDirective} from 'ng2-file-upload';
import {HomeModule} from './home/home.module';
import {AboutModule} from './about/about.module';
import {PricingModule} from './pricing/pricing.module';
import {BrainPowerModule} from './brain-power/brain-power.module';
import {RegisterModule} from './register/register.module';
import {FrontendModule} from './frontend/frontend.module';
import {HeaderComponent} from './shared/components/header/header.component';
import {FooterComponent} from './shared/components/footer/footer.component';
import {MainPipe} from './shared/pipes/main-pipe.module';
// import {AdsModule} from './shared/components/ads/ads.module';
// import {AdsComponent} from './shared/components/ads/ads.component';
import {Utils} from './services/utils';


@NgModule({
    declarations: [AppComponent, HeaderComponent, FooterComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        HomeModule,
        RegisterModule,
        FrontendModule,
        BrainPowerModule,
        PricingModule,
        AboutModule,
        MainPipe
        
    ],
    exports: [
        HeaderComponent,
        FooterComponent
        
    ],
    bootstrap: [AppComponent],
    providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        AdminServices,
        AuthServices,
        FileDropDirective,
        FileSelectDirective,
        Utils
    ],
})
export class AppModule {
}
