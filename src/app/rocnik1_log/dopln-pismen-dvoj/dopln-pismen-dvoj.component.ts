import { Component, OnInit } from '@angular/core';
import {NgModel} from '@angular/forms';


@Component({
  selector: 'app-dopln-pismen-dvoj',
  templateUrl: './dopln-pismen-dvoj.component.html',
  styleUrls: ['./dopln-pismen-dvoj.component.scss']
})
export class DoplnPismenDvojComponent implements OnInit {

  constructor() {
  }

  pismenoh: '';
  pismenomodraobloha = 'h';


  pismenol: '';
  pismenomč = 'l';

  pismenok: '';
  pismenomh = 'k';

  pismenom: '';
  pismenobm = 'm';

  pismenos: '';
  pismenovh = 's';

  pismenoO: '';
  pismenozj = 'o';

  pismenob: '';
  pismenolr = 'b';

  pismenor: '';
  pismenočo = 'r';

  pismenod: '';
  pismenotj = 'd';

  pismenoa: '';
  pismenozš = 'a';

  counter = 0;

  znamka: number;

  procenta: number;

  check(): void {
    if (this.pismenoh !== this.pismenomodraobloha) {
      console.log('je to spatne');
    } else {
      console.log('je to spravne');
      this.counter++;
    }
  }

  check2(): void {
    if (this.pismenol !== this.pismenomč) {
      console.log('je to spatne');
    } else {
      console.log('je to spravne');
      this.counter++;
    }
  }

  check3(): void {
    if (this.pismenok !== this.pismenomh) {
      console.log('je to spatne');
    } else {
      console.log('je to spravne');
      this.counter++;
    }
  }

  check4(): void {
    if (this.pismenom !== this.pismenobm) {
      console.log('je to spatne');
    } else {
      console.log('je to spravne');
      this.counter++;
    }
  }

  check5(): void {
    if (this.pismenos !== this.pismenovh) {
      console.log('je to spatne');
    } else {
      console.log('je to spravne');
      this.counter++;
    }
  }

  check6(): void {
    if (this.pismenob !== this.pismenolr) {
      console.log('je to spatne');
    } else {
      console.log('je to spravne');
      this.counter++;
    }
  }

  check7(): void {
    if (this.pismenor !== this.pismenočo) {
      console.log('je to spatne');
    } else {
      console.log('je to spravne');
      this.counter++;
    }
  }

  check8(): void {
    if (this.pismenod !== this.pismenotj) {
      console.log('je to spatne');
    } else {
      console.log('je to spravne');
      this.counter++;
    }
  }

  check9(): void {
    if (this.pismenoa !== this.pismenozš) {
      console.log('je to spatne');
    } else {
      this.counter++;
      console.log('je to spravne');
    }
  }

  check10(): void {
    if (this.pismenoO !== this.pismenozj) {
      console.log('je to spatne');
    } else {
      this.counter++;
      console.log('je to spravne');
    }
  }

  vyhodnotit(): void {
    if (this.counter === 9 || this.counter === 10) {
      this.znamka = 1;
    }
    if (this.counter === 7 || this.counter === 8) {
      this.znamka = 2;
    }
    if (this.counter === 5 || this.counter === 6) {
      this.znamka = 3;
    }
    if (this.counter === 2 || this.counter === 3 || this.counter === 4) {
      this.znamka = 4;
    }
    if (this.counter === 0 || this.counter === 1) {
      this.znamka = 5;
    }
    console.log(this.znamka);
  }

  getProcenta(): number {
  this.procenta = this.counter * 10;
  return this.procenta; + '% úspěšnost';
  }


  ngOnInit(): void {
  }

}
