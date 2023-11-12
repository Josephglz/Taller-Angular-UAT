import { Component } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { NoteHandlerService } from 'src/app/services/note-handler.service';
import { FormDialogComponent } from '../form-dialog/form-dialog.component';

@Component({
  selector: 'app-color-selector',
  templateUrl: './color-selector.component.html'
})
export class ColorSelectorComponent {
  constructor(
    private _noteHandlerService: NoteHandlerService,
    public dialogRef: MatDialog
  ) {}

  get colorIdx(): number {
    return this._noteHandlerService.colorIdx;
  }

  changeColor(idxColor: number): void {
    this._noteHandlerService.colorIdx = idxColor;
  }

  openDialog(): void {
    const dialogRef = this.dialogRef.open(FormDialogComponent, {
      width: '700px'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
