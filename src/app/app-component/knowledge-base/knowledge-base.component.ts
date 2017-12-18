import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFirestore } from "angularfire2/firestore";

@Component({
  selector: 'app-knowledge-base',
  templateUrl: './knowledge-base.component.html',
  styleUrls: ['./knowledge-base.component.scss']
})
export class KnowledgeBaseComponent implements OnInit {

  constructor(private db: AngularFireDatabase) {
    db.list('/users')
   }

  ngOnInit() {
  }

}
