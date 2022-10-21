
import { TradePopupComponent } from './components/organisms/trade-popup/trade-popup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';;
import { TradeHistoryPageComponent } from './components/pages/trade-history-page/trade-history-page.component'; 
import { ProfilePageComponent } from './components/pages/profile-page/profile-page.component';
import { TradePageComponent } from './components/pages/trade-page/trade-page.component';
import { ProfileEditPageComponent } from './components/pages/profile-edit-page/profile-edit-page.component';
import { PorfolioComponent } from './components/pages/porfolio/porfolio.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { RegisterFormComponent } from './components/organisms/register-form/register-form.component';
import { LoginFormComponent } from './components/organisms/login-form/login-form.component';
import { HomeComponent } from './components/pages/home/home.component';

//Let's add temporary routes with our names here for testing and not change app.component as it'll be easier to merge etc

const routes: Routes = [
  { path: '',redirectTo:'home',pathMatch:'full'},
  { path: 'home', component: HomeComponent},
  { path: 'trade', component: TradePageComponent },

  {
    path: 'profile',
    component: ProfilePageComponent,
  },
  {
    path: 'profile-edit',
    component: ProfileEditPageComponent 
  },
  {
    path:'portfolio',
    component: PorfolioComponent
  },
  
  {
    path: 'register',
    component: RegisterFormComponent
  },
  {
    path: 'login',
    component: LoginFormComponent
  },
  { path: 'trade-history', component: TradeHistoryPageComponent },
  {
    path:'**',
    component: NotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
