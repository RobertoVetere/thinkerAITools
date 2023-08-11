import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextToSqlComponent } from './text-to-sql.component';

describe('TextToSqlComponent', () => {
  let component: TextToSqlComponent;
  let fixture: ComponentFixture<TextToSqlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextToSqlComponent]
    });
    fixture = TestBed.createComponent(TextToSqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
