import { User } from 'app/app-shared-objects/user';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class FirestoreService {

  private basePath: string = '/user';
  
    items: FirebaseListObservable<User[]> = null; //  list of objects
    item: FirebaseObjectObservable<User> = null;

  constructor(private afs: AngularFirestore) { }

  getUser(key: string): FirebaseObjectObservable<User> {
    const itemPath =  `${this.basePath}/${key}`;
    this.item = this.afs;
    return this.item;
  }

}
