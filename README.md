import { Subject } from 'rxjs/Subject'; // to emit errors
import { Subscription } from 'rxjs/Subscription'; // to subscribe to the emiter


@Component({
    ...
})

export class MyComponent OnInit, OnDestroy {

    private subscription:Subscription = new Subscription();

    constructor(
        private errorService: ErrorService,
    ) {}
    ngOnInit(){
        this.subscription = this.errorService.error.subscribe(
            error => console.log(error)
        );
    }
    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}