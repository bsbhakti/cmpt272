import { Component, OnInit } from '@angular/core';
import {Pig, PigReport} from 'src/classes/pigModel'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pig-list',
  templateUrl: './pig-list.component.html',
  styleUrls: ['./pig-list.component.css'],
})
export class PigListComponent implements OnInit {
  pigs: any = [];
  newPigs: any = [];
  i: PigReport;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.http
      .get<Object>(
        'https://272.selfip.net/apps/CL1mgrxtHC/collections/pigs/documents/'
      )
      .subscribe((data: any) => {
        this.pigs = data;
        console.log('this was retrieved');
        console.log(this.pigs);
        for (let i = 0; i < this.pigs.length; i++) {
          console.log(i);
          this.newPigs[i] = new PigReport(
            this.pigs[i].data.name,
            this.pigs[i].data.number,
            this.pigs[i].data.Lalocation,
            this.pigs[i].data.Lolocation,
            this.pigs[i].data.time,
            this.pigs[i].data.notes,
            this.pigs[i].data.status,
            this.pigs[i].key
          );
        }
        console.log('after retrieal');
        console.log(this.newPigs);
      });
  }
  add() {
    this.router.navigate(["/add"]);
    console.log('navigated to form')
  }
  map(){
    this.router.navigate(["/map"])
  }
}
