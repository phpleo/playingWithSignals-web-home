import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css']
})
export class CounterPageComponent {

  //
  // Public properties
  //

  public counter = signal(10);

  // readonly
  public squareComputer = computed(() => this.counter() * this.counter());

  //
  // Public methods
  //

  public increaseBy(value: number): void {
    // Method #1
    //this.counter.set(this.counter() + value);

    // Better method
    this.counter.update(current => current + value);
  }

}
