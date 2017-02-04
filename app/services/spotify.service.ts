import {Injectable} from '@angular/core'; // dependency injection
import {Http, Headers} from '@angular/http'; //
import 'rxjs/add/operator/map'; // use observable

@Injectable()
export class SpotifyService {
    private searchUrl: string;

    constructor(private _http: Http) {

    }

    searchMusic(str:String, type:String = 'artist') {
        this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type+'&market=US';
        console.log(this.searchUrl);
        return this._http.get(this.searchUrl).map(res => res.json);
    }
}