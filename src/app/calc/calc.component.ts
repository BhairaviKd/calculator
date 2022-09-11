import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  title = "mycalculator";
  toshow='0'
  currentVal=""
  writetoinput(value:string){
    if(this.currentVal=='0'){
      this.currentVal=value
    }
    this.currentVal = this.currentVal  +value;
    this.toshow = this.currentVal;
  }

  equals()
  {
    this.toshow = eval(this.currentVal)
    this.currentVal = this.toshow
  }

  clear(){
    this.toshow = "0";
    this.currentVal="";
  }

  back(){
    this.currentVal = this.currentVal.slice(0,-1)
    if(this.currentVal==''){
      this.currentVal='0'
    }
    this.toshow = this.currentVal
  }

  constructor() { }

  ngOnInit(): void {
  }

}
