import { Item } from '../item';

export class MemberItem extends Item {
    UID: string;
    Name: string;
    Email: string;
    ImageURL: string;
    Address1: string;
    Address2: string;
    Contact1: string;
    Contact2: string;
    JoinDate: number;
    ActionDate: number;
}