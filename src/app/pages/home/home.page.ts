import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  title: any = 'Tu Marca Es Legal';

  img: any = [
    {img: '../../../assets/img/1web.png'},
    {img: '../../../assets/img/2web.png'},
    {img: '../../../assets/img/3web.png'},
    {img: '../../../assets/img/4web.png'},
    {img: '../../../assets/img/5web.png'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
