import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit, OnDestroy {

  selectedCourse: Course;
  courseId: number;

  cousrseSerice: CourseService = inject(CourseService);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  paramsMapObs;
  ngOnInit(): void {
    //this.courseId = +this.activatedRoute.snapshot.paramMap.get('id');
    this.activatedRoute.params.subscribe((data) => {
      this.courseId = +data['id'];
      this.selectedCourse = this.cousrseSerice.courses.find(c => c.id === this.courseId);

    });

  }
  ngOnDestroy(): void {
    this.paramsMapObs.subscribe();
  }

}
