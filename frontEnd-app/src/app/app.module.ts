import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SessionService} from './session.service'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {FileUploadModule} from 'ng2-file-upload';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
     FileUploadModule,
     BrowserModule,
     FormsModule,
     HttpModule
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
