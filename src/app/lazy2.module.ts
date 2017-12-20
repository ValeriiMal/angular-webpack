import {NgModule, Component} from '@angular/core';
import {RouterModule, Route} from '@angular/router';

@Component({
	template: '<h2>Lazy 2 component</h2>',
})
export class Lazy2Component {}

const routes: Route[] = [
	{
		path: '',
		component: Lazy2Component,
	},
];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
	],
	declarations: [
		Lazy2Component,
	]
})
export class Lazy2Module {}
