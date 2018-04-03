import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'app works';
  data = {};
  private apiUrl = 'https://address-book-demo.herokuapp.com/api/contacts';

  constructor(private http: Http) {
  this.ngOnInit().subscribe(data => {
    console.log(data);
    this.data = data
  })}

  ngOnInit() {
    return this.http.get(this.apiUrl)
    .map((res: Response) => res.json())
  }

}
