import { NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addTodoAction } from '../store/actions';

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [NgIf],
  template: `
    <div class="container">
      <p>A Component</p>
    </div>
  `,
  styleUrl: './a.component.css',
})
export class AComponent implements OnInit {
  store = inject(Store);

  ngOnInit(): void {
    setInterval(() => {
      this.store.dispatch(addTodoAction({ name: 'Todo' }));
    }, 1000);
  }

  ngDoCheck() {
    console.log('A Component ngDoCheck');
  }
  
}
