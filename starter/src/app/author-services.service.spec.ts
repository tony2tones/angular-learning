import { TestBed } from '@angular/core/testing';

import { AuthorServicesService } from './author-services.service';

describe('AuthorServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthorServicesService = TestBed.get(AuthorServicesService);
    expect(service).toBeTruthy();
  });
});
