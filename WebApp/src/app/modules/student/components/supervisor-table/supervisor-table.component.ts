import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {UserService} from 'src/app/services/userService/user.service';
import {MdbTableDirective} from 'angular-bootstrap-md';
import {User} from 'src/app/models/user';

@Component({
  selector: 'app-supervisor-table',
  templateUrl: './supervisor-table.component.html',
  styleUrls: ['./supervisor-table.component.scss']
})
export class SupervisorTableComponent implements OnInit {
  @ViewChild(MdbTableDirective) mdbTable: MdbTableDirective;
  headElements = ['ID', 'First', 'Last', 'Handle'];
  searchText: string = '';
  previous: string;

  constructor(private uservice: UserService) {
  }

  @HostListener('input') oninput() {
    this.searchItems();
  }


  editField: string;

  personList: Array<User>;
  awaitingPersonList: Array<any> = [];


  ngOnInit() {
    this.uservice.getSupervisors().subscribe((data) => {
      while (data == null) {
        ;
      }
      this.personList = this.uservice.toUser(data);
      this.uservice.addUser(this.personList[2]);
    });

  }


  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.personList[id][property] = editField;
  }

  remove(id: any) {
    this.awaitingPersonList.push(this.personList[id]);
    this.personList.splice(id, 1);
  }

  add() {
    if (this.awaitingPersonList.length > 0) {
      const person = this.awaitingPersonList[0];
      this.personList.push(person);
      this.awaitingPersonList.splice(0, 1);
    }
  }

  changeValue(event: any) {
    this.editField = event.target.textContent;
  }

  searchItems() {
    const prev = this.mdbTable.getDataSource();

    if (!this.searchText) {
      this.mdbTable.setDataSource(this.previous);
      this.personList = this.mdbTable.getDataSource();
    }

    if (this.searchText) {
      this.personList = this.mdbTable.searchLocalDataBy(this.searchText);
      this.mdbTable.setDataSource(prev);
    }
  }
}
