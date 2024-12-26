import { CommonModule, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from "@angular/core/rxjs-interop";
import { Store } from '@ngrx/store';
import { selectTodoList } from '../store/selector';

@Component({
  selector: 'app-c',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <p>C Component</p>
      <div class="counter">
        {{ todoListSignal() | json }}
      </div>
    </div>
  `,
  styleUrl: './c.component.css',
})
export class CComponent {
  store = inject(Store);
  todoListSignal = toSignal(this.store.select(selectTodoList));

  ngDoCheck() {
    console.log('C Component ngDoCheck');
  }
}
