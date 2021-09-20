import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-better-form',
  templateUrl: './better-form.component.html',
  styleUrls: ['./better-form.component.css']
})
export class BetterFormComponent implements OnInit {
  calcForm!: FormGroup;
  result: string = "足し算しましょう";
  constructor() { }

  ngOnInit(): void {
    this.calcForm = new FormGroup({
      "fieldOne": new FormControl("0"),
      "fieldTwo": new FormControl("0")
    })
  }

  get fieldOne() { return this.calcForm.get("fieldOne") };
  get fieldTwo() { return this.calcForm.get("fieldTwo") };

}
