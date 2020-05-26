import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { MockConfig, ApiEndpointDetail, ApiEndpoint } from './app.model';
import { Observable, of } from 'rxjs';
import { delay, tap, map } from 'rxjs/operators';

const typeKeyMap = {
    api: 'serveApi',
    ws: 'serveWebsocket',
    static: 'serveStatic',
    proxy: 'serveProxy'
};

@Injectable({
    providedIn: 'root'
})
export class AppService {
    fullConfig: MockConfig;

    get mockServerUrl(): string {
        return this.fullConfig && `${location.protocol}//${location.hostname}:${this.fullConfig.port}`;
    }

    constructor(private http: HttpClient) { }

    getFullConfig(): Observable<MockConfig> {
        return this.http.get('/api/config')
            .pipe(map((res: MockConfig) => {
                this.fullConfig = res;
                return res;
            })) as Observable<MockConfig>;
    }

    updateFullConfig(config: Object): Observable<any> {
        return this.http.put('/api/config', config);
    }

    getEndpoint(type: string, id: string): Observable<ApiEndpointDetail> {
        return this.http.get('/api/endpoint', {
            params: {
                type: typeKeyMap[type], id
            }
        }).pipe(map((res: ApiEndpointDetail) => {
            if (!res) {
                return null;
            }
            const keys = this.getApiKeys(res.fileData);
            res.items = keys.map(key => {
                const apiList = [];
                if (type === 'api') {
                    apiList.push({ method: 'GET', url: `${res.endpoint}/${key}`, description: `Get ${key}.`, triable: true });
                    apiList.push({ method: 'GET', url: `${res.endpoint}/${key}/:id`, description: `Get ${key} by id.`, triable: true });
                    apiList.push({ method: 'POST', url: `${res.endpoint}/${key}`, description: `Create ${key}.` });
                    apiList.push({ method: 'PUT', url: `${res.endpoint}/${key}/:id`, description: `Update ${key} by id.` });
                    apiList.push({ method: 'DELETE', url: `${res.endpoint}/${key}/:id`, description: `Delete ${key} by id.` });
                    apiList.push({ method: 'PATCH', url: `${res.endpoint}/${key}/:id`, description: `Patch update ${key} by id.` });
                }
                if (type === 'ws') {
                    apiList.push({ url: `${res.endpoint}/${key}`, description: `Websocket endpoint ${key}.` })
                }
                return {
                    name: key,
                    apiList
                };
            })
            return res || {};
        })) as Observable<ApiEndpointDetail>;
    }

    addEndpoint(type: string, endpoint: ApiEndpoint, fileData = ''): Observable<any> {
        return this.http.post(`/api/endpoint?type=${typeKeyMap[type]}`, {
            mockConfig: endpoint,
            fileData
        })
    }

    updateEndpoint(type: string, id: string, endpoint: ApiEndpoint, fileData = ''): Observable<any> {
        return this.http.put(`/api/endpoint?type=${typeKeyMap[type]}&id=${id}`, {
            mockConfig: endpoint,
            fileData
        });
    }

    deleteEndpoint(type: string, id: string): Observable<any> {
        return this.http.delete('/api/endpoint', {
            params: {
                type: typeKeyMap[type], id
            }
        });
    }

    private getApiKeys(dataStr: string = ''): string[] {
        if (!dataStr) {
            return [];
        }
        let result = [];
        try {
            const jsonStr = dataStr.replace(/{{ *[#\/]repeat[ \w]*}}/g, '').replace(/{{[^{}]+}}/g, '0');
            const dataObj = JSON.parse(jsonStr);
            result = Object.keys(dataObj)
        } catch (e) {
            console.error('failed to parse fileData to json', e);
        }
        return result;
    }
}