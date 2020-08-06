import { Room } from './room';

export interface Customer{

    id: number;
    roomno: number;
    cname: string;
    address: string;
    phone: string;
    email: string;
    checkin: Date;
    totalPersons: number;
    bookingdays: number;
    advance: number;

    Room: Room;

}