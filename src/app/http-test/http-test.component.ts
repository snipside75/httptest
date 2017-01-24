import {HttpModule, Response} from '@angular/http';
import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";


@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css']
})
export class HttpTestComponent implements OnInit {

  private mod: any = {};
  private images: any = [];

  constructor(private http: Http) {

  }

  getJson () {
    this.http.get('tsconfig.json').
    subscribe(
      (res: Response) => {
        const json = res.json()
        this.mod = json.compilerOptions;
        console.log(json);
      }
    );
  }

  getMedia() {
    this.http.get('http://media.mw.metropolia.fi/wbma/media').
    subscribe(
      (res: Response) => {
        this.images = res.json();
        console.log(this.images)
      }
    );
  }

  ngOnInit() {
    this.getJson();
    this.getMedia()
  }

}

