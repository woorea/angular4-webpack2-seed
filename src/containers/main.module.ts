import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainComponent } from './main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [BrowserModule],
  bootstrap: [MainComponent]
})
export class MainModule { }