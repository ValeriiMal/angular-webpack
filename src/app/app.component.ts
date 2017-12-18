import { Component } from '@angular/core';
import {Observer} from 'rxjs/Observer';
import {Observable} from 'rxjs/Observable';

@Component({
	selector: 'app-root',
	template: require('./app.component.html'),
	styles: [require('./app.scss')],
})
export class AppComponent {
	constructor() {
		const o = Observable.create((obs: Observer<any>) => {
            obs.next('next()');
            obs.complete();
		});
		o.subscribe((v: any) => {
			console.log(v);
		});
	}
}
