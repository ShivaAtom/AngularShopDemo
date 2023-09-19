import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-aside-car',
  templateUrl: './aside-car.component.html',
  styleUrls: ['./aside-car.component.css']
})
export class AsideCarComponent {
  @Input() dataA!:String;
}
