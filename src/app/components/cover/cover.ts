import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
selector: 'app-cover',
templateUrl: './cover.html',
styleUrls: ['./cover.scss']
})
export class Cover {
constructor(private router: Router) {}


onSelect(role: string){
if(role === 'student'){
this.router.navigate(['/home']);
} else if(role === 'faculty'){
this.router.navigate(['/home']);
} else if(role === 'visitor'){
this.router.navigate(['/home']);
}
}
}