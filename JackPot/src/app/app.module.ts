import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatGridListModule } from '@angular/material/grid-list';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatTableExporterModule } from 'mat-table-exporter';
import {MatSortModule} from '@angular/material/sort';


import { AppComponent } from './app.component';
import { DropdownComponent } from './components/molecules/dropdown/dropdown.component';
import { ThistoryTableComponent } from './components/organisms/thistory-table/thistory-table.component';
import { TradeHistoryPageComponent } from './components/pages/trade-history-page/trade-history-page.component';
import { TabsComponent } from './components/organisms/tabs/tabs.component';
import { MarketMoversTableComponent } from './components/organisms/market-movers-table/market-movers-table.component';
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
import { TradePageComponent } from './components/pages/trade-page/trade-page.component';
import { TradePopupComponent } from './components/organisms/trade-popup/trade-popup.component';
import { ProfileEditContentComponent } from './components/organisms/profile-edit-content/profile-edit-content.component';
import { ProfileEditPageComponent } from './components/pages/profile-edit-page/profile-edit-page.component';
import { PorfolioComponent } from './components/pages/porfolio/porfolio.component';
import { PortfolioTableComponent } from './components/organisms/portfolio-table/portfolio-table.component';
import { RegisterFormComponent } from './components/organisms/register-form/register-form.component';
import { LoginFormComponent } from './components/organisms/login-form/login-form.component';
import { TradeOptionsComponent } from './components/molecules/trade-options/trade-options.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TableHeaderComponent } from './components/molecules/table-header/table-header.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { PortfolioSummaryComponent } from './components/molecules/portfolio-summary/portfolio-summary.component';
import { SearchBarComponent } from './components/molecules/search-bar/search-bar.component';
import { IconButtonComponent } from './components/molecules/icon-button/icon-button.component';

import { HomeComponent } from './components/pages/home/home.component';

import { TradeContentComponent } from './components/organisms/trade-content/trade-content.component';
import { MarginPopupComponent } from './components/organisms/margin-popup/margin-popup.component';

import { ChartsComponent } from './components/atoms/charts/charts.component';
import { Chart2Component } from './components/atoms/chart2/chart2.component';
import { AddAccountPopupComponent } from './components/organisms/add-account-popup/add-account-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    ThistoryTableComponent,
    TradeHistoryPageComponent,
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
    TradePopupComponent,
    ProfileEditContentComponent,
    ProfileEditPageComponent,
    PorfolioComponent,
    PortfolioTableComponent,
    NotFoundComponent,
    RegisterFormComponent,
    LoginFormComponent,
    TableHeaderComponent,
    PortfolioSummaryComponent,
    SearchBarComponent,
    IconButtonComponent,

    HomeComponent,

    TradeContentComponent,
      MarginPopupComponent,
      ChartsComponent,
      Chart2Component,
      AddAccountPopupComponent
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
    MatDialogModule,
    MatButtonModule,
    MatTabsModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatCardModule,
    MatChipsModule,
    MatSliderModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatTableExporterModule,
    MatSortModule,
    
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
