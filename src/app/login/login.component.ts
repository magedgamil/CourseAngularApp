import { Component, ElementRef, OnInit, ViewChild, inject, viewChild } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    this.activeRoute.queryParamMap.subscribe((que) => {

      const log = Boolean(que.get('logout'));
      if (log) {
        this.authService.logout();
        alert('you are log out');
      }
    });
  }
  @ViewChild('username') username: ElementRef;
  @ViewChild('password') password: ElementRef;


  authService: AuthService = inject(AuthService);
  routter: Router = inject(Router);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  OnLoginClicked() {
    const username = this.username.nativeElement.value;
    const password = this.password.nativeElement.value;


    let user = this.authService.login(username, password);


    if (user === undefined)
      alert('error to login')

    else
      alert('welcome' + user.username);
    this.routter.navigate(['\Courses']);
  }
}