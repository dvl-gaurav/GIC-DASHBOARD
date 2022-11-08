import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from '@progress/kendo-angular-layout';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { TooltipsModule } from '@progress/kendo-angular-tooltip';
import { ChatModule } from '@progress/kendo-angular-conversational-ui';










@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    LayoutModule,
    InputsModule,
    LabelModule,
    DropDownsModule,
    TooltipsModule,
    ChatModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
