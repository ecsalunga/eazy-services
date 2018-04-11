import { Codes, CommandType, CommandItem } from '../models';
import { LoadHelper, UtilityHelper } from '../helpers';
import { DataAccess, DataLayer, DataItems } from '../data';
import { DelayCall } from '../decorators';

export class Command {
    private _commandItems: DataItems<CommandItem>;
    private _dl: DataLayer;
    private _loader: LoadHelper;
    private _utility: UtilityHelper;

    constructor(commandItems: DataItems<CommandItem>, dl: DataLayer, loader: LoadHelper, utility: UtilityHelper) {
        this._commandItems = commandItems;
        this._dl = dl;
        this._loader = loader;
        this._utility = utility;

        this.init();
    }

    public Execute(cmd: CommandItem) {
        this._commandItems.Save(cmd);
    }

    private init() {
        this._dl.Loaded.subscribe(update => {
            if(update.Code == Codes.CommandItems) 
                this.processCommand();
        });
    }

    private processCommand() {
        this._dl.CommandItems.forEach(cmd => {
            if(this._dl.State.SessionCode != cmd.SessionCode && this._dl.FBUser.uid == cmd.TargetUID) {
                if(cmd.Type == CommandType.View)
                    this.Load(cmd.Data);
            }

            if(this._dl.State.SessionCode == cmd.SessionCode)
                this.deleteCommand(cmd.IssuerUID);
        });
    }

    private Load(selector: string) {
        this._utility.AnimateContent();
        return this._loader.LoadComponent(selector);
    }

    @DelayCall(3000)
    private deleteCommand(uid: string) {
        let keys = new Array<string>();
        this._dl.CommandItems.forEach(cmd => {
            if(cmd.IssuerUID == uid)
                keys.push(cmd.key);
        });
        
        keys.forEach(key => {
            this._commandItems.Delete(key, false);
        });
    }
}