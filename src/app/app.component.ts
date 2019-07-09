import {Component, OnInit} from '@angular/core';
import {GoogleAnalyticsService} from './google-analytics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  sessioni = {};
  nuoviUtenti = {};

  constructor(private servizioGoogle: GoogleAnalyticsService) {}

  async ngOnInit() {
    await this.caricaSessioniGoogle();
    await this.caricaNuoviUtentiGoogle();
  }

  async caricaSessioniGoogle() {
    const header = [['Data', 'Sessioni']];
    let datiGoogle;

    try {
      datiGoogle = await this.servizioGoogle.recuperaSessioni().toPromise();
      datiGoogle = datiGoogle.map(el => [new Date(el[0]), el[1]]);
      datiGoogle = header.concat(datiGoogle);

      this.sessioni = {
        chartType: 'AreaChart',
        dataTable: datiGoogle,
        options: {
          height: 400,
          colors: ['red'],
          legend: {
            position: 'bottom'
          }
        }
      };

    } catch (e) {
      console.error(e);
    }
  }

  async caricaNuoviUtentiGoogle() {
    const header = [['Data', 'Nuovi Utenti']];
    let datiGoogle;

    try {
      datiGoogle = await this.servizioGoogle.recuperaSessioni().toPromise();
      datiGoogle = datiGoogle.map(el => [new Date(el[0]), el[1]]);
      datiGoogle = header.concat(datiGoogle);

      this.nuoviUtenti = {
        chartType: 'AreaChart',
        dataTable: datiGoogle,
        options: {
          height: 400,
          colors: ['blue'],
          legend: {
            position: 'bottom'
          }
        }
      };

    } catch (e) {
      console.error(e);
    }
  }




}
