import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [];

  onServerAdded(eventData: { serverName: string, serverContent: string, status: string}) {
    this.serverElements.push({
      name: eventData.serverName,
      content: eventData.serverContent,
      status: eventData.status
    });
  }
  changeName(){
    this.serverElements[0].name = "changed";
  }
  destroyFirst(){
    this.serverElements.splice(0,1);
  }

}
