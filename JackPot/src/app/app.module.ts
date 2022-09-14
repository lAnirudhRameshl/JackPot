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
import { AppRoutingModule } from './app-routing.module';
import {MatIconModule} from '@angular/material/icon';
import { AppComponent } from './app.component';
import { ThistoryHoldingsComponent } from './components/molecules/thistory-holdings/thistory-holdings.component';
import { DropdownComponent } from './components/molecules/dropdown/dropdown.component';
import { SearchBarComponent } from './components/molecules/search-bar/search-bar.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { DownloadComponent } from './components/molecules/download/download.component';
import { ThistoryTableComponent } from './components/organisms/thistory-table/thistory-table.component';
import { TradeHistoryPageComponent } from './components/pages/trade-history-page/trade-history-page.component';
import { TableOptionsComponent } from './components/organisms/table-options/table-options.component';
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
import { PorfolioComponent } from './components/pages/porfolio/porfolio.component';

import { PortfolioTableComponent } from './components/molecules/portfolio-table/portfolio-table.component';
import { TradeOptionsComponent } from './components/molecules/trade-options/trade-options.component';


@NgModule({
  declarations: [
    AppComponent,
    ThistoryHoldingsComponent,
    DropdownComponent,
    SearchBarComponent,
    DownloadComponent,
    ThistoryTableComponent,
    TradeHistoryPageComponent,
    TableOptionsComponent,
    TabsComponent,
    MarketMoversTableComponent,
    ButtonTradeComponent,
    BuySellPanelComponent,
    ProfileDetailComponent,
    ProfileContentComponent,
    ProfilePageComponent,
    TradeOptionsComponent,
    HeaderComponent,
    FooterComponent,
    NavBarLinkComponent,
    NavBarComponent,
    ButtonTradeComponent,
    BuySellPanelComponent,
    MarginSummaryComponent,
    AssetCardComponent,
    TradePageComponent,
    PorfolioComponent,
    PortfolioTableComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
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
