import { Route } from "@angular/router";
import { ArticleComponent } from "./components/article/article.component";

export const ARTICLE_ROUTES: Route[] = [
    {
        path: '',
        component: ArticleComponent
    }
]