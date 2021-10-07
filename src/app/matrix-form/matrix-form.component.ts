import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from "@angular/forms";


@Component({
  selector: 'app-matrix-form',
  templateUrl: './matrix-form.component.html',
  styleUrls: ['./matrix-form.component.css']
})
export class MatrixFormComponent implements OnInit {
  matrixArr: any = [];
  resultArr: any = new FormArray([]);
  rows: number = 0;
  columns: number = 0;
  isDisabled: boolean = false;

  @Output() changedMatrix: EventEmitter<any> = new EventEmitter<any>();

  matrixCreator: FormGroup = new FormGroup({
    rowsNum: new FormControl('0'),
    columnsNum: new FormControl('0')
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  createFormArray() {
    for (let i = 0; i < this.rows; i++) {
      this.matrixArr.push([]);
      this.resultArr.push(new FormArray([]))
      for (let j = 0; j < this.columns; j++) {
        this.matrixArr[i][j] = '0';
        (this.resultArr.at(i) as FormArray).push(new FormControl('0'));
      }
    }
    console.log(this.resultArr.value);
  }

  createMatrix() {
    this.rows = this.matrixCreator.value.rowsNum;
    this.columns = this.matrixCreator.value.columnsNum;

    this.createFormArray();
    this.isDisabled = true;
  }


  changeMatrix() {
    this.changedMatrix.emit(this.resultArr.value);
  }
}
