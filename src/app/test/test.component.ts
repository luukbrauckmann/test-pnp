import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';

@Component({
	selector: 'app-test',
	template: `
   <article>
		<header>
			<h1>Test</h1>
		</header>
		<div>
			<input pInputText type="text" pAutoFocus [autofocus]="true" />
			<p-button label="Plug'n'Play" (onClick)="toast()"></p-button>
		</div>
		<footer>...Footer</footer>
	 </article>
  `,
	styles: []
})
export class TestComponent implements OnInit {
	constructor(
		private title: Title,
		private message: MessageService
	) { }

	ngOnInit(): void {
		this.title.setTitle('Test')
	}

	toast() {
		this.message.add({ severity: 'info', summary: 'Plug\'n\'Play' })
	}

}
