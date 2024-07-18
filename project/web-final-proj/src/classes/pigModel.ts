export class Pig{
    pid:string
    breed:string
    constructor(pid:string,breed:string){
        this.pid = pid
        this.breed = breed 
    }
}

export class PigReport {
 
  name: string;
  number: number;
  pigID : string;
  Lalocation: number;
  Lolocation:number
  time: number;
  notes: string;
  status: string;
  address : string;
  key: string;
  breed:string
  constructor(
    name: string,
    breed:string,
    number: number,
    pigID : string,
    Lalocation: number,
    Lolocation: number,
    time: number,
    notes: string,
    status: string,
    address : string,
    key: string
  ) {
    this.name = name;
    this.breed = breed;
    this.number = number;
    this.Lalocation = Lalocation;
    this.Lolocation = Lolocation;
    this.time = time;
    this.notes = notes;
    this.pigID= pigID;
    this.status = status;
    this.address = address;
    this.key = key;
  }

  toMap(){
    return {
      name: this.name,
      number: this.number,
      pigID: this.pigID,
      Lalocation: this.Lalocation,
      Lolocation: this.Lolocation,
      time: this.time,
      notes: this.notes,
      status: this.status,
      address: this.address,
    }
  }
}