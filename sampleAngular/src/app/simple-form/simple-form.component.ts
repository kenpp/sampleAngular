import { Component, OnInit, SimpleChanges } from '@angular/core';
import Compressor from 'compressorjs';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  text1!: string;
  text2!: string;
  result: string = "足し算しましょう。";
  //imgPath: Promise<string> = new Promise<string>(() => { return ""; });
  fileContent = {
    base64: "",
  };

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

  private promisedCompressor(file: File, q = 0.6): Promise<Blob | undefined> {
    return new Promise((resolve, reject) => {
      new Compressor(file, {
        quality: q,
        success(blob) {
          resolve(blob); // Promise を 成功終了
        },
        error(_) {
          reject(undefined); // Promise を 異常終了
        }
      });
    });
  }

  // ファイルアップロード
  // public inputFile(event: any): void {
  //   const thisComponent = this;
  //   if (event.target!.files && event.target!.files[0]) {
  //     var reader = new FileReader();
  //     new Compressor(event.target!.files[0], {
  //       quality: 0.6,
  //       success(result) {
  //         alert("変更があった！")
  //         reader.readAsDataURL(result); // read file as data url
  //         //  これが終わった後に、変更があったイベントを送信！

  //         reader.onload = () => { // called once readAsDataURL is completed
  //           // thisComponent.imgPath = <string>reader.result;
  //           thisComponent.imgPath = new Promise<string>((resolve, reject) => {
  //             setTimeout(function () {
  //               alert("変更があった！")
  //               resolve(<string>reader.result);
  //               console.log(thisComponent.imgPath);
  //             }, 1000)
  //           });
  //         }
  //       },
  //     })
  //     // reader.readAsDataURL(event.target!.files[0]); // read file as data url

  //     // reader.onload = (event) => { // called once readAsDataURL is completed
  //     //   this.imgPath = <string>event.target!.result;
  //     // }
  //   }
  // ファイルアップロード
  public inputFile(event: any): void {
    const thisComponent = this;
    if (event.target!.files && event.target!.files[0]) {
      var reader = new FileReader();
      this.promisedCompressor(event.target!.files[0]).then(
        result => {
          if (result) {
            reader.readAsDataURL(result); // read file as data url
            reader.onload = () => { // called once readAsDataURL is completed
              thisComponent.fileContent.base64 = <string>reader.result;

            }
          }
        }
      )
    }
  }
}
