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
      endpoint: '/api',
      options: {}
    },
    ws: {
      endpoint: '/ws',
      type: 'timer | fileWatcher',
      interval: '500 (Only applicable when type is timer)',
      options: {}
    },
    static: {
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

  get mockServerUrl(): string {
    return this.service.mockServerUrl;
  }

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

  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.loadFullConfig();
  }

  loadFullConfig(): void {
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

  submitFullConfig(event: { data: any, close: any }): void {
    const { data, close } = event;
    this.service.updateFullConfig(data.config)
      .subscribe(res => {
        console.log('success');
        close();
        this.loadFullConfig();
      })
    console.log(data);
  }

  submitEndpoint(event: { data: any, close: any }): void {
    const { data, close } = event;
    this.service.addEndpoint(this.editingEndpointType, data.config, data.extra)
      .subscribe(res => {
        console.log('success');
        close();
        this.loadFullConfig();
      });
  }
}
