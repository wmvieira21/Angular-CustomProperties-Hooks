import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  //receive the information from [elementServer]="serveElement
  @Input() elementServer = { name: String, content: String, status: String};
}
