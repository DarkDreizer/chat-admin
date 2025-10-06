import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import {ChatLog} from '../../interfaces/chat-log.interface';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-logs',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    RatingModule,
    ButtonModule,
    CardModule,
    DialogModule
  ],
  templateUrl: './logs.component.html',
  styleUrl: './logs.component.scss'
})
export class LogsComponent {
  chatLogs = signal<ChatLog[]>([
    {
      id: 1,
      user: 'Jane Doe',
      date: new Date('2025-10-01'),
      rating: 4,
      messages: [
        { sender: 'User', text: 'Hello, I need help with my subscription.' },
        { sender: 'AI', text: 'Sure! What would you like to know?' }
      ]
    },
    {
      id: 2,
      user: 'John Smith',
      date: new Date('2025-10-02'),
      rating: 5,
      messages: [
        { sender: 'User', text: 'Can I change my plan?' },
        { sender: 'AI', text: 'Yes, you can upgrade or downgrade at any time.' }
      ]
    }
  ]);

  dialogVisible = signal(false);
  selectedLog = signal<ChatLog | null>(null);

  goBack(): void {
    history.back();
  }

  viewChat(log: ChatLog): void {
    this.selectedLog.set(log);
    this.dialogVisible.set(true);
  }

  closeDialog(): void {
    this.dialogVisible.set(false);
    this.selectedLog.set(null);
  }
}
