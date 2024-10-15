import { Route } from "@angular/router";
import { GlobalFeedComponent } from "./components/global-feed/global-feed.component";

export const GLOBAL_FEED_ROUTES: Route[] = [
    {
        path: '',
        component:GlobalFeedComponent
    }
]