export interface IMarkup {
    uniqueID: string;
    markupnumber: number;
    type: number;
    subtype: number;
    alternative: number;
    color: string;
    fontname: string;
    linewidth: number;
    linestyle: number;
    text: string;
    textcolor: string;
    strokecolor: string;
    fillcolor: string;
    font: any;
    transparency: number;
    x: number;
    y: number;
    w: number;
    h: number;
    xscaled: number;
    yscaled: number;
    wscaled: number;
    hscaled: number;
    signature: string;
    pagenumber: number;
    layer: string;
    rotatedrect: any;
    selected: boolean;
    AddAttribute: (name: string, value: any) => void;
    GetAttribute: (name: string) => any;
    updateAttribute: (name: string, value: any) => void;
    GetAttributes: () => Array<any>;
    ClearAttributes: () => void;
}
