import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Note } from '../interfaces/Note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private noteList: Note[] = [
    {
      uuid: '1',
      title: 'Variables en Typescript',
      content: 'Las variables en typescript se declaran con la palabra reservada let y const para constantes y variables respectivamente. Así mismo, se puede declarar el tipo de dato que se usará en variable aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      timestamp: '2020-01-01',
      type: 1,
      color: 1
    },
    {
      uuid: '2',
      title: 'Estudiar HTML',
      content: 'Estudiar HTML para el taller de Angular',
      timestamp: '2020-01-01',
      type: 2,
      color: 4
    },
    {
      uuid: '3',
      title: 'Estudiar HTML',
      content: 'Estudiar HTML para el taller de Angular',
      timestamp: '2020-01-01',
      type: 1,
      color: 2
    },
    {
      uuid: '4',
      title: 'Estudiar HTML',
      content: 'Estudiar HTML para el taller de Angular',
      timestamp: '2020-01-01',
      type: 2,
      color: 5
    },
    {
      uuid: '5',
      title: 'Estudiar HTML',
      content: 'Estudiar HTML para el taller de Angular',
      timestamp: '2020-01-01',
      type: 1,
      color: 3
    },
    {
      uuid: '6',
      title: 'Estudiar HTML',
      content: 'Estudiar HTML para el taller de Angular',
      timestamp: '2020-01-01',
      type: 2,
      color: 2
    },
    {
      uuid: '7',
      title: 'Estudiar HTML',
      content: 'Estudiar HTML para el taller de Angular',
      timestamp: '2020-01-01',
      type: 2,
      color: 6
    },
    {
      uuid: '8',
      title: 'Estudiar HTML',
      content: 'Estudiar HTML para el taller de Angular',
      timestamp: '2020-01-01',
      type: 2,
      color: 1
    }
  ]

  getNotes(): Note[] {
    return this.noteList;
  }

  storeNotes(noteData: Note) {
    this.noteList.push(noteData);
  }

  deleteNotes(uuid: string) {
    this.noteList = this.noteList.filter((note) => note.uuid !== uuid);
  }
  // private urlBase: string = 'http://146.190.49.248'
  // constructor(
  //   private _http: HttpClient
  // ) { }

  // getIdUser(): string {
  //   let uuid: string = '';
  //   if(localStorage.getItem('uuid') == null) {
  //     this._http.post(`${this.urlBase}/user/create`, {}).subscribe((res: any) => {
  //       localStorage.setItem('uuid', res.body[0].id);
  //     })
  //   }
  //   uuid = localStorage.getItem('uuid')!;
  //   return uuid;
  // }

  // getNotes(): any {
  //   let uuid: string = this.getIdUser();
  //   return this._http.get(`${this.urlBase}/notes/${uuid}`)
  // }

  // storeNotes(noteData: Note) {
  //   this._http.post(`${this.urlBase}/notes/create`, {uuid: this.getIdUser(), note: noteData}).subscribe((res: any) => {
  //     return res.message;
  //   })
  //   this.getNotes();
  // }
}
