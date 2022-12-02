import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PostsComponent } from './posts.component';
import { StateService } from '../../services/state/state.service';
import { ApiService } from '../../services/api/api.service';
import { PostListComponent } from './post-list/post-list.component';

const mockApiService: jasmine.SpyObj<ApiService> = jasmine.createSpyObj(ApiService, ['getPosts', 'getPost', 'getComments']);

describe('PostComponent', () => {
    let fixture: ComponentFixture<PostsComponent>;
    let component: PostsComponent;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                PostsComponent,
                PostListComponent
            ],
            providers:[
                StateService,
                { provide: ApiService, useValue: mockApiService}
            ]
        }).compileComponents();
        fixture = TestBed.createComponent(PostsComponent);        
        component = fixture.componentInstance;
    });

    it('should create the PostsComponent', () => {
        expect(component).toBeTruthy();
    });

    it(`should render posts title`, () => {
        expect(fixture.nativeElement.querySelector('.title')?.textContent).toContain('Posts:')
    });

    it('should render posts', () => {
        expect(fixture.nativeElement.querySelectorAll('pl-post-list').length).toEqual(1);
    });

    it('should render search bar', () => {
        expect(fixture.nativeElement.querySelectorAll('.search-bar').length).toEqual(1);
    });

    it('should run apiService getPosts', () => {
        component.ngOnInit();
        expect(mockApiService.getPosts).toHaveBeenCalled();
    });
});
