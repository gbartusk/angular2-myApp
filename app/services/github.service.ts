import {Injectable} from '@angular/core'; // inject this service as a dependency
import {Http, Headers} from '@angular/http'; //
import 'rxjs/add/operator/map'; // map operator

@Injectable()
export class GithubService {
    private username: string = 'gbartusk';
    private client_id: string = 'b1a30e8d1538cb6467c0';
    private client_secret: string = 'ef439936fb9b82658ced30be87597f4be1d8018f';

    constructor(private _http: Http) {
    }

    getUser() {
        // the return of _http.get() is an observable so we can use map operator on it
        return this._http.get('https://api.github.com/users/'+this.username)
            .map(res => res.json());
    }

    getRepos() {
        // the return of _http.get() is an observable so we can use map operator on it
        return this._http.get('https://api.github.com/users/'+this.username+'/repos')
            .map(res => res.json());
    }

    updateUsername(username:string) {
        this.username = username;
    }
}
