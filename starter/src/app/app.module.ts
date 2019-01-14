import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {FormsModule}  from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarComponent } from './star.component';
import { CoursesComponent } from './courses.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';
import { CoursesService } from './courses.service';
import { TitleCasePipe } from './title-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    StarComponent,
    TitleCasePipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CoursesService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
