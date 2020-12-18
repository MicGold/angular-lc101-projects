import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies: string[] = ['The Manchurian Candidate', 'Oceans 8', 'Uncle Frank', 'The Prom', 'Jingle Jangle', 'Happiest Season', 'A Series of Unfortunate Events'];

   constructor() { }

   ngOnInit() {
   }

}
