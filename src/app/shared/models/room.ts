import { Customer } from './customer';

export interface Room{
    id: number;
    Rtcode: number;
    Status: number;

    Customers: Customer[];
}