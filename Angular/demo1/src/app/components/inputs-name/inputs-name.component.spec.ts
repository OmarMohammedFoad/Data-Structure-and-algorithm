import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsNameComponent } from './inputs-name.component';

describe('InputsNameComponent', () => {
  let component: InputsNameComponent;
  let fixture: ComponentFixture<InputsNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputsNameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputsNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
