import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { MessageService } from 'primeng/api';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-register',
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
  providers: [LoginService, MessageService],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  faUser = faUser;
  faLock = faLock;

  constructor(private loginService: LoginService, private messageService: MessageService) { }

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
      next: (data) => this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Bem vindo!' }),
      error: (err) => this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Email ou senha incorretos.' })
    })
  }

}
