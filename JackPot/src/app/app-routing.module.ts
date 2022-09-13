import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DownloadComponent } from './components/molecules/download/download.component';
import { DropdownComponent } from './components/molecules/dropdown/dropdown.component';
import { SearchBarComponent } from './components/molecules/search-bar/search-bar.component';
import { TableOptionsComponent } from './components/organisms/table-options/table-options.component';
import { ThistoryTableComponent } from './components/organisms/thistory-table/thistory-table.component';
import { TradeHistoryPageComponent } from './components/pages/trade-history-page/trade-history-page.component';

const routes: Routes = [
  { path: 'shreyanshi', component: TradeHistoryPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
