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
  Lalocation: number;
  Lolocation:number
  time: number;
  notes: string;
  status: string;
  key: string;
  constructor(
    name: string,
    number: number,
    Lalocation: number,
    Lolocation: number,
    time: number,
    notes: string,
    status: string,
    key: string
  ) {
    this.name = name;
    this.number = number;
    this.Lalocation = Lalocation;
    this.Lolocation = Lolocation;
    this.time = time;
    this.notes = notes;
    this.status = status;
    this.key = key;
  }
}