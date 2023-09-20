import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from './../model/course';

@Injectable({ // Esse @ (DECORATOR) serve pra indicar que vai fazer parte de injeção de dependências das classes dentro do Angular.
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  list(): Course[] { // Esse "Course[]" é opcional e serve pra mostra de forma mais simples que está retornando uma lista de cursos;
    return [
      { _id: '1', name: 'Angular', category: 'Front-end' }
    ];
  }
}
