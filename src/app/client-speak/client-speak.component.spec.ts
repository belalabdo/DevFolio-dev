import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSpeakComponent } from './client-speak.component';

describe('ClientSpeakComponent', () => {
  let component: ClientSpeakComponent;
  let fixture: ComponentFixture<ClientSpeakComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientSpeakComponent]
    });
    fixture = TestBed.createComponent(ClientSpeakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
