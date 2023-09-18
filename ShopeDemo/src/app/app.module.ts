import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeadComponent } from './components/head/head.component';
import { BarComponent } from './components/bar/bar.component';
import { OffersComponent } from './components/offers/offers.component';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/Shared/search/search.component';
import { ViewProductComponent } from './components/Shared/view-product/view-product.component';
import { AsideCarComponent } from './components/Shared/aside-car/aside-car.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    BarComponent,
    OffersComponent,
    ProductsComponent,
    FooterComponent,
    SearchComponent,
    ViewProductComponent,
    AsideCarComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
