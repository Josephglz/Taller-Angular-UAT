import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { NoteCardComponent } from './components/note-card/note-card.component';
import { ColorSelectorComponent } from './components/color-selector/color-selector.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormDialogComponent } from './components/form-dialog/form-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteCardComponent,
    ColorSelectorComponent,
    FormDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
