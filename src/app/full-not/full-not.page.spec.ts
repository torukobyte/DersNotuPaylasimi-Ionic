import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FullNotPage } from './full-not.page';

describe('FullNotPage', () => {
  let component: FullNotPage;
  let fixture: ComponentFixture<FullNotPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullNotPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FullNotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
