import { Theme } from './theme';

import { IHeaderComponent, IPageComponent } from "../components";
import { IContainerComponent } from '../container';


export class SiteTemplate {
    public theme: Theme;
    public container: IContainerComponent;
    public header: IHeaderComponent;
    public pages: Array<IPageComponent>;
}