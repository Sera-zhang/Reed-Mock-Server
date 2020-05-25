export interface MockConfig {
    port: string;
    timeout: number;
    serveStatic: EndpointType<StaticEndpoint>;
    serveApi: EndpointType<ApiEndpoint>;
    serveWebsocket: EndpointType<WsEndpoint>;
    serveProxy: EndpointType<ProxyEndpoint>;
    customMiddleware: MiddlewareConfig;
    admin: AdminConfig;
}

export interface EndpointType<T> {
    enabled: boolean;
    endpoints: T[];
}

export interface StaticEndpoint {
    endpoint: string;
    indexPages: string[];
    dirPath: string;
}

export interface ApiEndpoint {
    name: string;
    endpoint: string;
    items?: ApiItem[];
}

export interface ApiEndpointDetail {
    items?: ApiItem[];
    fileData?: string;
}

export interface ApiItem {
    name: string;
    apiList: Api[];
}

export interface Api {
    method?: string;
    url: string;
}

export interface WsEndpoint extends ApiEndpoint {
    type?: string;
    interval?: string;
}

export interface ProxyEndpoint {
    endpoint: string;
    target: string;
    options?: any;
}

export interface MiddlewareConfig {
    front: any[];
    last: any[];
}

export interface AdminConfig {
    urlPrefix: string;
}