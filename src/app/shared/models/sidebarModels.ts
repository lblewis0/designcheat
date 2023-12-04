export interface sidebarUlModel
{
    Buttons: liElement[];
}

export interface liElement
{
    value: string;
    route?: string;
    isSelected: boolean;
    isExpanding: boolean;
    isContracting: boolean;
    isExpanded?: boolean;
    iconPath?: string;
    childs?: liElement[];
}

export interface sidebarButtonsModel
{
    Buttons: sidebarButton[];
}

export interface sidebarButton
{
    value: string;
    route?: string;
    isSelected: boolean;
    iconPath?: string;
}