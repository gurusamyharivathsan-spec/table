import { Component } from '@angular/core';

type User = {
  id : number,
  firstName : string,
  age : number,
  phone : number
}

@Component({
  selector: 'app-apicall',
  imports: [],
  templateUrl: './apicall.html',
  styleUrl: './apicall.css',
})
export class Apicall {
  userDetails: User[] = [];
  btnClicked = false
  async loadUser() {
    const data = await fetch('https://dummyjson.com/users');
    const res = await data.json();
    return res;
  }

  async btnClick() {
    this.btnClicked = true
    const userDetails = await this.loadUser();
    this.userDetails = userDetails.users;
    console.log(this.userDetails);
  }
}
