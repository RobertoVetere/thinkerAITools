import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TextToSqlComponent } from './text-to-sql/text-to-sql.component';

const routes: Routes = [
    {
          path: 'text-to-sql',
          component: TextToSqlComponent,
          data: {
            title: 'Text to sql query'
          }
        },
      ];
      
      @NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
      })
      export class TextToSqlModule {
      }