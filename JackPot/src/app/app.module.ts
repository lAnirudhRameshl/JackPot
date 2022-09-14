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
import { TradePageComponent } from './components/pages/trade-page/trade-page.component';
import { ProfileEditContentComponent } from './components/organisms/profile-edit-content/profile-edit-content.component';
import { ProfileEditPageComponent } from './components/pages/profile-edit-page/profile-edit-page.component';
import { PorfolioComponent } from './components/pages/porfolio/porfolio.component';
import { PortfolioTableComponent } from './components/molecules/portfolio-table/portfolio-table.component';
import { RegisterFormComponent } from './components/organisms/register-form/register-form.component';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { LoginFormComponent } from './components/organisms/login-form/login-form.component';

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
    TradePageComponent,
    ProfileEditContentComponent,
    ProfileEditPageComponent,
    PorfolioComponent,
    PortfolioTableComponent,
    RegisterFormComponent,
    LoginFormComponent,
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
    MatChipsModule,
    MatSliderModule,
    MatDatepickerModule,
    MatMomentDateModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en'}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
