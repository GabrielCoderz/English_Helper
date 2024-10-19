import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../services/auth/auth.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { RippleModule } from 'primeng/ripple';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ToastModule,
    ButtonModule,
    FontAwesomeModule,
    FloatLabelModule,
    InputTextModule,
    InputGroupModule,
    InputGroupAddonModule,
    RippleModule,
    RouterModule
  ],
  providers: [AuthService, MessageService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  faUser = faUser;
  faLock = faLock;

  constructor(
    private loginService: AuthService,
    private messageService: MessageService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    const email = this.userForm.value.email!
    const password = this.userForm.value.password!

    this.loginService.login({
      email,
      password
    })
    .pipe()
    .subscribe({
      next: (data) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Bem vindo!' });
        this.router.navigate(['/playground']);
      },
      error: (err) => this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Email ou senha incorretos.' })
    })
  }
}
