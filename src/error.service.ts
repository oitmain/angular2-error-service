import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ErrorService {

    constructor () {}

    public error: Subject<string> = new Subject();

    public addError(error: any){
        error.next(error);
    }

}