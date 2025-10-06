import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import {Agent} from '../../interfaces/agent.interface';

@Component({
  selector: 'app-agents',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    CardModule
  ],
  templateUrl: './agents.component.html',
  styleUrl: './agents.component.scss'
})
export class AgentsComponent {
  agents = signal<Agent[]>([
    {
      id: 1,
      name: 'Sofia',
      role: 'Support',
      personality: 'Friendly and helpful'
    },
    {
      id: 2,
      name: 'Marcus',
      role: 'Sales',
      personality: 'Confident and persuasive'
    }
  ]);


  constructor(private router: Router) { }

  goBack(): void {
    this.router.navigate(['/dashboard']);
  }

  createAgent(): void {
    this.router.navigate(['/agents/new']);
  }

  editAgent(agent: Agent): void {
    this.router.navigate([`/agents/${agent.id}`]);
  }
}
