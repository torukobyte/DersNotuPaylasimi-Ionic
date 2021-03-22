import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UyeOlPage } from './uye-ol.page';

describe('UyeOlPage', () => {
  let component: UyeOlPage;
  let fixture: ComponentFixture<UyeOlPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UyeOlPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UyeOlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
