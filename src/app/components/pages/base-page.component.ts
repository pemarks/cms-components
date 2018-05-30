import { BaseComponent } from "../base.component";
import { IPageComponent } from ".";
import { StyleService } from "../../services";
import { Component, Input } from "@angular/core";

@Component({})
export class BasePageComponent extends BaseComponent implements IPageComponent {
    @Input()
    title: string;

    @Input()
    path: string;

    constructor(styleService: StyleService) {
        super(styleService);
    }
}