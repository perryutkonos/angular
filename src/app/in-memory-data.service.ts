import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const rows = [{
            id: 1,
            name: "Первый",
            comment: "Комментрий",
            subRows:[{
                id:2,
                name:"Первый Первый",
                comment: "Some",
                subRows:[{
                    id:5,
                    name:"Еще название",
                    comment: "Some comment",
                    subRows:[]
                },{
                    id:6,
                    name:"Еще еще название",
                    comment: "Some comment",
                    subRows:[]
                }]
            },{
                id:3,
                name:"Первый Второй",
                comment: "Testt",
                subRows:[{
                    id:100,
                    name:"Angular топ",
                    comment: "Some comment",
                    subRows:[]
                }]
            }]
        },{
            id:4,
            name:"Второй",
            comment: "таратата",
            subRows:[]
        }];
        return {rows};
    }
}