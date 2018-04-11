import { MatSnackBar } from '@angular/material';

import { DataLayer } from '../data';
import { DelayCall } from '../decorators';

export class UtilityHelper {
    private _dl: DataLayer;

    constructor(dl: DataLayer, private _snackBar: MatSnackBar) {
        this._dl = dl;
    }

    public ToTop() {
        window.scroll(0, 0);
    }

    public AnimateContent() {
        this.ToTop();
        this._dl.State.LoaderState = "out";
        this.showLoader();
    }

    public Display(message: string, action: string = "Done", duration: number = 5000) {
        this._snackBar.open(message, action, { duration: duration });
    }

    @DelayCall(1)
    private showLoader() {
        this._dl.State.LoaderState = "in";
    }
}