import { Component } from '@angular/core';
import { Quotation } from './models/quotation';
import { QUOTES } from './models/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  quotes: Quotation[] = QUOTES;

addVote(quotetion: Quotation, value: number){
  quotetion.votes += value;
}

bestQuots(){
  return this.quotes.filter(q => q.votes > 0);
}

worstQuots(){
  return this.quotes.filter(q => q.votes < 0 );
}

onNewQuotetion(quotetion: Quotation){
this.quotes.unshift(quotetion);
}


}
