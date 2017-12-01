import { Subject } from 'rxjs/Subject';
export declare class ErrorService {
    constructor();
    error: Subject<string>;
    addError(error: any): void;
}
