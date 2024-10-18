import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from '../../services/login/login.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, ToastModule, ButtonModule, FontAwesomeModule],
  providers: [LoginService, MessageService],
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

  constructor(private loginService: LoginService, private messageService: MessageService) { }

  ngOnInit() {
  }

  onSubmit() {
    const email = this.userForm.value.email!
    const password = this.userForm.value.password!

    this.loginService.login({
      email,
      password
    }).subscribe(data => {
      console.log(data)
    })
  }

  show() {
    console.log('veio')
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
}

}
