import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';

import {AppComponent} from './app.component';
import {RowComponent} from './row/row.component';
import { TableComponent } from './table/table.component';

import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
    declarations: [
        AppComponent,
        RowComponent,
        TableComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, {dataEncapsulation: false}
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
