import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Pig, PigReport} from 'src/classes/pigModel'



@Component({
  selector: 'app-pig-report',
  templateUrl: './pig-report.component.html',
  styleUrls: ['./pig-report.component.css'],
})
export class PigReportComponent implements OnInit {
  @Input() pigs: any;
  constructor(private router: Router, private httpClient: HttpClient) {
   
  }
  
  ngOnInit(): void {
    console.log('im in report');
    // console.log(this.pig.data.name)
  }
  more(id: string) {
    this.router.navigate(['/more', id]);
    console.log('in more');
  }

  delete(key: string) {
    console.log(key);
    this.httpClient
      .delete(
        'https://272.selfip.net/apps/CL1mgrxtHC/collections/pigs/documents/' +
          key
      )
      .subscribe((data: any) => {
        console.log(data);
        window.location.reload();
      });
  }
}
