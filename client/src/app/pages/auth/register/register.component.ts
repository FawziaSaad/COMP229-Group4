import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
              private http: HttpClient){}

  ngOnInit(): void{

  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  register(data) : void {
    console.log('Register method called.');
    console.log(data);

    
    let userToRegister = {
      username: data.username,
      password: data.password,
      email: data.email,
      displayName: data.displayName,
    }

    console.log(userToRegister);
    
    try {
      this.http.post(`https://g4serverside.azurewebsites.net/register`, userToRegister).subscribe(
        (response) => {
          console.log('Responses:', response);
          // Handle the response as needed
        }
      );
    console.log(data);
    }
    catch (err) {
      console.log(err);
    }
    this.router.navigate(['/']);
  }
}
