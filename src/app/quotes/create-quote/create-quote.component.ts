import { Component, OnInit } from '@angular/core';
import { NgForm ,NgControl,NgModel} from '@angular/forms';

import { DataService } from '../../core/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.css'],
})
export class CreateQuoteComponent implements OnInit {

    content:string='';
    constructor(private quoteService: DataService,
                private router: Router,
                private route: ActivatedRoute
                ) { }
  
    ngOnInit() {
    }
  
    onSubmit(form:NgForm) {
            if(form.valid)
            this.quoteService.addQuote(this.content)
            .subscribe(
              response => {
                this.router.navigateByUrl('quotes');
              },
              error => console.log(error)
              
        );
    }
}
