export class StampHelper {
    public get Timestamp(): number
    {
        return this.getStamp(new Date());
    }

    public ToTimestamp(date: Date): number
    {
        return this.getStamp(date);
    }

    public ToDate(timestamp: number): Date
    {
        let val = timestamp.toString();
        let year = parseInt(val.substring(0, 4));
        let month = parseInt(val.substring(4, 6));
        let day = parseInt(val.substring(6, 8));
        let hour = parseInt(val.substring(8, 10));
        let minute = parseInt(val.substring(10, 12));
        let second = parseInt(val.substring(12, 14));
        
        return new Date(year, month-1, day, hour, minute, second);
    }

    private getStamp(date: Date): number {
        let strDate = date.getFullYear() + this.az(date.getMonth()+1) + this.az(date.getDate()) + this.az(date.getHours()) + this.az(date.getMinutes()) + this.az(date.getSeconds());
        return parseInt(strDate);
    }

    private az(val: number) : string {
        let num = val.toString();
        if(num.length < 2)
            num = "0" + num;
        
        return num;
    }
}