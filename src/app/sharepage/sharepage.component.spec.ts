import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharepageComponent } from './sharepage.component';

describe('SharepageComponent', () => {
  let component: SharepageComponent;
  let fixture: ComponentFixture<SharepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharepageComponent]
    });
    fixture = TestBed.createComponent(SharepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
