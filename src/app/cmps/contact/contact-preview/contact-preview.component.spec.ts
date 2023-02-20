import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPreviewComponent } from './contact-preview.component';

describe('ContactPreviewComponent', () => {
  let component: ContactPreviewComponent;
  let fixture: ComponentFixture<ContactPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
