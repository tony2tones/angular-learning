import { AuthorServicesService } from '../author-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  constructor(service: AuthorServicesService) { }
  AuthorServicesService
  ngOnInit() {
  }

}
