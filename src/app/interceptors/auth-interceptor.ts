import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { connexionService } from '../services/service.connexion';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private connexion: connexionService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.connexion.tocken;
    const newRequest = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + authToken)
    });
    return next.handle(newRequest);
  }
}