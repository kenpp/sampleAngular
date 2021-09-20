import { Component } from '@angular/core';

interface Route {
  path: string,
  title: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'sampleAngular';
  routes: Route[] = [
    { path: "./simple-form", title: "Simple Form" },
    { path: "./better-form", title: "Better Form" },
    { path: "./controls", title: "Controls" },
  ];
}
