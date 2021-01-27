import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-arthors',
  templateUrl: './arthors.component.html',
  styleUrls: ['./arthors.component.css']
})
export class ArthorsComponent implements OnInit {

  title="test title"
  authors
  constructor(author:AuthorsService) {
    this.authors= author.getAuthors();
  }

  ngOnInit(): void {
  }



}
