/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VideoLegendService } from './video-legend.service';

describe('Service: VideoLegend', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoLegendService]
    });
  });

  it('should ...', inject([VideoLegendService], (service: VideoLegendService) => {
    expect(service).toBeTruthy();
  }));
});
