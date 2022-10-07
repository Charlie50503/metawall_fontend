import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "page-not-found", component: PageNotFoundComponent },
  {
    path: "**",
    redirectTo: "/page-not-found"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
