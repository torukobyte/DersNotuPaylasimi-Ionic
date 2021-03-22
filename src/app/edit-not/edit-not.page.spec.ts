import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditNotPage } from './edit-not.page';

describe('EditNotPage', () => {
  let component: EditNotPage;
  let fixture: ComponentFixture<EditNotPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNotPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditNotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
