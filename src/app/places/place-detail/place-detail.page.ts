import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Place } from '../place.model';
import { PlacesService } from '../places.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place;

  constructor(private activatedRoute: ActivatedRoute,
    private placesService: PlacesService,
    private router: Router,
    private alertCtrl: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      //redirect
      const recipeId = paramMap.get('placeId')
      this.place = this.placesService.getPlace(recipeId);
    })
  }

  async deletePlace() {
    const alertElement = await this.alertCtrl.create({
      header: '¿Estás seguro de eliminar este elemento?',
      message: 'Sé cuidadoso',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.placesService.deletePlace(this.place.id);
            this.router.navigate(['/places']);
          }
        }
      ]
    });
    await alertElement.present();
  }

}
