import { Component, Directive } from '@angular/core';
import { Note } from './interfaces/Note';
import { NoteService } from './services/note.service';

import { MatDialog } from '@angular/material/dialog';
import { FormDialogComponent } from './components/form-dialog/form-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  selectedID: string = '';
  constructor(
    private noteService: NoteService,
    public dialogRef: MatDialog
  ) {}

  get noteList(): Note[] {
    return this.noteService.getNotes();
  }

  changeSelectedID(uuid: string): void {
    this.selectedID = uuid;
  }

  openDialog(): void {
    const dialogRef = this.dialogRef.open(FormDialogComponent, {
      width: '700px',
      data: {
        uuid: this.selectedID
      }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
