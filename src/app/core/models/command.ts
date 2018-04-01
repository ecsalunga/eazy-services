import { Item } from './item';
import { CommandType } from './commandtype';

export class CommandItem extends Item {
    ControlCode: number;
    Type: CommandType;
    Data: any;
}