import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vote-button',
  templateUrl: './vote-button.component.html',
  styleUrls: ['./vote-button.component.css']
})
export class VoteButtonComponent {

  @Output()
  voteEvent = new EventEmitter<number>();

}
