import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sechdule } from './sechdule';

describe('Sechdule', () => {
  let component: Sechdule;
  let fixture: ComponentFixture<Sechdule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sechdule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sechdule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
