// import { Component, OnInit } from '@angular/core';


// @Component({
//   selector: 'app-my-form',
//   templateUrl: './my-form.component.html',
//   styleUrls: ['./my-form.component.css']
// })
// export class MyFormComponent {
//   name: string = '';
//   email: string = '';
//   message: string = '';

// }






import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
  name: string = '';
  email: string = '';
  message: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'] || '';
      this.email = params['email'] || '';
      this.message = params['message'] || '';
    });
  }
}







// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, ParamMap } from '@angular/router';

// @Component({
//   selector: 'app-my-form',
//   templateUrl: './my-form.component.html',
//   styleUrls: ['./my-form.component.css']
// })
// export class MyFormComponent implements OnInit {
//   name: string = '';
//   email: string = '';
//   message: string = '';

//   constructor(private route: ActivatedRoute) { }

//   ngOnInit(): void {
//     // Subscribe to paramMap changes
//     this.route.paramMap.subscribe((params: ParamMap) => {
//       this.name = params.get('name') || '';
//       this.email = params.get('email') || '';
//       this.message = params.get('message') || '';
//     });
//   }
// }



