import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  data = {};
  private apiUrl = 'https://address-book-demo.herokuapp.com/api/contacts';

  constructor(private http: Http) {
    this.getContacts().subscribe(data => {
      console.log(data.contacts);
      this.data = data.contacts;
    });
  }

  getContacts() {
    return this.http.get(this.apiUrl)
    .map((res: Response) => res.json());
  }
}
