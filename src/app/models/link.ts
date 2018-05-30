export class Link {
    label: string;
    url?: string;
    title: string;
    links: Array<Link>;
    internal: boolean;
}