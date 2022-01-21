import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-places-add',
  templateUrl: './places-add.page.html',
  styleUrls: ['./places-add.page.scss'],
})
export class PlacesAddPage implements OnInit {

  constructor(private placesService: PlacesService,
    private router: Router) { }

  ngOnInit() {
  }

  saveNewPlace(title: HTMLInputElement, imageURL: HTMLInputElement){
    this.placesService.addPlace(title.value, imageURL.value);
    this.router.navigate(['./places'])
  }

}
