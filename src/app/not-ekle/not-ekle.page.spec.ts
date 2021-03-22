import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotEklePage } from './not-ekle.page';

describe('NotEklePage', () => {
  let component: NotEklePage;
  let fixture: ComponentFixture<NotEklePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotEklePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotEklePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
