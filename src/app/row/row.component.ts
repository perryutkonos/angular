import {Component, OnInit, Input} from '@angular/core';
import {Row} from '../row';

@Component({
    selector: '[app-row]',
    templateUrl: './row.component.html',
    styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {

    @Input() row: Row;
    @Input() level: number;

    public showSubRows = false;
    public marginLeft = '';
    
    constructor() {
    }

    ngOnInit() {
        this.marginLeft = `${(this.level*25).toString()}px`;
    }

    toggleSubRows() {
        this.showSubRows = !this.showSubRows;
    }

}
