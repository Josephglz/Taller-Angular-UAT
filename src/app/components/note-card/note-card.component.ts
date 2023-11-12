import { Component, Input } from '@angular/core';
import { Note } from 'src/app/interfaces/Note';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html'
})
export class NoteCardComponent {
  @Input() note: Note = {} as Note;
}
