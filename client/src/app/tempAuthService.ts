import { Injectable } from '@angular/core';

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
