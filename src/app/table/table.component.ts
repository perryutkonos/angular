import { Component, OnInit } from '@angular/core';
import {Row} from "../row";
import {DataService} from "../data.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

    rows:Row[];

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.getRows();
    }

    getRows(): void {
        this.dataService.getRows().subscribe(rows => this.rows = rows);
    }

}
