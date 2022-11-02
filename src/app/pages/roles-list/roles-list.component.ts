import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.scss']
})
export class RolesListComponent implements OnInit {

  rolesData = [
    {roleId: 0, roleName: 'Admin', roleDescription: '', disabled: false},
    {roleId: 1, roleName: 'Sales', roleDescription: '', disabled: false},
    {roleId: 2, roleName: 'Manager', roleDescription: '', disabled: false},
    {roleId: 3, roleName: 'Traffic', roleDescription: '', disabled: false},
  ]

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  onRolesRowClick(data: any) {
    this.route.navigate(['security-detail', data?.roleId]);
  }

}
