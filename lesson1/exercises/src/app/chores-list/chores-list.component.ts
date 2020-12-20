import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores-list',
   templateUrl: './chores-list.component.html',
   styleUrls: ['./chores-list.component.css']
})
export class ChoresListComponent implements OnInit {
   chores = ['Eat All The Food', 'Take Long Nap', 'Destroy Toys', 'Be Derpy', 'Take Another Nap', 'Love Human'];

   constructor() { }

   ngOnInit() {
   }

}