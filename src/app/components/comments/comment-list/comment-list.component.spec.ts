import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CommentListComponent } from './comment-list.component';

const commentList = [
    {
        "postId": 1,
        "id": 1,
        "name": "id labore ex et quam laborum",
        "email": "Eliseo@gardner.biz",
        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    },
    {
        "postId": 1,
        "id": 2,
        "name": "quo vero reiciendis velit similique earum",
        "email": "Jayne_Kuhic@sydney.com",
        "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
    },
    {
        "postId": 1,
        "id": 3,
        "name": "odio adipisci rerum aut animi",
        "email": "Nikita@garfield.biz",
        "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
    },
    {
        "postId": 1,
        "id": 4,
        "name": "alias odio sit",
        "email": "Lew@alysha.tv",
        "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
    },
    {
        "postId": 1,
        "id": 5,
        "name": "vero eaque aliquid doloribus et culpa",
        "email": "Hayden@althea.biz",
        "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
    }
];

describe('CommentListComponent', () => {
    let fixture: ComponentFixture<CommentListComponent>;
    let component: CommentListComponent;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                CommentListComponent
            ],
        }).compileComponents();
        fixture = TestBed.createComponent(CommentListComponent);
        component = fixture.componentInstance;
    });

    it('should create the CommentListComponent', () => {
        expect(component).toBeTruthy();
    });

    it('should render comments', () => {
        component.comments = commentList;
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelectorAll('.comment').length).toEqual(commentList.length);
    });

    it('should render comments info', () => {
        component.comments = commentList;
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelectorAll('.comment .body')[0].textContent).toEqual(commentList[0].body);
        expect(fixture.nativeElement.querySelectorAll('.comment .body')[3].textContent).toEqual(commentList[3].body);
        expect(fixture.nativeElement.querySelectorAll('.comment .name')[0].textContent).toEqual(commentList[0].name);
        expect(fixture.nativeElement.querySelectorAll('.comment .name')[3].textContent).toEqual(commentList[3].name);
    });
});
