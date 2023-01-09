import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [];

  onServerAdded(eventData: { serverName: string, serverContent: string}) {
    this.serverElements.push({
      name: eventData.serverName,
      content: eventData.serverContent
    });
  }
}
