import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Output('app-button-click') buttonClick = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  buttonClicked(event: any) {
    this.buttonClick.emit(event)
  }

}
