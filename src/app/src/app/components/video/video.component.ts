import { Component, EventEmitter, Inject, Input, OnInit, Output, ViewChild } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';
import { DOCUMENT } from '@angular/common';
import { interval } from 'rxjs';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [YouTubePlayer],
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  @ViewChild('youtubePlayer') youtubePlayer!: YouTubePlayer;
  @Output('app-current-time') currentTimeVideo = new EventEmitter<number>()
  @Input('app-video-id') videoId = ''

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.videoId = 'qjbBeORPUA4'
  }

  ngAfterViewInit() {
    this.youtubePlayer.apiChange.subscribe(_ => this.currentTime())
  }

  onStateChange(event: any) {
    console.log('video iniciado')
  }

  currentTime() {
    interval(500).subscribe(_ => {
      const currentTime = Math.ceil(this.youtubePlayer.getCurrentTime())
      this.currentTimeVideo.emit(currentTime)
    })
  }


}
