import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../../core/data.service';

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.css'],
})
export class CreateQuoteComponent implements OnInit {

  
    constructor(private quoteService: DataService) { }
  
    ngOnInit() {
    }
  
    onSubmit(form: NgForm) {
      this.quoteService.addQuote(form.value.content)
        .subscribe(
          () => alert('Quote created!')
        );
      form.reset();
    }
}
