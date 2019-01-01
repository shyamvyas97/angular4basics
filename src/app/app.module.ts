import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ListComponent } from './list/list.component';
import { ChangeTextDirective } from './change-text.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ListComponent,
    ChangeTextDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
