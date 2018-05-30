import { IHeaderComponent } from "..";
import { Component, Input } from "@angular/core";
import { Link } from "../../models";
import { BaseComponent } from "../base.component";
import { StyleService } from "../../services";

@Component({})
export class BaseHeaderComponent extends BaseComponent implements IHeaderComponent {
    @Input()
    title: string;

    @Input()
    logo: string;

    @Input()
    links: Array<Link>;

    constructor(styleService: StyleService) {
        super(styleService);
    }
}