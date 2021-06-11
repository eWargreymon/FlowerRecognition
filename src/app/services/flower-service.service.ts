import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FlowerServiceService {

  constructor(private readonly afs: AngularFirestore) { }

  getAll(){
    return this.afs.collection('Flowers').snapshotChanges();
  }

  addFlower(payload: Flower){
    return this.afs.collection('Flowers').add(payload);
  }

  deleteFlower(id: string){
    return this.afs.doc('Flowers/' + id).delete();
  }

}

export interface Flower{
  id?: string;
  Name: string;
  Description: string;
  Image: string;
  Location: string;
  ScName: string;
}
