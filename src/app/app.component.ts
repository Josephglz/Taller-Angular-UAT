import { Component, Directive } from '@angular/core';
import { Note } from './interfaces/Note';
import { NoteService } from './services/note.service';

import { MatDialog } from '@angular/material/dialog';
import { FormDialogComponent } from './components/form-dialog/form-dialog.component';

import {
  moveItemInArray,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  selectedID: string = '';
  deletedNotes: Note[] = [];
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

  deleteNote(event: any): void {
    if(event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      this.noteService.deleteNotes(event.previousContainer.data[event.previousIndex].uuid);
    }
  }
}
