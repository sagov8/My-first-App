import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places: Place[] = [
    {
      id: '1',
      title: 'Eiffel Tower',
      imageUrl: 'https://cdn.culturagenial.com/es/imagenes/torre-eiffel-cke.jpg',
      comments: ['Wow this amazing', 'Una chimba ñero']
    },
    {
      id: '2',
      title: 'Estatua de la libertad',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Estatua_de_la_Libertad_New_York.jpg/401px-Estatua_de_la_Libertad_New_York.jpg',
      comments: ['Yo fui pero no, normal...', 'La cucha de la antorcha esta mela']
    },
    {
      id: '3',
      title: 'Rincón Payanés',
      imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/08/d3/dd/82/rincon-payanes.jpg',
      comments: []
    }
  ]

  constructor() { }

  getPlaces() {
    return [...this.places]
  }

  getPlace(placeId: string) {
    return {
      ...this.places.find(place => {
        return place.id === placeId
      })
    }
  }

  addPlace(title: string, imageUrl: string) {
    this.places.push({
      title,
      imageUrl,
      comments: [],
      id: this.places.length + 1 + ""
    });
  }

  deletePlace(placeId: string) {
    this.places = this.places.filter(place => {
      return place.id !== placeId
    })
  }
}
