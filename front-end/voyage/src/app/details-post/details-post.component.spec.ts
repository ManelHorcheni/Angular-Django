import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPostComponent } from './details-post.component';
import { HeaderComponent } from '../site-framework/header/header.component';
import { AppComponent } from '../app.component';

describe('DetailsPostComponent', () => {
  let component: DetailsPostComponent;
  let fixture: ComponentFixture<DetailsPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsPostComponent,
        HeaderComponent,
        AppComponent
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
