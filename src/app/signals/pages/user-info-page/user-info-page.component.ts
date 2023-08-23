import { Component, OnInit, WritableSignal, computed, inject, signal } from '@angular/core';

import { UsersServiceService } from '../../services/users-service.service';
import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'signals-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.css']
})
export class UserInfoPageComponent implements OnInit {
  
  //
  // private properties
  //

  private userService = inject(UsersServiceService);

  //
  // public properties
  //

  public userId: WritableSignal<number> = signal<number>(1);

  public currentUser = signal<User | undefined>(undefined);

  public userWasFound = signal<boolean>(true);

  //
  // Lyfecicle
  //

  ngOnInit(): void {
    this.loadUser(this.userId());
  }

  //
  // Public methods
  //
  
  public loadUser(id: number): void {
    if (id <= 0) return;

    this.userId.set(id);

    // to clean te user in the view to show it faster
    this.currentUser.set(undefined);

    // callin the service
    this.userService.getUserById(id)
      .subscribe({
        next: (user: User) => {
          this.currentUser.set(user);
          this.userWasFound.set(true);
        },
        error: (error: any) => {
          this.currentUser.set(undefined);
          this.userWasFound.set(false);
          console.error({'error': error});
        }
      });
  }

  public fullName = computed<string>(() => {
    const user = this.currentUser();
    
    if (!user) return 'User wasn\'t found.';

    return `${user?.first_name} ${user?.last_name}`;
  });

}
