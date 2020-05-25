import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { MockConfig, ApiEndpointDetail } from './app.model';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    constructor(private http: HttpClient) { }

    getFullConfig(): Observable<MockConfig> {
        return this.http.get('/admin/api/config') as Observable<MockConfig>;
    }

    updateFullConfig(config: Object): Observable<any> {
        return this.http.post('/admin/api/config', config);
    }

    getEndpoint(type: string, name: string): Observable<ApiEndpointDetail> {
        return of(
            {
                name: 'api1',
                endpoint: '/api1',
                items: [
                    {
                        name: 'user',
                        apiList: [
                            {
                                method: 'GET',
                                url: 'http://localhsot:3000/api/users'
                            }
                        ]
                    }
                ]
            }).pipe(
                delay(5000)
            ) as Observable<ApiEndpointDetail>;
        return this.http.get('/admin/api/endpoint', {
            params: {
                type, name
            }
        }) as Observable<ApiEndpointDetail>;
    }
}