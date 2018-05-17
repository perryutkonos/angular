import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import {Row} from "./row";

@Injectable({
  providedIn: 'root'
})
export class DataService {

    constructor(
        private http: HttpClient,
    ) { }

    private dataUrl = 'api/rows';
    
    getRows(): Observable<Row[]> {
        return this.http.get<Row[]>(this.dataUrl)
    }
}
