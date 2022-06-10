import { SemVer } from 'semver';

export class YdmAppGlobalConfig {
    public static readonly APP_VERSION: SemVer = new SemVer('1.0.0');
    public static readonly DASHBOARD_SETTINGS_COLLECTION: string = 'mongo:ydm:dashboardSettings';
}