import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportazioneFileComponent } from './importazione-file.component';

describe('ImportazioneFileComponent', () => {
  let component: ImportazioneFileComponent;
  let fixture: ComponentFixture<ImportazioneFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportazioneFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportazioneFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
