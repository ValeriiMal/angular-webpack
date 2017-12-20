import {APP_BASE_HREF} from '@angular/common';
import {AppComponent} from './app.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Route} from '@angular/router';

const routes: Route[] = [
	{
		path: '',
		children: [
			{
				path: 'lazy',
				loadChildren: './lazy.module#LazyModule',
				// loadChildren: () => new Promise((resolve, reject) => {
				// 	resolve(require('./lazy.module')['LazyModule']);
				// }),
			},
			{
				path: 'lazy2',
				loadChildren: './lazy2.module#Lazy2Module',
				// loadChildren: () => new Promise((resolve, reject) => {
				// 	resolve(require('./lazy2.module')['Lazy2Module']);
				// }),
			},
		],
	},
];

@NgModule({
	imports: [
		BrowserModule,
		RouterModule.forRoot(routes),
	],
	declarations: [
		AppComponent,
	],
	bootstrap: [
		AppComponent,
	],
	providers: [
		{
			provide: APP_BASE_HREF,
			useValue: '/',
		},
	]
})
export class AppModule {}
