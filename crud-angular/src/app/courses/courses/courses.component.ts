import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { Observable } from 'rxjs';

@Component({
  // Esse @ (DECORATOR) serve pra indicar que é um componente.
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: Observable<Course[]>; // essa variável PRECISA ser inicializada;
  displayedColumns = ['name', 'category'];
  constructor(private coursesService: CoursesService) {
    // this.courses =[];  Outra maneira da variável sendo inicializada.
    this.courses = this.coursesService.list(); // pode ser usado tanto aqui, quanto no "ngOnInit()"
  }

  ngOnInit(): void {}
}
