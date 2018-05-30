import { BaseComponent } from "../base.component";

export interface ISectionComponent {
    type: string;
    components?: Array<BaseComponent>;
}