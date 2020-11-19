import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Clientes } from '../gymnasio/models/clientes';
import {catchError, tap } from 'rxjs/operators';
import { HandleHttpErrorService } from '../@base/handleHttpError/handle-http-error.service';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService) {
    this.baseUrl = baseUrl;
  }
  get(): Observable<Clientes[]> {
    return this.http.get<Clientes[]>(this.baseUrl + 'api/cliente')
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Clientes[]>('Consulta cliente', null))
      );
  }
  post(cliente: Clientes): Observable<Clientes> {
    return this.http.post<Clientes>(this.baseUrl + 'api/cliente', cliente)
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Clientes>('Registrar cliente', null))
      );
  }
}
