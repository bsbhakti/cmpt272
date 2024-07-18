import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-pig-form',
  templateUrl: './pig-form.component.html',
  styleUrls: ['./pig-form.component.css'],
})
export class PigFormComponent implements OnInit {
  form: FormGroup;
  time: number = Date.now()

  constructor(private httpClient:HttpClient) {
    let formControls = {
      name: new FormControl('', [Validators.required]),
      number: new FormControl('', [Validators.required]),
      Lalocation: new FormControl('',[Validators.required]),
      Lolocation: new FormControl('',[Validators.required]),
      time: new FormControl(this.time),
      notes: new FormControl(''),
      status: new FormControl('Ready for pickup'),
    };
    this.form = new FormGroup(formControls);
  }
  ngOnInit(): void {}

  onSubmit(values: any) {
    console.log("hi")
    // console.log(values);
    console.log(this.time)
    values = {name : values.name,number :  values.number,Lalocation :values.Lalocation,Lolocation :values.Lolocation, time : values.time, notes : values.notes,status : values.status}
    console.log(values)
    this.httpClient
      .post('https://272.selfip.net/apps/CL1mgrxtHC/collections/pigs/documents/', {
        "key": this.genUniqueId(),
        "data": values
      })
      .subscribe((data: any) => {
        console.log('hu');
      });

  }

   genUniqueId(): string {
  const dateStr = Date
    .now()
    .toString(36); // convert num to base 36 and stringify

  const randomStr = Math
    .random()
    .toString(36)
    .substring(2, 8); // start at index 2 to skip decimal point

  return `${dateStr}-${randomStr}`;
}

}
