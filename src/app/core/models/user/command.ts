import { Item } from '../item';
import { CommandType } from './commandtype';

export class CommandItem extends Item {
    SessionCode: number;
    IssuerUID: string;
    TargetUID: string;
    Type: CommandType;
    Data: any;
}