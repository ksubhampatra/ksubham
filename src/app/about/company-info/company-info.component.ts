import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss'],
})
export class CompanyInfoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}
  home(){
    this.router.navigate([''])

  }

}
