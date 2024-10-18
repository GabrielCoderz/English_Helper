import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { FormsModule } from '@angular/forms';
import { VideoLegendService } from '../../services/video-legend.service';

export interface Legends {
  text: string
  duration: number
  offset: number
  lag: string
}

interface Video {
  url: Legends[]
}

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ButtonComponent, FormsModule, AsyncPipe, CommonModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Output('app-data') dataEmit = new EventEmitter()
  @Output('app-input') currentInputValue = new EventEmitter()
  data: Legends[] = []
  inputValue = ''

  selectedText: string = '';

  constructor( private legendService: VideoLegendService) { }

  ngOnInit() {
  }

  searchLegend(event: any) {
    this.legendService.postVideoUrl(this.inputValue).subscribe((data: Video) => {
      this.data = data.url

      this.dataEmit.emit(this.data)
      this.currentInputValue.emit(this.inputValue)
    })
  }

  captureSelection() {
    const selection = window.getSelection();
    if (selection) {
      this.selectedText = selection.toString();
    }
  }

}
