import * as imports from "./Pigmodel";

interface PigControllerInterface {
  add(pig: imports.Pig): void;
  getAll(): imports.Pig[];
}

export class PigController implements PigControllerInterface {
  pigs: imports.Pig[];
  constructor() {
    this.pigs = [];
  }
  add(pig: imports.Pig) {
    //console.log("adding pig");
    //console.log(localStorage.pigsArray);
    // let obj = JSON.parse(localStorage.pigsArray);
    let existingEntries = localStorage.getItem("pigsArray");
    if (localStorage.pigsArray != null) {
      //console.log("in here");
      let existingEntries2 = JSON.parse(localStorage.pigsArray);
      //console.log(existingEntries2);

      localStorage.currentPig = JSON.stringify(pig);
      existingEntries2.push(pig);
      existingEntries2.sort((a: imports.Pig, b: imports.Pig) => {
        if (a.category > b.category) return 1;
        if (b.category > a.category) return -1;
        else {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
        }
      });
      this.pigs.push(pig);
      //console.log(this.pigs);
      localStorage.pigsArray = JSON.stringify(existingEntries2);
    } else {
      localStorage.currentPig = JSON.stringify(pig);
      this.pigs.push(pig);
      localStorage.pigsArray = JSON.stringify(this.pigs);
    }
    // this.pigs.push(pig);
    // localStorage.pigsArray = JSON.stringify(this.pigs);
  }
  getAll() {
    return JSON.parse(localStorage.pigsArray);
  }
}
