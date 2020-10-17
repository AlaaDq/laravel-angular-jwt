import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../../core/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.css'],
})
export class CreateQuoteComponent implements OnInit {

    return: string = '';
    constructor(private quoteService: DataService,
                private router: Router,
                private route: ActivatedRoute
                ) { }
  
    ngOnInit() {
    }
  
    onSubmit(form: NgForm) {
        if(form.valid){
            this.quoteService.addQuote(form.value.content)
            .subscribe(
              () => {
                this.return='quotes'
                this.router.navigateByUrl(this.return);
              }
            );
          form.reset();
        

        }
     
    }
}
