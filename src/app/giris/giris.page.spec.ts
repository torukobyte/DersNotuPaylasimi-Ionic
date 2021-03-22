import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GirisPage } from './giris.page';

describe('GirisPage', () => {
  let component: GirisPage;
  let fixture: ComponentFixture<GirisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GirisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GirisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
