import { User } from 'app/app-shared-objects/user';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor() { }
  login(user: User): boolean {

    return true
  }
  private validateUser() {

  }

  logout() {

  }

}
