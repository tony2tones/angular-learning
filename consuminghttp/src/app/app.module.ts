import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { PostService } from './services/post.service';
import { AppComponent } from './app.component';
import { PostcomponentComponent } from './postcomponent/postcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    PostcomponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
