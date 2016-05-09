import { Component, OnInit } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { RouteParams } from 'angular2/router';
import { LocationStrategy } from 'angular2/platform/common';
import { SpotifyService } from '../services/SpotifyService';

@Component({
    selector: 'track',
    directives: [CORE_DIRECTIVES],
    template: `
    `
})
export class TrackComponent implements OnInit {
    
    constructor(){}
    
    ngOnInit() {
        return;
    }
}