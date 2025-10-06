import {Component, computed, signal} from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Agent } from '../../interfaces/agent.interface';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-agents',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    CardModule,
    DialogModule,
    InputTextModule,
    TextareaModule,
  ],
  templateUrl: './agents.component.html',
  styleUrl: './agents.component.scss'
})
export class AgentsComponent {
  private agentIdCounter = 3;

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

  selectedAgent = signal<Agent | null>(null);
  dialogVisible = signal(false);
  isEditing = computed(() => !!this.selectedAgent()?.id);

  constructor(private router: Router) { }

  goBack(): void {
    this.router.navigate(['/dashboard']);
  }

  openCreateDialog(): void {
    this.selectedAgent.set({ id: 0, name: '', role: '', personality: '' });
    this.dialogVisible.set(true);
  }

  openEditDialog(agent: Agent): void {
    this.selectedAgent.set({ ...agent });
    this.dialogVisible.set(true);
  }

  updateSelected<K extends keyof Agent>(field: K, value: Agent[K]) {
    const current = this.selectedAgent();
    if (!current) return;
    this.selectedAgent.set({ ...current, [field]: value });
  }

  saveAgent(): void {
    const current = this.selectedAgent();
    if (!current) return;

    const updatedList = [...this.agents()];

    if (current.id === 0) {
      updatedList.push({
        ...current,
        id: this.agentIdCounter++
      });
    } else {
      const index = updatedList.findIndex(a => a.id === current.id);
      if (index >= 0) updatedList[index] = { ...current };
    }

    this.agents.set(updatedList);
    this.dialogVisible.set(false);
  }

  cancelDialog(): void {
    this.dialogVisible.set(false);
    this.selectedAgent.set(null);
  }
}
