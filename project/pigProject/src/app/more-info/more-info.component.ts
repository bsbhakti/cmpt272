import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PigReport } from 'src/classes/pigModel';


@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})
export class MoreInfoComponent implements OnInit {
  id:any
  pigReport: PigReport
  constructor(private ActivatedRoute: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.id = this.ActivatedRoute.snapshot.paramMap.get('id');
    console.log(this.id)
    this.httpClient
      .get<Object>(
        'https://272.selfip.net/apps/CL1mgrxtHC/collections/pigs/documents/'+this.id
      )
      .subscribe((data: any) => {
        console.log(data);
        this.pigReport = new PigReport(data.data.name,data.data.number,data.data.Lalocation,data.data.Lolocation,data.data.time,data.data.notes,data.data.status,this.id)
      });

  }

}
