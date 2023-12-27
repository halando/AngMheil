import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KapcsolatService {

  kapcsolat = {
    headquarters: 'Zalaegerszeg',
    kapcsolatInfo: '0640',
    zipCode: 'i5400',
    name: 'Tamas'
  };

  constructor() { }

  getKapcsolat() {
    return this.kapcsolat;
  }
}
