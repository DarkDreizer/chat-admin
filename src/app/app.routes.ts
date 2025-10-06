import { Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import {DashboardComponent} from './views/dashboard/dashboard.component';
import {ChatConfigComponent} from './views/chat/chat-config.component';
import {AgentsComponent} from './views/agents/agents.component';
import {LogsComponent} from './views/logs/logs.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'chat',
    component: ChatConfigComponent
  },
  {
    path: 'agents',
    component: AgentsComponent
  },
  {
    path: 'logs',
    component: LogsComponent
  }
];
