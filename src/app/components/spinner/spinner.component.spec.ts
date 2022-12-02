import { TestBed, ComponentFixture } from '@angular/core/testing';
import { SpinnerComponent } from './spinner.component';
import { LoaderService } from '../../services/loader.service';

describe('SpinnerComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [],
            declarations: [
                SpinnerComponent
            ],
            providers:[
                LoaderService
            ]
        }).compileComponents();
    });

    it('should create the PostsComponent', () => {
        const fixture = TestBed.createComponent(SpinnerComponent);
        const component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });
});
