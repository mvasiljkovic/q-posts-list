import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { CommentsComponent } from './comments.component';
import { StateService } from '../../services/state/state.service';
import { ApiService } from '../../services/api/api.service';
import { CommentListComponent } from './comment-list/comment-list.component';

const mockApiService: jasmine.SpyObj<ApiService> = jasmine.createSpyObj(ApiService, ['getPosts', 'getPost', 'getComments']);

describe('CommentsComponent', () => {
    let fixture: ComponentFixture<CommentsComponent>;
    let component: CommentsComponent;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                HttpClientModule
            ],
            declarations: [
                CommentsComponent,
                CommentListComponent
            ],
            providers: [
                StateService,
                { provide: ApiService, useValue: mockApiService}
            ]
        }).compileComponents();
        fixture = TestBed.createComponent(CommentsComponent);
        component = fixture.componentInstance;
    }); 

    it('should create the CommentsComponent', () => {
        expect(component).toBeTruthy();
    });

    it(`should render post's title`, () => {
        component.currentPost = {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        };
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.title')?.textContent).toContain('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
    });

    it('should render comments', () => {
        component.currentPost = {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        };
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelectorAll('pl-comment-list').length).toEqual(1);
    });

    it('should run apiService getPost', () => {
        component.ngOnInit();
        expect(mockApiService.getPost).toHaveBeenCalled();
    });

    it('should run apiService getComments', () => {
        component.ngOnInit();
        expect(mockApiService.getComments).toHaveBeenCalled();
    });
});
