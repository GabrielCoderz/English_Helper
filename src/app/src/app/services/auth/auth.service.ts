import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface UserLogin {
  email: string,
  password: string
}

export interface UserRegister {
  name: string,
  email: string,
  password: string
}

@Injectable()
export class AuthService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  login(user: UserLogin): Observable<UserLogin> {
    return this.http.post<any>(`${this.apiUrl}/session`, user).pipe(
      map(response => {
        // Assumindo que a API retorna um token ou outro tipo de credencial
        if (response.token) {
          // Armazene o token (por exemplo, no localStorage ou sessionStorage)
          localStorage.setItem('authToken', response.token);
        }
        return response;
      })
    );
  }

  register(user: UserRegister): Observable<UserRegister> {
    return this.http.post<any>(`${this.apiUrl}/`, user)
  }
}
