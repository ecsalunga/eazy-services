export class ItemAction {
    UID: string;
    Name: string;
    Stamp: number;

    constructor(uid: string, name: string, stamp: number) {
        this.UID = uid;
        this.Name = name;
        this.Stamp = stamp;
    }
}