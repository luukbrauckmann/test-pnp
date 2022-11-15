import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  template: `
		<header>
			<p-tabMenu [model]="items"></p-tabMenu>
		</header>
		<main>
			<router-outlet></router-outlet>
		</main>
		<footer>
			Lol wat heh
		</footer>

		<p-toast position="bottom-center"></p-toast>
  `,
  styles: []
})
export class AppComponent {
	items: MenuItem[] = [
		{ icon: 'pi pi-fw pi-home', label: 'Home', routerLink: 'home' },
		{ icon: 'pi pi-fw pi-wrench', label: 'Test', routerLink: 'test' }
	]
}
