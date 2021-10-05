import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularMatrixFigureCounter';
  figuresCount: number = 0;

  matrixArray: string[][] = [
    ['0', '0', '0', '1', '1', '0', '0', '0'],
    ['0', '1', '0', '0', '1', '1', '1', '0'],
    ['0', '1', '1', '0', '0', '0', '1', '0'],
    ['0', '0', '0', '0', '0', '0', '1', '0'],
    ['1', '0', '1', '1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '1', '0']
  ]

  resultArr = this.matrixArray.map(item => [...item]);

  markNeighbourElems(matrix: any, row: number, col: number): void {
    matrix[row][col] = '';
    if (matrix[row][col - 1] === '1'){
      this.markNeighbourElems(matrix, row, col - 1);
    }

    if (matrix[row][col + 1] === '1'){
      this.markNeighbourElems(matrix, row, col + 1);
    }

    if (matrix?.[row - 1]?.[col] === '1'){
      this.markNeighbourElems(matrix, row - 1 , col);
    }

    if (matrix?.[row + 1]?.[col] === '1'){
      this.markNeighbourElems(matrix, row + 1, col + 1);
    }
  }

  numOfIslands(matrix: any): number {
    let counter = 0;

    if (matrix.length === 0) {
      return 0;
    }

    for (let i = 0; i < matrix.length; i++) {
      for(let k = 0; k < matrix[i].length; k++){
        if (matrix[i][k] === '1'){
          counter++;
          this.markNeighbourElems(matrix, i, k);
        }
      }
    }
    return counter;
  }

  ngOnInit() {
    this.figuresCount = this.numOfIslands(this.resultArr);
  }
}
