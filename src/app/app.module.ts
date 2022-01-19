import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChangeContractComponent } from './components/navigation/change-contract/change-contract.component';
import { ChangeContractMobileComponent } from './components/navigation/change-contract-mobile/change-contract-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PageTitleComponent,
    FooterComponent,
    ChangeContractComponent,
    ChangeContractMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
