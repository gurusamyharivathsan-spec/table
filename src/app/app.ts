import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableComp } from "./table-comp/table-comp";
import { Apicall } from "./apicall/apicall";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Apicall],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-project');
}
