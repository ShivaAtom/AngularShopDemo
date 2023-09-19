import { Component } from '@angular/core';
import { dbFake } from './DB/baseFake';
import { MachineService } from './services/machine.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private ser:MachineService){
    ser.updateList = dbFake;
  }
}
