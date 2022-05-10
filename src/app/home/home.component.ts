import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Users } from '../Users';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private rs: RestService) { }

  // columns:any =["User Id","First Name"," Last Name","Email","Mobile","Salary"];
  // index =["id","firstname","lastname","email","mobile","salary"];

  users: any;
  p: number = 1;

  ngOnInit(): void {
    // this.rs.getUsers().subscribe(
    //   (response)=>
    //   {
    //     this.users = response;
    //   },
    //   (error)=>{
    //     console.log("Error Occured" + error);

    //   }
    // )
    this.rs.getUsers().subscribe((data: any) => {
      console.log(data);
      this.users = data;
    })
  }
  logout() {
    localStorage.clear();
    window.location.href = "";
  }
  // toggle() {
  //   const active = this..getActiveTheme() ;
  //   if (active.name === 'light') {
  //     this..setTheme('dark');
  //   } else {
  //     this..setTheme('light');
  //   }
  // }
}
