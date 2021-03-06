import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { log } from "util";

@Component({
  selector: "app-value",
  templateUrl: "./value.component.html",
  styleUrls: ["./value.component.css"]
})
export class ValueComponent implements OnInit {
  values: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getValues();
  }

  getValues() {
    this.http.get("http://localhost:5000/api/values").subscribe(
      resp => {
        this.values = resp;
        console.log(this.values);
      },
      err => {
        console.log(err);
      }
    );
  }
}
