import { Component, OnInit } from '@angular/core';
import { NotifyService } from '../services/notify.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  constructor(public srv: NotifyService) {
    srv.Notificacion.subscribe( msg => window.alert(msg));
  }

  ngOnInit() {
  }

}
