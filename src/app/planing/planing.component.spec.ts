import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaningComponent } from './planing.component';
import { CreateTurnamentPageComponent } from './pages/create-turnament-page/create-turnament-page.component';
import { MatIconModule } from '@angular/material/icon';

describe('PlaningComponent', () => {
  let component: PlaningComponent;
  let fixture: ComponentFixture<PlaningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlaningComponent, CreateTurnamentPageComponent],
      imports: [MatTableModule, NoopAnimationsModule, MatToolbarModule, MatIconModule, MatListModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
