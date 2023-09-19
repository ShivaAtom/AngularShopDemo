import { Component } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent {
  classS:String="SCOff";
  classA:String="ACarOff"
  clickToggleS(){ this.classS=="SCOff"?this.classS="SCOn":this.classS="SCOff"}
  clickToggleA(){ this.classA=="ACarOff"?this.classA="ACarOn":this.classA="ACarOff"}
}
