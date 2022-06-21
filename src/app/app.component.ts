import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
    .list-group-item:first-child {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border-top: 0;
    }
  `]
})
export class AppComponent implements OnInit {
  query: String;
  artists: Array<any>;
  currentArtist: any;

  constructor(private http: HttpClient) {
    this.query = '';
    this.artists = [];
  }

  ngOnInit(): void {
    this.http.get<any>('../assets/data.json')
      .subscribe(data => {
        this.artists = data
      });
  }

  showArtist(artist: any): void {
    this.query = artist.name;
    artist.highlight = !artist.highlight;
    this.currentArtist = artist;
  }
}
