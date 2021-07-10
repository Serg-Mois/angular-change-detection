import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent, ChildComponent, SuperChildComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    SuperChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
