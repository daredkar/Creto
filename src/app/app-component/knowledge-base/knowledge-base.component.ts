import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { User} from "../../app-shared-objects/user";

@Component({
  selector: 'app-knowledge-base',
  templateUrl: './knowledge-base.component.html',
  styleUrls: ['./knowledge-base.component.scss']
})
export class KnowledgeBaseComponent implements OnInit {

  userCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;

  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.userCollection = this.afs.collection('users');
    this.users = this.userCollection.valueChanges();
    console.log(this.users.subscribe(res => console.log(res)));
  }

}
