import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ThistoryHoldingsComponent } from './components/molecules/thistory-holdings/thistory-holdings.component';
import { DropdownComponent } from './components/molecules/dropdown/dropdown.component';
import { SearchBarComponent } from './components/molecules/search-bar/search-bar.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DownloadComponent } from './components/molecules/download/download.component';
import { ThistoryTableComponent } from './components/organisms/thistory-table/thistory-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ThistoryHoldingsComponent,
    DropdownComponent,
    SearchBarComponent,
    DownloadComponent,
    ThistoryTableComponent
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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
