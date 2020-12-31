import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chat-POC';

  constructor(private router: Router) {

  }

  gotoTasks() {
    this.router.navigateByUrl('/tasks');
    console.log("pres me clicked")
  }
}
