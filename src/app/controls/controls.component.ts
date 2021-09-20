import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})

export class ControlsComponent implements OnInit {
  coffeeForm!: FormGroup;
  hotColdStatuses: string[] = ["Hot", "Cold"];
  addsSel: string[] = ["Milk", "Sugar"];
  nutSel: string[] = ["ピーナッツ", "アーモンド", "くるみ"]
  // フォームビルダーを使うと、リアルタイムに値を設定することができる！！
  constructor(private fb: FormBuilder) {
    this.coffeeForm = this.fb.group({
      name: "ブレンド",
      taste: "バランスのよい口当たり",
      hotCold: this.hotColdStatuses[0],
      adds: this.fb.array([]),
      nut: this.nutSel[0]
    });
  }

  ngOnInit(): void {
  }

  // 本当は、checkedを渡したかったけど、できなかったため、このようにした。
  onCheckChanged(item: string, event: any) {
    const isChecked = event.target.checked as boolean;
    let formArray = this.coffeeForm.controls.adds as FormArray;
    if (isChecked) {
      formArray.push(new FormControl(item));
    } else {
      let index = formArray.controls.findIndex(elm => elm.value == item);
      formArray.removeAt(index);
    }
  }

}
