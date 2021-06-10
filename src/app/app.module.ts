import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UploadsComponent } from './components/uploads/uploads.component';
import { SearchFilesComponent } from './components/search-files/search-files.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadsComponent,
    SearchFilesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
