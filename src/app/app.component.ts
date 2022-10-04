//import { RestService } from './rest.service';
import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  respuesta: any;
  //usar vapid KEY generada al comienzo
  readonly VAPID_PUBLIC_KEY = "BIuVxvmtGvdwtH1HEw5VxDN2wmZQk2oZRffwgcdFntG8qgQYoKYDhNmZKHWhNx9tw7lCrYl-wBmT-DjkSq-VEuQ";

  constructor(
    private swPush: SwPush) {

  }


  subscribeToNotifications() {
    this.swPush.requestSubscription(
      {
        serverPublicKey: this.VAPID_PUBLIC_KEY
      }
    ).then(respuesta => {
      this.respuesta = respuesta
    })
      .catch(err => {
        this.respuesta = err
      })

    // this.swPush.requestSubscription({
    //   serverPublicKey: this.VAPID_PUBLIC_KEY
    // }).then(tokens => {

    //   // this.rest.guardarEnviar({
    //   //   tokens: JSON.parse(JSON.stringify(tokens))
    //   // }).subscribe(respueta => {

    //   // })

    //   this.respuesta = tokens
    // })
    //   .catch(err => {
    //     this.respuesta = 'ERROR de permiso o navegador no soportado'
    //   });
  }
}