import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-pig-form",
  templateUrl: "./pig-form.component.html",
  styleUrls: ["./pig-form.component.css"],
})
export class PigFormComponent implements OnInit {
  form: FormGroup;
  time: number = Date.now();
  previousLocations: any[] = [];
  isLoading: boolean = false;
  selectedTeam: string;

  constructor(private httpClient: HttpClient, private router: Router) {
    let formControls = {
      name: new FormControl(
        "",
        Validators.compose([Validators.required, Validators.minLength(2)])
      ),
      number: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(
            "[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]"
          ),
        ])
      ),
      Lalocation: new FormControl(
        "",
        Validators.compose([Validators.required, Validators.minLength(8)])
      ),
      Lolocation: new FormControl(
        "",
        Validators.compose([Validators.required, Validators.minLength(8)])
      ),

      notes: new FormControl(""),
      pigID: new FormControl("", Validators.compose([Validators.required])),
      breed: new FormControl("Pot-bellied"),
    };
    this.form = new FormGroup(formControls);

    this.form.valueChanges.subscribe((data) => {
      console.log(data);
    });
  }
  ngOnInit(): void {
    this.httpClient
      .get<Object>(
        "https://272.selfip.net/apps/CL1mgrxtHC/collections/pigs/documents/"
      )
      .subscribe((data: any) => {
        console.table(data);

        for (const element of data) {
          console.log(element.data.address);
          let add;
          // if element.data.address?.split(',')[1] is [object Object] then use postal code
          if (element.data.address?.split(",")[1] == "[object Object]") {
            add = element.data.address?.split(",")[2];
          } else {
            add = element.data.address?.split(",")[1];
          }

          this.previousLocations.push({
            address: add,
            lng: element.data.Lolocation,
            lat: element.data.Lalocation,
          });
        }

        //Remove deuplicates
        this.previousLocations = this.previousLocations.filter(
          (thing: any, index: number, self: any) =>
            index ===
            self.findIndex(
              (t: any) => t.address === thing.address && t.lat === thing.lat
            )
        );
      });
  }
  toggleTag(tag: any) {
    console.log(tag);

    this.form.patchValue({
      Lalocation: tag.lat,
      Lolocation: tag.lng,
      name: this.form.value.name,
      number: this.form.value.number,
      notes: this.form.value.notes,
      pigID: this.form.value.pigID,
      time: this.formatDate(this.time),
      breed: this.form.value.breed,
    });
  }
  get name() {
    return this.form.get("name");
  }
  get number() {
    return this.form.get("number");
  }

  get pigID() {
    return this.form.get("pigID");
  }
  private reverseGeoHash(lat: string, lng: string) {
    //send curl to 'https://geocode.xyz/51.50354,-0.12768?geoit=xml&auth=your_api_key'
    const url = `https://geocode.xyz/${lat},${lng}?geoit=json&auth=106983269640745286055x49691`;
    return this.httpClient.get(url);
  }
  async onSubmit(values: any) {
    console.log("Hey bruh clicky");
    console.log(this.form.valid);
    console.log(!this.form.valid);
    try {
      this.isLoading = true;
      this.reverseGeoHash(values.Lalocation, values.Lolocation).subscribe(
        (data: any) => {
          console.log(data);
          const region = data.region;

          const state = data.staddress;
          const postal = data.postal;

          //make a string
          const address = `${region}, ${state} ,${postal}`;
          console.log(address);
          console.log("this is breed");
          console.log(values);
          values = {
            name: values.name,
            number: values.number,
            Lalocation: values.Lalocation,
            Lolocation: values.Lolocation,
            address: address,
            notes: values.notes,
            status: "Ready for pickup",
            pigID: values.pigID,
            time: this.formatDate(this.time),
            breed: values.breed,
          };
          this.httpClient
            .post(
              "https://272.selfip.net/apps/CL1mgrxtHC/collections/pigs/documents/",
              {
                key: this.genUniqueId(),
                data: values,
              }
            )
            .subscribe((data: any) => {
              console.log("hu");

              this.router.navigate(["/submitted"]);
            });
        }
      );
    } catch (e) {
      console.warn(e);
      alert("Something went wrong, please try again");
    } finally {
      this.isLoading = false;
    }
  }

  genUniqueId(): string {
    const dateStr = Date.now().toString(36); // convert num to base 36 and stringify

    const randomStr = Math.random().toString(36).substring(2, 8); // start at index 2 to skip decimal point

    return `${dateStr}-${randomStr}`;
  }
  formatDate(date: number) {
    console.log("inside date");
    const d = new Date(this.time);
    console.log(d)
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDate();
    const hour = d.getHours();
    const minute = d.getMinutes();
    
    if (minute<10){
      var newMinute = '0'+ String(minute)
      console.log(newMinute)
      return year + "-" + month + "-" + day + " " + hour + ":" + newMinute;
    }
    const second = d.getSeconds();
    console.log("TIME");
    console.log(year + "-" + month + "-" + day + " " + hour + ":" + minute);
    return year + "-" + month + "-" + day + " " + hour + ":" + minute;
  }
  onSelected(event: any): void {
    console.log("breed is here")
    console.log(this.form.value);
    this.form.value.breed = event.target.value;
  }
}
