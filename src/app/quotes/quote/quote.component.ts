import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {IQuote} from '../../shared/interfaces';
import {DataService} from '../../core/data.service'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {
    @Input() quote: IQuote;
    @Output() quoteDeleted = new EventEmitter<IQuote>();
    editing = false;
    editValue = '';
    constructor(private quoteService: DataService) { }

  ngOnInit(): void {
  }

    
  onEdit() {
    this.editing = true;
    this.editValue = this.quote.content;
  }

  onUpdate() {
    this.quoteService.updateQuote(this.quote.id, this.editValue)
      .subscribe(
         (quote: IQuote) => {
          this.quote.content = this.editValue;
          this.editValue = '';
        }
      );
    this.editing = false;
  }

  onCancel() {
    this.editValue = '';
    this.editing = false;
  }

  onDelete() {
    this.quoteService.deleteQuote(this.quote.id)
      .subscribe(
        () => {
          this.quoteDeleted.emit(this.quote);
          console.log('Quote deleted');
        }
      );
  }

}
