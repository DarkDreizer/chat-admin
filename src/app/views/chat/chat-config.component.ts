import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { SliderModule } from 'primeng/slider';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-chat-config',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    InputNumberModule,
    SliderModule,
    CheckboxModule,
    DropdownModule,
    ButtonModule,
    CardModule,
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './chat-config.component.html',
  styleUrl: './chat-config.component.scss'
})
export class ChatConfigComponent {
  temperature = signal(0.7);
  maxTokens = signal(512);
  enableTypingSim = signal(true);
  enableMemory = signal(false);
  tone = signal('friendly');

  toneOptions = [
    { label: 'Friendly', value: 'friendly' },
    { label: 'Neutral', value: 'neutral' },
    { label: 'Formal', value: 'formal' },
  ];

  constructor(private toast: MessageService, private router: Router) {}

  goBack(): void {
    this.router.navigate(['/dashboard']); // or replace with previous route logic
  }

  saveConfig(): void {
    console.log('Saving config:', {
      temperature: this.temperature(),
      maxTokens: this.maxTokens(),
      enableTypingSim: this.enableTypingSim(),
      enableMemory: this.enableMemory(),
      tone: this.tone()
    });

    this.toast.add({ severity: 'success', summary: 'Saved', detail: 'Chat configuration updated.' });
  }
}
