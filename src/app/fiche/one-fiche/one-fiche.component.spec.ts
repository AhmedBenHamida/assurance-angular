import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneFicheComponent } from './one-fiche.component';

describe('OneFicheComponent', () => {
  let component: OneFicheComponent;
  let fixture: ComponentFixture<OneFicheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneFicheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneFicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
