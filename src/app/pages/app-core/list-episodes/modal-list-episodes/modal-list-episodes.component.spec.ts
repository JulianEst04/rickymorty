import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalListEpisodesComponent } from './modal-list-episodes.component';

describe('ModalListEpisodesComponent', () => {
  let component: ModalListEpisodesComponent;
  let fixture: ComponentFixture<ModalListEpisodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalListEpisodesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalListEpisodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
