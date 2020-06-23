import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GirafParentComponent } from './comps/giraf-parent/giraf-parent.component';
import { GirafChildComponent } from './comps/giraf-child/giraf-child.component';
import { LebelSpanComponent } from './comps/lebel-span/lebel-span.component';
import { DetilsComponent } from './comps/detils/detils.component';

@NgModule({
  declarations: [
    AppComponent,
    GirafParentComponent,
    GirafChildComponent,
  
    LebelSpanComponent,
  
    DetilsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
