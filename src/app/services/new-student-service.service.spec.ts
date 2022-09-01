import { TestBed } from '@angular/core/testing';

import { NewStudentServiceService } from './new-student-service.service';

describe('NewStudentServiceService', () => {
  let service: NewStudentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewStudentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
