import { Component, OnInit } from '@angular/core';
import { SessionService} from './session.service'
import { FileUploader } from "ng2-file-upload";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
