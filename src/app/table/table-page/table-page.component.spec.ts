import { MatToolbarModule } from '@angular/material/toolbar';
import { TableComponent } from './../../shared/components/table/table.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePageComponent } from './table-page.component';
import { MatTableModule } from '@angular/material/table';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('TablePageComponent', () => {
  let component: TablePageComponent;
  let fixture: ComponentFixture<TablePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TablePageComponent, TableComponent],
      imports: [NoopAnimationsModule, MatTableModule, MatToolbarModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
