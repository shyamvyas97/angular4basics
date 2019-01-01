import { TestBed } from '@angular/core/testing';

import { MyservService } from './myserv.service';

describe('MyservService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyservService = TestBed.get(MyservService);
    expect(service).toBeTruthy();
  });
});
