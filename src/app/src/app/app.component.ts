import { Component, EventEmitter, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputComponent, Legends } from './components/input/input.component';
import { VideoLegendService } from './services/video-legend.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './components/video/video.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    // BrowserAnimationsModule,
    // BrowserModule,
    // CommonModule,
    InputComponent,
    VideoComponent,
  ],
  providers: [VideoLegendService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app';
  data: Legends[] = []
  currentLegendText = ''
  input = ''

  setLegendData(event: any) {
    console.log(event)
    this.data = event
  }

  currentTimeVideo(time: number) {
    const legend = this.data.find(item => time === Math.ceil(item.offset))

    if(legend) {
      this.currentLegendText = legend.text
      console.log(legend)
    }
  }

  inputValue(value: string) {
    this.input = value
  }
}
