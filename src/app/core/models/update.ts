export class Update {
    Type: string;
    Code: string;
    Data: any;

    constructor(type: string, data: any);
    constructor(type: string, code: string);
    constructor(type: string, data: any, code: string);
    constructor(type: string, param: any | string, code?: string) {
        this.Type = type;
        if(code == null) {
            if(typeof param === 'string')
                this.Code = param;
            else
                this.Data = param;
        }
        else
        {
            this.Data = param;
            this.Code = code;
        }
    }
}