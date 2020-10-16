import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotation } from '../models/quotation';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }

  @Output()
  newQuotetion = new EventEmitter<Quotation>();

  showForm = false;
  quotiotn: Quotation = {author: '', sentence: '', votes: 0};

  onShowForm(){
    this.showForm = !this.showForm;
  }

  addQouts(){
    this.newQuotetion.emit(this.quotiotn);
    this.quotiotn = {author: '', sentence: '', votes: 0};
    }

}
