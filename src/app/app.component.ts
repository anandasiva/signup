import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { groupBy } from 'rxjs/internal/operators/groupBy';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SIGNUP';
  signupForm;

  constructor(private formBuilder: FormBuilder) {
  

  this.signupForm = this.formBuilder.group({
     firstname:['',[Validators.required,Validators.minLength(10),Validators.pattern("[A-Z]+")]],
     lastname:['',[Validators.required,Validators.maxLength(10),Validators.pattern("[A-Z]+")]],
     gender:['',[Validators.required]],
     age:['',[Validators.required]],
     mobilenumber:['',[Validators.required,Validators.pattern("[+91]+[0-9]+")]], 
     email:['',[Validators.required,Validators.email]],
     password:['',[Validators.required,Validators.pattern("[A-Z]+[a-z]+[@]+[0-9]+")]],
     confirmpassword:['',[Validators.required,Validators.pattern("[A-Z]+[a-z]+[@]+[0-9]+")]],    
  })

  }

  get firstname() {
    return this.signupForm.get('firstname');
  }
  get lastname(){
    return this.signupForm.get('lastname');
  }
  get gender(){
    return this.signupForm.get('gender');
  }
  get age(){
    return this.signupForm.get("age");
  }
  get mobilenumber() {
    return this.signupForm.get('mobilenumber');
  }
  get email(){
    return this.signupForm.get('email');
  }
  get password(){
    return this.signupForm.get('password');
  }
  get confirmpassword(){
    return this.signupForm.get('confirmpassword');
  }
 
  onSubmit(){
    console.log(this.signupForm.value);
  }

}

