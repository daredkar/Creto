import { User } from 'app/app-shared-objects/user';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireList , AngularFireObject, AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class FirestoreService {

  private basePath: string = '/user';
  
    items: AngularFireList<User[]> = null; //  list of objects
    item: AngularFireObject<User> = null;

  constructor(private afs: AngularFirestore) { }

  // getUser(key: string): AngularFireList<User> {
  //   const itemPath =  `${this.basePath}/${key}`;
  //   // this.item = this.afs;
  //   // return this.item;
  // }

}
