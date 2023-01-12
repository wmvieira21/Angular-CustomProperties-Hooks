import { ElementRef, Output, ViewChild } from '@angular/core';
import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {

  //svCreated method called on app.component
  @Output('svCreated') severCreated = new EventEmitter<{serverName: string, serverContent: string, status: String}>();
  serverName: string;
  serverContent: string;
  
  @ViewChild('serverStatus') serverStatusInput : ElementRef;

  //emit (severCreated)="onServerAdded($event)"
  onAddServer(serverContentInput: HTMLInputElement) {
    this.serverContent = serverContentInput.value;
    
    this.severCreated.emit({
      serverName: this.serverName,
      serverContent: this.serverContent,
      status: this.serverStatusInput.nativeElement.value
    }
    );
  }
}
