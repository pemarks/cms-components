import { Component } from "@angular/core";
import { SiteTemplateService, StyleService } from "../services";
import { Title } from "@angular/platform-browser";
import { BaseComponent } from "../components/base.component";
import { IContainerComponent } from ".";
import { SiteTemplate } from "../models";

@Component({})
export class BaseContainer extends BaseComponent implements IContainerComponent {
    protected _siteTemplate: SiteTemplate;

    fullScreen: boolean;
    headerType: string;

    constructor(protected siteTemplateService: SiteTemplateService, styleService: StyleService) {
        super(styleService);

        this.siteTemplateService.getSiteTemplate().subscribe(obs => {
            this._siteTemplate = obs;

            this.fullScreen = obs.container.fullScreen;
            this.headerType = obs.container.headerType;
        });
    }

    get siteTemplate(): SiteTemplate {
        return this._siteTemplate;
    }
}