import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { RouterModule, Routes } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { AutoFocusModule } from 'primeng/autofocus';
import { ButtonModule } from 'primeng/button';

const routes: Routes = [
	{ path: '', component: TestComponent }
]

@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule,
		RouterModule.forChild(routes),
		InputTextModule,
		AutoFocusModule,
		ButtonModule
  ]
})
export class TestModule { }
