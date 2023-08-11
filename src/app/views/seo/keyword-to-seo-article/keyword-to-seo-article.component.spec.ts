import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordToSeoArticleComponent } from './keyword-to-seo-article.component';

describe('KeywordToSeoArticleComponent', () => {
  let component: KeywordToSeoArticleComponent;
  let fixture: ComponentFixture<KeywordToSeoArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KeywordToSeoArticleComponent]
    });
    fixture = TestBed.createComponent(KeywordToSeoArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
