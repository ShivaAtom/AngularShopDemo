import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MachineService } from 'src/app/services/machine.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent {
  classS:String="SCOff";
  classA:String="ACarOff"
  countCar$!:Observable<number>;
  constructor(private serM:MachineService){
    this.countCar$ = serM.countCarGet;
  }
  clickToggleS(){ this.classS=="SCOff"?this.classS="SCOn":this.classS="SCOff"}
  clickToggleA(){ this.classA=="ACarOff"?this.classA="ACarOn":this.classA="ACarOff"}
}
