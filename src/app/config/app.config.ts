import { InjectionToken } from '@angular/core';


export const APP_CONFIG = new InjectionToken('app.config');

export interface IAppConfig {
    apiEndpoint: string;
}

export const AppConfig: IAppConfig = {
    apiEndpoint: '/api'
    // apiEndpoint: 'https://dummy-blue-hunter.mybluemix.net'
};
