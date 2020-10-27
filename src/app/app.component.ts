import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit {
  query: string;
  artists: object;

  showArtists(e, item){
    console.log(item)
    this.query = item.name
  }

  constructor(private http: HttpClient){
    this.query = ''
    this.artists = []
  }

  ngOnInit() : void {
    this.http.get<object>('../assets/data.json').subscribe(
      data => {
        this.artists = data
      }
    )
  }
}
