import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AComponent } from '../a/a.component';
import { BComponent } from '../b/b.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AComponent, BComponent, NgIf],
  template: `
    <div class="container">
      <app-a></app-a>
      <app-b></app-b>
    </div>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'signal-spike-with-18v';

  ngDoCheck() {
    console.log('App Component ngDoCheck');
  }
}
