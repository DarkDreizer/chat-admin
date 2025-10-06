import { Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import {DashboardComponent} from './views/dashboard/dashboard.component';
import {ChatConfigComponent} from './views/chat/chat-config.component';
import {AgentsComponent} from './views/agents/agents.component';
import {LogsComponent} from './views/logs/logs.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./views/login/login.component').then(m => m.LoginComponent),
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./views/dashboard/dashboard.component').then(m => m.DashboardComponent),
  },
  {
    path: 'chat',
    loadComponent: () => import('./views/chat/chat-config.component').then(m => m.ChatConfigComponent),
  },
  {
    path: 'agents',
    loadComponent: () => import('./views/agents/agents.component').then(m => m.AgentsComponent),
  },
  {
    path: 'logs',
    loadComponent: () => import('./views/logs/logs.component').then(m => m.LogsComponent),
  }
];
