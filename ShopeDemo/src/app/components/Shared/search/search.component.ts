import { Component, Input } from '@angular/core';
import { ToggleService } from 'src/app/services/toggle.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Input() dataS!:String;
  constructor(private ser:ToggleService){}
  clickButonIP(){this.ser.viewProductSet ="VProductOn";}
}
