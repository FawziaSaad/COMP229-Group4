import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/tempAuthService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  displayName: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.displayName = this.authService.getCurrentUser();
  }
}
