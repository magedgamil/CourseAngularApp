import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    activatedRoute: ActivatedRoute = inject(ActivatedRoute);
    ngOnInit(): void {
        this.activatedRoute.fragment.subscribe((data) => {
            this.JumpToSection(data);
        });

    }
    JumpToSection(section: string) {
        document.getElementById(section).scrollIntoView({ behavior: 'smooth' })
    }

}