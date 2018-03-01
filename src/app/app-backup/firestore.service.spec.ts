import { TestBed, inject } from '@angular/core/testing';

import { FirestoreService } from './../app-services/firestore.service';

describe('FirestoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirestoreService]
    });
  });

  it('should be created', inject([FirestoreService], (service: FirestoreService) => {
    expect(service).toBeTruthy();
  }));
});
