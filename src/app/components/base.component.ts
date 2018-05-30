import { Component } from "@angular/core";
import { StyleService } from "../services";
import { Theme } from "../models";

@Component({})
export class BaseComponent {
    private _rootTheme: Theme;

    constructor(private styleService: StyleService) {
        this.styleService.getStyles().subscribe(obs => {
            this._rootTheme = obs;
        });
    }

    get rootTheme(): Theme {
        return this._rootTheme;
    }
}