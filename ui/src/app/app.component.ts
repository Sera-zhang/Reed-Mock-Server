import { Component, OnInit } from '@angular/core';
import { MockConfig, ApiEndpoint, WsEndpoint, ProxyEndpoint, StaticEndpoint } from './app.model';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'reed-mock-admin';
  mockConfig: MockConfig;

  endpointDefault = {
    api: {
      name: 'api',
      endpoint: '/api',
      filePath: './configs/json-api.hbs',
      options: {

      }
    },
    ws: {
      name: 'ws',
      endpoint: '/ws',
      filePath: './config/json-ws.hbs',
      type: 'timer | fileWatcher',
      interval: '500 (Only applicable when type is timer)',
      options: {

      }

    },
    static: {
      name: 'static',
      endpoint: '/',
      indexPages: [
        'index.html',
        'index.htm'
      ],
      dirPath: './static'
    },
    proxy: {
      endpoint: '/proxy',
      target: 'http://hostname',
      options: {}
    }
  };

  editingEndpointType = '';

  get apiEndpoints(): ApiEndpoint[] {
    return this.mockConfig && this.mockConfig.serveApi.endpoints || [];
  }

  get wsEndpoints(): WsEndpoint[] {
    return this.mockConfig && this.mockConfig.serveWebsocket.endpoints || [];
  }

  get proxyEndpoints(): ProxyEndpoint[] {
    return this.mockConfig && this.mockConfig.serveProxy.endpoints || [];
  }

  get staticEndpoints(): StaticEndpoint[] {
    return this.mockConfig && this.mockConfig.serveStatic.endpoints || [];
  }

  constructor(private service: AppService) {}

  ngOnInit(): void {
    this.mockConfig = {
      admin: {
        urlPrefix: '/admin'
      },
      customMiddleware: {
        front: [],
        last: []
      },
      serveApi: {
        enabled: true,
        endpoints: [
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
          }
        ]
      },
      serveProxy: {
        enabled: true,
        endpoints: [
          {
            endpoint: '/proxy-foo',
            target: 'http://localhost:2999/api'
          }
        ]
      },
      serveStatic: {
        enabled: true,
        endpoints: [
          {
            endpoint: '/',
            indexPages: ['index.html', 'index.htm'],
            dirPath: './static'
          }
        ]
      },
      serveWebsocket: {
        enabled: true,
        endpoints: [
          {
            name: 'ws1',
            endpoint: '/ws1',
            type: 'timer',
            interval: '500',
            items: []
          },
          {
            name: 'ws2',
            endpoint: '/ws2',
            type: 'fileWatcher'
          }
        ]
      },
      timeout: 300,
      port: '3000'
    }

    this.service.getFullConfig()
      .subscribe(res => {
        this.mockConfig = res;
      });
  }

  isEnabled(name: string): boolean {
    return this.mockConfig && this.mockConfig[name].enabled;
  }

  openEndpointEditor(modal: any, type: string): void {
    this.editingEndpointType = type;
    setTimeout(() => modal.open());
  }

  submitFullConfig(config: Object): void {
    console.log(config);
  }

}
