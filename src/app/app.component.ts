import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardModule, InputTextModule, PasswordModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'chat-admin';
}
