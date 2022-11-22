import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';



@Component({
   templateUrl: './signup.component.html',
   styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(public authService : AuthService, private sankBar : MatSnackBar,  private router: Router ){}

  onSignup(form:  NgForm){

    if(form.invalid){
      this.sankBar.open("Please try again..", 'Close');
      return;
    }
    else{
      this.sankBar.open("You're successfly signed up!", 'Close');
      console.log(form.value.role)
      this.authService.createUser(form.value.name,form.value.contact,form.value.nic,form.value.email,form.value.password,form.value.role);
      form.resetForm();
      this.router.navigate(['/login']);
    }
  };

};
