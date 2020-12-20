import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = [
      {title: "Yesterday's Chores", tasks: ['Empty dishwasher', 'Clean bathroom', 'Call Grandma']},
      {title: "Today's Chores", tasks: ['Load & run dishwasher', 'Finish LaunchCode homework', 'Clean bathroom', 'vaccum']},
      {title: "Tomorrow's Chores", tasks: ['Empty dishwasher', 'Clean Kitchen', 'Email Supervisor about revisions']},
      {title: "Next Week's Chores", tasks: ['Submit thesis to committee', 'Complete LC101 Assignment 6', "Make New Year's Resolutions"]}
   ]
   constructor() { }

   ngOnInit() {
   }

}
