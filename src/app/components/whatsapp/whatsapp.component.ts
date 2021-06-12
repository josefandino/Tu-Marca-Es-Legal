import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrls: ['./whatsapp.component.scss'],
})
export class WhatsappComponent implements OnInit {

  title = 'CORFEDSCOL';
  ws: any = 'https://wa.me/393517041000?text=Hola%20deseo%20mas%20información%20:';

  constructor() { }

  ngOnInit() {}

}
