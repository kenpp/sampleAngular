import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  text1!: string;
  text2!: string;
  result: string = "足し算しましょう。";

  //関数の追加！
  addAndShow(): void {
    let formResult: string = "正しい値を入力してください。"
    const value1 = Number(this.text1);
    const value2 = Number(this.text2);
    if (!Number.isNaN(value1) && !Number.isNaN(value2)) {
      formResult = `${value1} + ${value2} = ${value1 + value2}`;
    }
    this.result = formResult;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
