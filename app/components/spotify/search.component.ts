import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
    moduleId: module.id,
    selector: 'search',
    templateUrl: 'search.component.html',
    providers: [ SpotifyService ]
})
export class SearchComponent {
    searchStr: string;
    res: any;

    constructor(private _spotifyService: SpotifyService) {

    }

    searchMusic() {
        //console.log("search spotify: " + this.searchStr)
        // subscrive the search music since its an observable
        this._spotifyService.searchMusic(this.searchStr)
            .subscribe(res => {
                this.res = res;
            });
    }

}

