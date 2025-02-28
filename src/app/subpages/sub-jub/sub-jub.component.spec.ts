import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubJubComponent } from './sub-jub.component';

describe('SubJubComponent', () => {
  let component: SubJubComponent;
  let fixture: ComponentFixture<SubJubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubJubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubJubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
