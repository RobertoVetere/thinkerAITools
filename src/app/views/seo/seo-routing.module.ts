import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlToSeoArticleComponent } from './url-to-seo-article/url-to-seo-article.component';
import { KeywordToSeoArticleComponent } from './keyword-to-seo-article/keyword-to-seo-article.component';

const routes: Routes = [
{
      path: 'url-to-seo-article',
      component: UrlToSeoArticleComponent,
      data: {
        title: 'Url to seo article'
      }
    },
    {
      path: 'keyword-to-seo-article',
      component: KeywordToSeoArticleComponent,
      data: {
        title: 'Keyword to seo article'
      }
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class SeoRoutingModule {
  }