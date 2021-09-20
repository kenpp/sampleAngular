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
    //ここに実行したい処理を書く。
    this.result = 'テストです。'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
