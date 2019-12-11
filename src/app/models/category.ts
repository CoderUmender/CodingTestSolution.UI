import { location } from './location';
import { Department } from './department';

export class Category {
    // tslint:disable-next-line:variable-name
    CategoryID: number;
    CategoryName  : string;
    Department_ID : number;
    Department: Department;
}
