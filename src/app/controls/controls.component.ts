import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})

export class ControlsComponent implements OnInit {
  coffeeForm!: FormGroup;
  hotColdStatuses: string[] = ["Hot", "Cold"];

  // フォームビルダーを使うと、リアルタイムに値を設定することができる！！
  constructor(private fb: FormBuilder) {
    this.coffeeForm = this.fb.group({
      name: "ブレンド",
      taste: "バランスのよい口当たり",
      hotCold: this.hotColdStatuses[0]
    });
  }

  ngOnInit(): void {
  }

}
