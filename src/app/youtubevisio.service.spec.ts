import { TestBed, inject } from '@angular/core/testing';

import { YoutubevisioService } from './youtubevisio.service';

describe('YoutubevisioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YoutubevisioService]
    });
  });

  it('should be created', inject([YoutubevisioService], (service: YoutubevisioService) => {
    expect(service).toBeTruthy();
  }));
});
