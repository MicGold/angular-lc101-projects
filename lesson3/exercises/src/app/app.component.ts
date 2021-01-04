import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled: boolean = true;
  reachedUpperLimit: boolean = false;
  reachedLowerLimit: boolean = false;
  reachedRightLimit: boolean = false;
  reachedLeftLimit: boolean = false;

  handleTakeOff(rocketImage) {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
      this.color = 'blue';
      this.height = 10000;
      this.width = 0;
      this.message = 'Shuttle in flight.';
      rocketImage.style.bottom = '10px';
      this.takeOffEnabled = false;
    }
  }

  handleLand(rocketImage) {
    window.alert('Shuttle is landing. Landing gear engaged');
    this.color = 'green';
    this.height = 0;
    this.width = 0;
    this.message = 'Shuttle has landed.';
    rocketImage.style.bottom = '0px';
    rocketImage.style.left = '0px';
    this.takeOffEnabled = true;
    this.reachedLeftLimit = false;
    this.reachedLowerLimit = false;
    this.reachedRightLimit = false;
    this.reachedUpperLimit = false;
  }

  handleAbort(rocketImage) {
    let result = window.confirm('Are you sure you want to abort the mission?');
    if (result) {
      this.color = 'red';
      this.height = 0;
      this.width = 0;
      this.message = 'Mission aborted';
      rocketImage.style.bottom = '0px';
      rocketImage.style.left = '0px';
      this.takeOffEnabled = true;
      this.reachedLeftLimit = false;
      this.reachedLowerLimit = false;
      this.reachedRightLimit = false;
      this.reachedUpperLimit = false;
    }
  }

  moveRocket(img, direction){
    if(direction === 'right') {
      let movement = parseInt(img.style.left) + 10 + 'px';
      img.style.left = movement;
      this.width = this.width + 10000;
    }
    else if(direction === 'left') {
      let movement = parseInt(img.style.left) - 10 + 'px';
      img.style.left = movement;
      this.width = this.width - 10000;
    }
    else if(direction === 'up') {
      let movement = parseInt(img.style.bottom) + 10 + 'px';
      img.style.bottom = movement;
      this.height = this.height + 10000;
    }
    else if(direction === 'down') {
      let movement = parseInt(img.style.bottom) - 10 + 'px';
      img.style.bottom = movement;
      this.height = this.height - 10000;
    }
    this.checkLimit(this.height, this.width);
  }

  checkLimit(height, width) {
    if(height > 320000){
      this.color = 'orange';
      window.alert('WARNING: Reaching the Limits of Known Space');
      this.reachedUpperLimit = true;
    }else if(height < 10000){
      this.color = 'orange';
      window.alert('WARNING: Reaching the Limits of Known Space');
      this.reachedLowerLimit = true;
    }else if(width > 460000){
      this.color = 'orange';
      window.alert('WARNING: Reaching the Limits of Known Space');
      this.reachedRightLimit = true;
    }else if(width < -10000){
      this.color = 'orange';
      window.alert('WARNING: Reaching the Limits of Known Space');
      this.reachedLeftLimit = true;
    }else{
      this.color = 'blue';
      this.reachedLeftLimit = false;
      this.reachedLowerLimit = false;
      this.reachedRightLimit = false;
      this.reachedUpperLimit = false;
    }
  }
}

