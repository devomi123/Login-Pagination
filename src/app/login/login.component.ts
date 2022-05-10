import { Component, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { FormControl,  Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  formdata:any;
  username:string="";
  password:string="";
  data:any;
  // darray : Array<string> = [];
  mode:any;


  ngOnInit(): void {
    this.formdata = new FormGroup({
      username:new FormControl("", Validators.compose([Validators.required ])),
      password: new FormControl("",Validators.compose([Validators.required ]))
    })
     if(localStorage.getItem("username") == "sntuser" && localStorage.getItem("password") == "Snt@1234")
    {
      window.location.href = "/home";
    }

  }
  submitdata(data:any){
    let ctrl:any ={data};


    if(data.username=="sntuser" && data.password=="Snt@1234"){

    console.log(data.username);

    localStorage.setItem("username",(data.username));
    localStorage.setItem("password",(data.password));
     window.location.href = "/home";


}

  }
  darkmode(){
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

}
