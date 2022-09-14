import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TradeOptionsComponent } from './components/molecules/trade-options/trade-options.component';
import { TabsComponent } from './components/organisms/tabs/tabs.component';
import { MarketMoversTableComponent } from './components/molecules/market-movers-table/market-movers-table.component';
import { HeaderComponent } from './components/atoms/header/header.component';
import { FooterComponent } from './components/atoms/footer/footer.component';
import { NavBarLinkComponent } from './components/atoms/nav-bar-link/nav-bar-link.component';
import { NavBarComponent } from './components/molecules/nav-bar/nav-bar.component';
import { ButtonTradeComponent } from './components/atoms/button-trade/button-trade.component';
import { BuySellPanelComponent } from './components/molecules/buy-sell-panel/buy-sell-panel.component';
import { ProfileDetailComponent } from './components/molecules/profile-detail/profile-detail.component';
import { ProfileContentComponent } from './components/organisms/profile-content/profile-content.component';
import { ProfilePageComponent } from './components/pages/profile-page/profile-page.component';
import { MarginSummaryComponent } from './components/organisms/margin-summary/margin-summary.component';

import { AssetCardComponent } from './components/organisms/asset-card/asset-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { TradePageComponent } from './components/pages/trade-page/trade-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TradeOptionsComponent,
    TabsComponent,
    MarketMoversTableComponent,
    ButtonTradeComponent,
    BuySellPanelComponent,
    ProfileDetailComponent,
    ProfileContentComponent,
    ProfilePageComponent,

    HeaderComponent,
    FooterComponent,
    NavBarLinkComponent,
    NavBarComponent,
    ButtonTradeComponent,
    BuySellPanelComponent,
    MarginSummaryComponent,
    AssetCardComponent,
    TradePageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
