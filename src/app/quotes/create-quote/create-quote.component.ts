import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { DataService } from '../../core/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ICanComponentDeactivate } from 'src/app/shared/interfaces';
import { Observable } from 'rxjs';
import { NotifierService } from 'src/app/core/notifier.service';

@Component({
    selector: 'app-create-quote',
    templateUrl: './create-quote.component.html',
    styleUrls: ['./create-quote.component.css'],
})
export class CreateQuoteComponent implements OnInit, ICanComponentDeactivate {

    private _content: string;
    editSaved: boolean = true;
    constructor(private quoteService: DataService,
        private router: Router,
        private route: ActivatedRoute,
        private notifierService: NotifierService
    ) { }

    ngOnInit() {

    }

    get content(): string {
        return this._content;
    }

    set content(value: string) {
        this._content = value;
        this.editSaved = false;
    }

    onSubmit(form: NgForm) {
        if (form.valid)
            this.quoteService.addQuote(this.content)
                .subscribe(
                    response => {
                        this._content = '';
                        this.editSaved = true;

                        // this.router.navigateByUrl('quotes');
                        this.notifierService.showNotification('quotes added successfully !', 'dismiss', 'success')
                    },
                    error => {
                        console.log(error)
                        this.notifierService.showNotification('some error ocuured !', 'dismiss', 'error')
                    }
                );
    }


    canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
        if (!this.editSaved)
            return confirm('do you want lose your changes ?')
        return this.editSaved;
    }

}
