import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Doacoes } from "../models/Doacoes";
import { catchError, first, tap, Observable } from 'rxjs';
import { ErrorHandlerService } from './error-handler.service';
import { map } from 'rxjs/operators';

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

  fetchAll(cpf?: number): Observable<Doacoes[]> {
    let endpoint = `${this.url}/puxar`;
    if (cpf) {
      endpoint += `?cpfUsuario=${cpf}`;
    }
    return this.http.get<Doacoes[]>(endpoint, { responseType: "json" }).pipe(
      map(response => {
        console.log("Resposta da API:", response); // Debug para ver a resposta real
        return Array.isArray(response) ? response : []; // Garante que seja uma lista
      }),
      catchError(this.errorHandlerService.handleError<Doacoes[]>("lista", []))
    );
  }
  
}
