import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageComponent } from './message.component';

describe('MessageComponent', () => {
  let component: MessageComponent;
  let fixture: ComponentFixture<MessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessageComponent]
    })
      .compileComponents();
  });

  //Task 4
  beforeEach(() => {
    fixture = TestBed.createComponent(MessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Task 5
  it('should display "The message component" in a <span>', () => {
    const pageHTML: HTMLElement = fixture.nativeElement;
    const span = pageHTML.querySelector('span');
    expect(span).toBeTruthy();
    if (span)
      expect(span.textContent).toEqual('The message component');

  });

  //Task 6
  it('should pass message though @Input', () => {
    const pageHTML: HTMLElement = fixture.nativeElement;

    // mock the hero supplied by the parent component
    const expectedMessage = "Test message";

    // simulate the parent setting the input property with that message
    component.message = expectedMessage;

    // trigger initial data binding
    fixture.detectChanges();
    expect(pageHTML.textContent).toContain(expectedMessage);
  });


});
