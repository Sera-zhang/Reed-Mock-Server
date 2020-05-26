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
    id: string;
    endpoint: string;
    indexPages: string[];
    dirPath: string;
}

export interface ApiEndpoint {
    id: string;
    endpoint: string;
}

export interface ApiEndpointDetail extends ApiEndpoint {
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
    description?: string;
    triable?: boolean;
}

export interface WsEndpoint extends ApiEndpoint {
    type?: string;
    interval?: string;
}

export interface ProxyEndpoint {
    id: string;
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