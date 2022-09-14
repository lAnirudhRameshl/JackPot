import { TradePopupComponent } from './components/organisms/trade-popup/trade-popup.component';
import { AssetCardComponent } from './components/organisms/asset-card/asset-card.component';
import { MarginSummaryComponent } from './components/organisms/margin-summary/margin-summary.component';
import { BuySellPanelComponent } from './components/molecules/buy-sell-panel/buy-sell-panel.component';
import { ButtonTradeComponent } from './components/atoms/button-trade/button-trade.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './components/organisms/tabs/tabs.component';
import { ProfilePageComponent } from './components/pages/profile-page/profile-page.component';
import { TradePageComponent } from './components/pages/trade-page/trade-page.component';

//Let's add temporary routes with our names here for testing and not change app.component as it'll be easier to merge etc

const routes: Routes = [

  { path: 'trade', component: TradePageComponent },
  { path: 'aad', component: TradePopupComponent },

  {
    path: 'profile',
    component: ProfilePageComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
