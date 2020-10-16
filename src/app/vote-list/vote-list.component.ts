import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Quotation } from '../models/quotation';


@Component({
  selector: 'app-vote-list',
  templateUrl: './vote-list.component.html',
  styleUrls: ['./vote-list.component.css']
})
export class VoteListComponent {

  @Input()
  quotes: Quotation [];

  @Output()
  vote = new EventEmitter<QuotationEvent>();

  addVote(quotation: Quotation, value: number){
    this.vote.emit({quotation, value});
  }
}

export interface QuotationEvent{
  quotation: Quotation;
  value: number;
};

