import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/userService/users.service';
import { User } from 'src/app/models/user';


@Component({
  selector: 'welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  title = 'T.M.S.';
  constructor(private us:UsersService) {
    
  }
  
  ngOnInit() {
    this.us.add(new User("test", "test","test","test","test",false, true, false, false, false));
  }

}
