import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class GoogleAnalyticsService {

  constructor(private http: HttpClient) {
  }

  recuperaSessioni() {
    return this.http.get('http://localhost:8080/sessioni');
  }
}
