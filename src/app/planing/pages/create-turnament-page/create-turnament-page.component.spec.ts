import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTurnamentPageComponent } from './create-turnament-page.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('CreateTurnamentPageComponent', () => {
  let component: CreateTurnamentPageComponent;
  let fixture: ComponentFixture<CreateTurnamentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTurnamentPageComponent ],
      imports: [NoopAnimationsModule, MatToolbarModule, MatListModule, MatIconModule, MatIconModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTurnamentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
