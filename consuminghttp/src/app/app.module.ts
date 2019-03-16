import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { PostService } from './services/post.service';
import { AppComponent } from './app.component';
import { PostcomponentComponent } from './postcomponent/postcomponent.component';
import { AppErrorHandler } from './common/validators/app-error-handler';

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
    PostService,
    {provide: ErrorHandler,useClass:AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
