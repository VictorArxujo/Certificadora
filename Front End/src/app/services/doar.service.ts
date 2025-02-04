import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Doacoes } from "../models/Doacoes";
import { catchError, first, tap, Observable } from 'rxjs';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class DoarService {
  private url = "http://localhost:3000/auth";
  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  } 
  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService) {}

  doar(doacao: Omit<Doacoes, "id">): Observable<Doacoes> {
    return this.http.post<Doacoes>(`${this.url}/doar`, doacao, this.httpOptions).pipe(
      first(),
      catchError(this.errorHandlerService.handleError<Doacoes>("Doação"))
      )
  }

  puxar(cpfUsuario: any) {
    return this.http.post<{cpfUsuario: Pick<Doacoes, "cpfUsuario">}>(`${this.url}/puxar`, cpfUsuario, this.httpOptions).pipe(
      first(),
      catchError(this.errorHandlerService.handleError<{cpfUsuario: Pick<Doacoes, "cpfUsuario">}>("Puxar Doações"))
      )
  }
}
