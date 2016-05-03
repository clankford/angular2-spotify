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