import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';

const routes: Routes = [
  { path: "login", component: LoginComponent},
  { path: "header", component: HeaderComponent},
  { path: "sidebar", component: SidebarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
