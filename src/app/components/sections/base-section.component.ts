import { Component, Input } from "@angular/core";
import { BaseComponent } from "../base.component";
import { ISectionComponent } from "./isection.component";
import { StyleService } from "../../services";

@Component({})
export class BaseSectionComponent extends BaseComponent implements ISectionComponent {
    @Input()
    type: string;

    @Input()
    sections: Array<ISectionComponent>;

    constructor(styleService: StyleService) {
        super(styleService);
    }
}