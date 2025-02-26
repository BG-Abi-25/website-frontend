import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZuegeComponent } from './zuege.component';

describe('ZuegeComponent', () => {
  let component: ZuegeComponent;
  let fixture: ComponentFixture<ZuegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZuegeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZuegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
