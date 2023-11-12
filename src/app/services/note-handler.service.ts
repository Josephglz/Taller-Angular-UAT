import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteHandlerService {
  colorIdx: number = 0;

  constructor() {}
}
