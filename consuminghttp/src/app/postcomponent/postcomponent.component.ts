import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'postcomponent',
  templateUrl: './postcomponent.component.html',
  styleUrls: ['./postcomponent.component.css']
})
export class PostcomponentComponent implements OnInit {

  constructor(http: HttpClient) {
    http.get('http://jsonplaceholder.typicode.com/posts')
    .subscribe(response => {
      console.log(response);
    })
   }

  ngOnInit() {
  }

}
