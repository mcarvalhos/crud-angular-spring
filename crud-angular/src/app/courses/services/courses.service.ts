import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from './../model/course';
import { tap } from 'rxjs';

@Injectable({ // Esse @ (DECORATOR) serve pra indicar que vai fazer parte de injeção de dependências das classes dentro do Angular.
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json';
  constructor(private httpClient: HttpClient) { }

  list() { // Esse "Course[]" é opcional e serve pra mostra de forma mais simples que está retornando uma lista de cursos;
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      tap(courses => console.log(courses)) // essa variável "courses" pode ter qualquer nome.
    );
  }
}
