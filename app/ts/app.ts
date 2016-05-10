import {
    Component,
    provide
} from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';
import { HTTP_PROVIDERS } from 'angular2/http';
import {
    ROUTER_DIRECTIVES,
    ROUTER_PROVIDERS,
    ROUTER_PRIMARY_COMPONENT,
    Router,
    RouteConfig
} from 'angular2/router';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from 'angular2/platform/common';
import { SearchComponent } from './components/SearchComponent';
import { ArtistComponent } from './components/ArtistComponent';
import { TrackComponent } from './components/TrackComponent';
import { AlbumComponent } from './components/AlbumComponent';
import { SPOTIFY_PROVIDERS } from './services/SpotifyService';

@Component({
    selector: 'spotify-app',
    directives: [ROUTER_DIRECTIVES],
    template: `
    <router-outlet></router-outlet>
    `
})
@RouteConfig([
    { path: '/', name: 'root', redirectTo: ['Search'] },
    { path: '/search', name: 'Search', component: SearchComponent },
    { path: '/artists/:id', name: 'Artists', component: ArtistComponent },
    { path: '/tracks/:id', name: 'Tracks', component: TrackComponent },
    { path: '/albums/:id', name: 'Albums', component: AlbumComponent }
])
class SpotifyApp {
    //query: string;
    
    constructor(public router: Router) {
    }
}

bootstrap(SpotifyApp, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    SPOTIFY_PROVIDERS,
    provide(ROUTER_PRIMARY_COMPONENT, {useValue: SpotifyApp}),
    provide(APP_BASE_HREF,            {useValue: '/'}),
    provide(LocationStrategy,         {useClass: HashLocationStrategy})
]).catch((err: any) => console.error(err));