export class UploadToken {
    private _basePath: string;
    private _isLoaded: boolean;
    private _isDirty: boolean;
    private _downloadUrl: string

    constructor(basePath: string, downloadUrl: string, isLoaded: boolean = true) {
        this._basePath = basePath;
        this._downloadUrl = downloadUrl;
        this._isLoaded = isLoaded;
        this._isDirty = false;
    }

    public get IsDirty(): boolean {
        return this._isDirty;
    }
    public get DownloadUrl(): string {
        return this._downloadUrl;
    }

    public get IsLoaded(): boolean {
        return this._isLoaded;
    }

    public get BasePath(): string {
        return this._basePath;
    }

    public Procces(isLoaded: boolean) {
        this._isLoaded = isLoaded;
    }

    public Update(value: string) {
        this._downloadUrl = value;
        this._isDirty = true;
        this._isLoaded = true;
    }
}