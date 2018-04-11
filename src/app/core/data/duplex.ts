import { Observable, Subscription, Subject } from 'rxjs/Rx';
import { Message } from '../models';

export class Duplex {
    public Arrived: Observable<Message>;
    private _sender: Subject<Message>;
    private _websocket: WebSocket;
    private _path: string;
    private _sub: Subscription;
    
    constructor(path: string) {
        this._path = path;
        this._sender = new Subject<Message>();
        this.Arrived = this._sender.asObservable();
    }

    public Connect() {
        this._websocket = this.wsCreate(this._path);
    }

    public Send(message: Message) {
        this._websocket.send(JSON.stringify(message));
    }

    private wsReconnect() {
        this._websocket = null;
        console.log("disconnected, reconnecting...");
        setTimeout(this.Connect.bind(this), 5000);
    }

    private wsClose() {
        this.wsReconnect();
    }

    private wsError() {
        this.wsReconnect();
    }

    private wsOpen() {
        //[TODO] add status
    }

    private wsMessage(response: MessageEvent) {
        if(this._sender != null)
            this._sender.next(<Message>JSON.parse(response.data));
    }

    private wsCreate(path: string): WebSocket {
        let ws = new WebSocket(path);
        ws.onmessage = this.wsMessage.bind(this);
        ws.onclose = this.wsClose.bind(this);
        ws.onerror = this.wsError.bind(this);
        ws.onopen = this.wsOpen.bind(this);
        return ws;
    }
}