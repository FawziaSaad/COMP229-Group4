import { Injectable } from '@angular/core';


//=================================================================================================
// THIS TILE IS HERE AS A TEMP FOR THE AUTH MODULE: TO STOP ANGULAR THROWING ERRORS FOR
// SOMEO OF THE USER INFO IN THE HTML FILES.
//=================================================================================================



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Implement your user authentication logic here, including getting the displayName
  // For simplicity, I'll assume you have a method to get the current user
  // and extract the displayName.
  getCurrentUser(): any {
    // Example: Retrieve user data from local storage (update this based on your actual logic)
    const userData = localStorage.getItem('currentUser');
    const user = userData ? JSON.parse(userData) : null;

    return user ? user.displayName : '';
  }
}
