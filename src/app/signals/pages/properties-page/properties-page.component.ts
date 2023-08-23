import { Component, signal } from '@angular/core';

import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.css']
})
export class PropertiesPageComponent {

  //
  // public properties
  //

  // User mock object
  public user = signal<User>({
    "id": 1,
    "email": "george.bluth@reqres.in",
    "first_name": "George",
    "last_name": "Bluth",
    "avatar": "https://reqres.in/img/faces/1-image.jpg"
  });

  //
  // public methods
  //

  public onFieldUpdated(field: keyof User, value: string): void {
    //console.log(`Field ${field} updated with value ${value}`);

    // Method 1
    // Potentially insecure, avoid it. Use "keyof User" instead of "string
    // this.user.set({
    //   ...this.user(),
    //   [field]: value
    // });

    // Method 2 (best choice)
    this.user.mutate((current) => {
      switch (field) {
        case 'email':
          current.email = value;
          break;

        case 'first_name':
          current.first_name = value;
          break;

        case 'last_name':
          current.last_name = value;
          break;

        case 'id':
          current.id = Number(value);
          break;
      }
    });

    // Method 3, possible but not recommended
    // this.user.update(current => {
    //   return {
    //     ...current,
    //     [field]: value
    //   }
    // });
  }

}
