import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/atoms/header/header.component';
import { FooterComponent } from './components/atoms/footer/footer.component';
import { NavBarLinkComponent } from './components/atoms/nav-bar-link/nav-bar-link.component';
import { NavBarComponent } from './components/molecules/nav-bar/nav-bar.component';
import { ButtonTradeComponent } from './components/atoms/button-trade/button-trade.component';
import {MatButtonModule} from '@angular/material/button';
import { BuySellPanelComponent } from './components/molecules/buy-sell-panel/buy-sell-panel.component';
import { MarginSummaryComponent } from './components/organisms/margin-summary/margin-summary.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AssetCardComponent } from './components/organisms/asset-card/asset-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavBarLinkComponent,
    NavBarComponent,
    ButtonTradeComponent,
    BuySellPanelComponent,
    MarginSummaryComponent,
    AssetCardComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
