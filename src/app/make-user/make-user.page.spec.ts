import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MakeUserPage } from './make-user.page';

describe('MakeUserPage', () => {
  let component: MakeUserPage;
  let fixture: ComponentFixture<MakeUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MakeUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});