import { Injectable, provide } from 'angular2/core';
import { Http } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class SpotifyService {
    constructor(public http: Http) {
    }
    
    searchByTrack(query: string) {
        let params: string = [
            `q=${query}`,
            `type=track`
        ].join("&");
        let queryURL: string = `https://api.spotify.com/v1/search?${params}`;
        return this.http.request(queryURL).map(res => res.json());
    }
}