import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ToggleService } from 'src/app/services/toggle.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private ser:ToggleService){}
  clickButonIP(){
    this.ser.viewProductSet="VProductOn";
  }
}
