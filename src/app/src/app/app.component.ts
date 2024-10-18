import { Component, EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputComponent, Legends } from './components/input/input.component';
import { VideoLegendService } from './services/video-legend.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './components/video/video.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputComponent, HttpClientModule, CommonModule, VideoComponent],
  providers: [VideoLegendService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
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
