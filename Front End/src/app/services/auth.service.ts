import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from "../models/Usuario";
import { catchError, first, tap, Observable } from 'rxjs';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = "http://localhost:3000/auth";
  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  } 
  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService) {}

  signup(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.url}/registro`, usuario, this.httpOptions).pipe(
      first(),
      catchError(this.errorHandlerService.handleError<Usuario>("registro"))
  )
  }
  login(cpf: Pick<Usuario, "cpf">, senha: Pick<Usuario, "senha">, tipo: Pick<Usuario, "tipo">): Observable<{
    token: string; userCpf: Pick<Usuario, 'cpf'>
  }> {
    return this.http.post(`${this.url}/login`, {cpf, senha, tipo}, this.httpOptions).pipe(
      first<any>(),
      tap((tokenObjetc: {token: string; userCpf: Pick<Usuario, 'cpf'>}) => {
        
      }),
      catchError(this.errorHandlerService.handleError<{
        token: string; userCpf: Pick<Usuario, 'cpf'>
      }>("login"))
  )
  }
}
