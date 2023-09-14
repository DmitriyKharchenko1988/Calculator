 import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-calculator';
  toShow = '0'
  currValue = ''

  writeToInput(value:string){
    this.currValue = this.currValue +  value
    this.toShow = this.currValue
  }

  equals() {
    this.toShow = eval(this.currValue)
    this.currValue = this.toShow
  }

  clear() {
    this.currValue = '';
    this.toShow = '0'
  }

  back() {
    this.currValue = this.currValue.slice(0, -1)
    this.toShow = this.currValue
    if (this.toShow == '') {this.toShow = '0'}
  }

}
