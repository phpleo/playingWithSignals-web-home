import { Component, signal } from '@angular/core';

interface MenuItem {
  title: string;
  router: string;
}

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  //
  // Public properties
  //

  public menuItems = signal<MenuItem[]>([
    { title: 'Counter', router: 'counter' },
    { title: 'User', router: 'user-info' },
    { title: 'Mutations', router: 'properties' },
  ]);

  // public menuItems: MenuItem[] = [
  //   { title: 'Counter', router: 'counter' },
  //   { title: 'User', router: 'user-info' },
  //   { title: 'Mutations', router: 'properties' },
  // ];

}
