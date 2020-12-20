import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos';
  image1 = 'https://thechive.com/wp-content/uploads/2020/07/genthecorgi_88276314_2542019112574515_8682853416981573169_n.jpg?quality=85&strip=info&w=400';
  image2 = 'https://i.imgur.com/aWpxP5O.jpg';
  image3 = 'https://i.imgur.com/8u4eweH.jpg';

  constructor() { }

  ngOnInit() {
  }

}