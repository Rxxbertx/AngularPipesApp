import {Component, signal} from '@angular/core';
import {Card} from '../../components/card/card';
import {
  AsyncPipe,
  I18nPluralPipe,
  I18nSelectPipe,
  JsonPipe,
  KeyValuePipe,
  SlicePipe,
  TitleCasePipe
} from '@angular/common';
import {interval, tap} from 'rxjs';

const client1 = {
  name: 'Robertson',
  gender: 'male',
  age: 21,
}
const client2 = {
  name: 'Rabertsan',
  gender: 'female',
  age: 24,
}


@Component({
  selector: 'app-uncommon-page',
  imports: [
    Card,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    KeyValuePipe,
    TitleCasePipe,
    AsyncPipe
  ],
  templateUrl: './uncommon-page.html',
  styleUrl: './uncommon-page.css'
})
export default class UncommonPage {

  //i18nselect
  client = signal(client1)

  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2)
      return;
    }
    this.client.set(client1)
  }

  invitatonMap = {
    male: 'boy',
    female: 'girl'
  }

  //i18 n plural pipe
  clientsMap = signal({
    '=0': ' no clients waiting',
    '=1': ' 1 client waiting',
    '=2': ' 2 clients waiting',
    other: ' # clients waiting'
  })

  clients = signal([client1, client2, client1]);

  deleteClient() {
    this.clients.update((prev) => prev.slice(1))
  }

  //key value pipe

  profile = {
    name: 'Roberto',
    age: '22',
    address: 'Burgos'
  }


  //async pipe

  promiseValue: Promise<string> = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolved")
    }, 3000)
  })

  myObservableTimer = interval(1000).pipe(
    tap((value) => console.log(value))
  );


}
