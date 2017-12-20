import {NgModule, Component} from '@angular/core';
import {RouterModule, Route} from '@angular/router';

@Component({
	template: '<h2>Lazy 111 component</h2>',
})
export class LazyComponent {}

const routes: Route[] = [
	{
		path: '',
		component: LazyComponent,
	},
];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
	],
	declarations: [
		LazyComponent,
	]
})
export class LazyModule {}
