import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonTradeComponent } from './components/atoms/button-trade/button-trade.component';
import {MatButtonModule} from '@angular/material/button';
import { BuySellPanelComponent } from './components/molecules/buy-sell-panel/buy-sell-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonTradeComponent,
    BuySellPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
