import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlToSeoArticleComponent } from './url-to-seo-article.component';

describe('UrlToSeoArticleComponent', () => {
  let component: UrlToSeoArticleComponent;
  let fixture: ComponentFixture<UrlToSeoArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UrlToSeoArticleComponent]
    });
    fixture = TestBed.createComponent(UrlToSeoArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
