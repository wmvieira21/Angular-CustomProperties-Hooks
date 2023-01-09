import { Output } from '@angular/core';
import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  
  //svCreated method called on app.component
  @Output('svCreated') severCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  serverName: string;
  serverContent: string;

  //emit (severCreated)="onServerAdded($event)"
  onAddServer(){
    this.severCreated.emit({
      serverName: this.serverName, 
      serverContent: this.serverContent}
      );
  }
}
