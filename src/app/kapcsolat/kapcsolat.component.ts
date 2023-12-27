import { Component, OnInit } from '@angular/core';
import { KapcsolatService } from '../kapcsolat.service';

@Component({
  selector: 'app-kapcsolat',
  templateUrl: './kapcsolat.component.html',
  styleUrls: ['./kapcsolat.component.css'],
})
export class KapcsolatComponent implements OnInit {
  headquarters: any;
  kapcsolatInfo: any;
  zipCode: any;
  name: any;

  constructor(private kapcsolatService: KapcsolatService) {}

  ngOnInit() {
    const kapcsolat = this.kapcsolatService.getKapcsolat();
    this.headquarters = kapcsolat.headquarters;
    this.kapcsolatInfo = kapcsolat.kapcsolatInfo;
    this.zipCode = kapcsolat.zipCode;
    this.name = kapcsolat.name;
  }
}
