import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'user-directory-item',
  templateUrl: './user-directory-item.component.html',
  styleUrls: ['./user-directory-item.component.scss']
})
export class UserDirectoryItemComponent implements OnInit {

  @Input() model;

  menu = {
    trigger: 'primary',
    actions: [
      { id: 'ViewBtn', icon: 'bars', text: 'View' },
      { id: 'UpdateBtn', icon: 'bars', text: 'Update' },
      { id: 'DeactivateBtn', icon: 'bars', text: 'Deactivate' }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

  menuClicked(action) {
	console.log(`%cLog: clicked action`, 'color: blue; font-weight: bold');
  }

}