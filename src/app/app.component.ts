import { Component } from '@angular/core';
import {dateTimestampProvider} from "rxjs/internal/scheduler/dateTimestampProvider";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  name = 'Román Ballesteros';
  description = 'Full Stack Developer passionate about building web applications.';
  email = 'romanballesteros@hotmail.com';
  github = 'https://github.com/Balles1316';
  linkedin = 'romanballesteros@hotmail.com';
  projects = ['Project 1', 'Project 2', 'Project 3'];
  title = 'untitled';
  currentYear: number = new Date().getFullYear();
}
