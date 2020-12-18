import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://i.imgur.com/8u4eweH.jpg';
  image3 = 'https://64.media.tumblr.com/ce3a52328ebb8c89e1a5cd7649468216/tumblr_inline_pmof1giIRI1ud0rrx_640.jpg';

  constructor() { }

  ngOnInit() {
  }

}