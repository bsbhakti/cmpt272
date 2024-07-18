

export abstract class Pig {
  static num = 0;

  constructor(
    public name: string,
    public weight: string,
    public height: string,
    public category: string
  ) {
     Pig.num++;
  }



}

export interface abilities {
  giveAbility(score: any): void;
}
export class GreyPig extends Pig implements abilities {
  constructor(
    public name: string,
    public weight: string,
    public score2: number,
    public height: string,
    public personality: string,
    public breed: string,
    public category: string
  ) {
    super(name, weight, height, category);

  }
  giveAbility(score: number) {
    this.score2 = score;
  }
}

export class ChestnutPig extends Pig implements abilities {
  constructor(
    public name: string,
    public weight: string,
    public score2: string,
    public height: string,
    public personality: string,
    public breed: string,
    public category: string
  ) {
    super(name, weight, height, category);
  }
  giveAbility(score: string) {
    this.score2 = score;
  }
}

export class WhitePig extends Pig implements abilities {
  constructor(
    public name: string,
    public weight: string,
    public score2: number,
    public height: string,
    public personality: string,
    public breed: string,
    public category: string
  ) {
    super(name, weight, height, category);

  }
  giveAbility(score: number) {
    this.score2 = score;
  }
}

export class BlackPig extends Pig implements abilities {
  constructor(
    public name: string,
    public weight: string,
    public score2: number,
    public height: string,
    public personality: string,
    public breed: string,
    public category: string
  ) {
    super(name, weight, height, category);
  
  }
  

  giveAbility(score: number) {
    this.score2 = score;
  }
}
