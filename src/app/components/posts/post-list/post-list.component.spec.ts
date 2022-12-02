import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PostListComponent } from './post-list.component';

const postList = [
    {
        "userId": 1,
        "username": "Bret",
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "username": "Bret",
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "userId": 1,
        "username": "Bret",
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
        "userId": 2,
        "username": "Antonette",
        "id": 12,
        "title": "in quibusdam tempore odit est dolorem",
        "body": "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
    },
    {
        "userId": 2,
        "username": "Antonette",
        "id": 13,
        "title": "dolorum ut in voluptas mollitia et saepe quo animi",
        "body": "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
    },
    {
        "userId": 2,
        "username": "Antonette",
        "id": 14,
        "title": "voluptatem eligendi optio",
        "body": "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum"
    }
];

describe('PostListComponent', () => {
    let fixture: ComponentFixture<PostListComponent>;
    let component: PostListComponent;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                PostListComponent
            ],
        }).compileComponents();
        fixture = TestBed.createComponent(PostListComponent);
        component = fixture.componentInstance;
    });

    it('should create the PostListComponent', () => {
        expect(component).toBeTruthy();
    });

    it('should render posts', () => {
        component.posts = postList;
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelectorAll('.post-content').length).toEqual(postList.length);
    });

    it('should render posts info', () => {
        component.posts = postList;
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelectorAll('.post-content h4')[1].textContent).toEqual(postList[1].title);
        expect(fixture.nativeElement.querySelectorAll('.post-content h4')[2].textContent).toEqual(postList[2].title);
        expect(fixture.nativeElement.querySelectorAll('.post-content p')[1].textContent).toEqual(postList[1].body);
        expect(fixture.nativeElement.querySelectorAll('.post-content p')[2].textContent).toEqual(postList[2].body);
    });
});
