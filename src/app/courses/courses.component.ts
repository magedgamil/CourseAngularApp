import { Component, OnInit, inject } from '@angular/core';
import { Course } from '../Models/course';
import { CourseService } from '../Services/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {


  searchString: string = '';
  coursesService = inject(CourseService);
  AllCourses: Course[];
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  ngOnInit(): void {
    // this.searchString = this.activeRoute.snapshot.queryParams['search'];
    // console.log(this.searchString);

    this.activeRoute.queryParams.subscribe((data) => {
      this.searchString = data['search'];
      if (this.searchString == undefined || this.searchString == '') {
        this.AllCourses = this.activeRoute.snapshot.data['courses'];


      }
      else {
        this.AllCourses = this.coursesService.courses.
          filter(x => x.title.toLowerCase().
            includes(this.searchString.toLowerCase()));
      }

    });

  }
}
