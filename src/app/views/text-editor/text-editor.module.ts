import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuillModule } from 'ngx-quill'; 
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { KeywordToSeoArticleModule } from '../seo/keyword-to-seo-article/keyword-to-seo-article.module';

import { TextEditorRoutingModule } from './text-editor-routing.module';
import { TextEditorComponent } from './text-editor.component';



@NgModule({
  declarations: [
    TextEditorComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    TextEditorRoutingModule,
    QuillModule,
    ReactiveFormsModule,
    KeywordToSeoArticleModule
  ]
})
export class TextEditorModule { }
