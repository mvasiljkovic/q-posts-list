import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from '../api/api.service';

describe('ApiService', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                HttpClientTestingModule
            ],
            providers: [
                ApiService,
                HttpTestingController
            ]
        }).compileComponents();
    });

    it('should create the ApiService', () => {
        const service = TestBed.get(ApiService);
        expect(service).toBeTruthy();
    });
});
