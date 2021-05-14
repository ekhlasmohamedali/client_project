import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../_Models/User';
import { UserService } from '../_Services/user.service';

@Component({
  selector: 'app-settinguser',
  templateUrl: './settinguser.component.html',
  styleUrls: ['./settinguser.component.css']
})
export class SettinguserComponent implements OnInit {
  Euser !: User;
  constructor(private UserService: UserService, private ar: ActivatedRoute, private router: Router) { }
  save() {
    console.log(this.Euser)

    this.UserService.EditData(this.Euser).subscribe(
      d => console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"+d)
    )
    alert("Your change is done");

  }
  delete() {
    console.log(this.Euser)
    var c = confirm("Are You Sure");
    if (c == true) {

      this.UserService.RemoveAc().subscribe(
        d => console.log(d)
      )
      this.UserService.logout();
      this.router.navigateByUrl("/home/register")
    } else {
      this.router.navigateByUrl("/home")
    }

  }
  ngOnInit(): void {
    this.UserService.getme().subscribe(
      d => {
        console.log(d)
        this.Euser = d
      }
    )

  }

}
