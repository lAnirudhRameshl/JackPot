import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TradeOptionsComponent } from './components/molecules/trade-options/trade-options.component';
import { TabsComponent } from './components/molecules/tabs/tabs.component';
import { MarketMoversTableComponent } from './components/organisms/market-movers-table/market-movers-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TradeOptionsComponent,
    TabsComponent,
    MarketMoversTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
