import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ListComponent } from './list/list.component';
import { ChangeTextDirective } from './change-text.directive';
import { SqrtPipe } from './sqrt.pipe';
import { NewcmpComponent } from './newcmp/newcmp.component';
import { MyservService } from './myserv.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ListComponent,
    ChangeTextDirective,
    SqrtPipe,
    NewcmpComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'newcmp',
        component: NewcmpComponent
      }
  ])
  ],
  providers: [MyservService],
  bootstrap: [AppComponent]
})
export class AppModule { }
