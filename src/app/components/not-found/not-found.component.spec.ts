import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NotFoundComponent } from './not-found.component';

describe('NotFoundComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [],
            declarations: [
                NotFoundComponent
            ],
            providers:[]
        }).compileComponents();
    });

    it('should create the NotFoundComponent', () => {
        const fixture = TestBed.createComponent(NotFoundComponent);
        const component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });
});
