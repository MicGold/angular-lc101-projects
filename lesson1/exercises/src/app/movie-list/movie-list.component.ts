import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies: string[] = [`The Queen's Corgis`, 'A Very Corgi Christmas', 'The Secret Life of Pets', 'All Roads Lead Home'];

   constructor() { }

   ngOnInit() {
   }

}
