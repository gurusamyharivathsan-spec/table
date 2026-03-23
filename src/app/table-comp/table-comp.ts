import { Component } from '@angular/core';

@Component({
  selector: 'app-table-comp',
  imports: [],
  templateUrl: './table-comp.html',
  styleUrl: './table-comp.css',
})
export class TableComp {
  user = [{
    name : "User1",
    email : "email2",
    phone : "98765",  },
    {
    name : "User2",
    email : "email1",
    phone : "98765",  },
    {
    name : "User3",
    email : "email1",
    phone : "98765",  },
    {
    name : "User4",
    email : "email1",
    phone : "98765",  },
  ]
}
