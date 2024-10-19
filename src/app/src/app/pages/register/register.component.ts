import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
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
import { AuthService } from '../../services/auth/auth.service';
import { timer } from 'rxjs';
import { PasswordModule } from 'primeng/password';

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
    RouterModule,
    PasswordModule
  ],
  providers: [AuthService, MessageService],
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

  constructor(
    private loginService: AuthService,
    private messageService: MessageService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    const name = this.userForm.value.name!
    const email = this.userForm.value.email!
    const password = this.userForm.value.password!

    this.loginService.register({
      name,
      email,
      password
    })
    .pipe()
    .subscribe({
      next: (data) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Bem vindo! Usuário cadastrado. Redirecionando para o login..' })

        timer(3000).subscribe(_ => this.router.navigate(['/sign-in']))
      },
      error: (err) => this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Este email já existe.' })
    })
  }

}
