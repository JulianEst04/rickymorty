import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-app-core',
  templateUrl: './app-core.component.html',
  styleUrls: ['./app-core.component.css']
})
export class AppCoreComponent implements OnInit {

  constructor(private auth: AuthService,
              private router: Router) {
   
   }

  ngOnInit(): void {
  }

    salir() {
      this.auth.logout();
      this.router.navigateByUrl('')
    }
}
