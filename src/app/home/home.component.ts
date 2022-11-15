import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  template: `
   <article>
		<header>
			<h1>Home</h1>
		</header>
		<div>...Content</div>
		<footer>...Footer</footer>
	 </article>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor(
		private title: Title
	) { }

  ngOnInit(): void {
		this.title.setTitle('Home')
  }

}
