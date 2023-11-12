import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Note } from 'src/app/interfaces/Note';
import { NoteHandlerService } from 'src/app/services/note-handler.service';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html'
})
export class FormDialogComponent {
  noteData: Note = {} as Note;

  constructor(
    public dialog: MatDialog,
    private _noteHandlerService: NoteHandlerService,
    private _noteService: NoteService,
    @Inject(MAT_DIALOG_DATA) public data: {uuid: ''}
  ) {}

  closeDialog(): void {
    this.dialog.closeAll();
  }

  submitForm(): void {
    this.noteData.timestamp = this.getCurrentTimestamp();
    this.noteData.color = this._noteHandlerService.colorIdx;
    this._noteService.storeNotes(this.noteData);
    this.dialog.closeAll();
  }

  getCurrentTimestamp(): string {
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }
}
