import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibiliteToolsComponent } from './accessibilite-tools.component';

describe('AccessibiliteToolsComponent', () => {
  let component: AccessibiliteToolsComponent;
  let fixture: ComponentFixture<AccessibiliteToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessibiliteToolsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccessibiliteToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
