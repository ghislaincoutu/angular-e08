import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-t02',
  templateUrl: './t02.component.html',
  styleUrls: ['./t02.component.scss']
})
export class T02Component implements OnInit {
  courseTitle01: any = "";
  courseTitle02: string = "";

  constructor() { }

  // Définition de l'observable 1
  courseTitle01_observable = new Observable((observer) => {
    observer.next("Titre du cours 01");
    setTimeout(() => { observer.next("Québec") }, 2000);
    setTimeout(() => { observer.next("Montréal") }, 4000);
    setTimeout(() => { observer.next("Laval") }, 6000);
    setTimeout(() => { observer.next("Trois-Rivières") }, 8000);
    setTimeout(() => { observer.next("Sherbrooke") }, 10000);
    setTimeout(() => { observer.next("Titre du cours 01") }, 12000);
  })
  // Définition de l'observable 2
  courseTitle02_observable = new Observable(() => {
    this.courseTitle02 = "Titre du cours 02";
  })

  ngOnInit() {
    // Utilisation de l'observable 1
    this.courseTitle01_observable.subscribe(response => {
      this.courseTitle01 = response
    });
    // Utilisation de l'observable 2
    this.courseTitle02_observable.subscribe(response => {
      response
    });
  }
}
