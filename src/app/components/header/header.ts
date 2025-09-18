import { Component ,OnInit  } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
   imports: [RouterLink,RouterModule], 
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header  implements OnInit{
welcomeMessage: string = '';
  constructor(private router: Router) {}

  ngOnInit(): void {
    const role = localStorage.getItem('userRole') || 'Guest';
    this.welcomeMessage = `Welcome to Aptech Event Hub – Stay Updated, Stay Involved! (Welcome ${role})`;
  }
  
  logout(): void {
    localStorage.removeItem('userRole'); // remove role
    this.router.navigate(['/']); // back to cover page
  }
}
