export interface sidebarModel
{
    Buttons: liElement[];
}

export interface liElement
{
    value: string;
    isSelected: boolean;
    isExpanded?: boolean;
    iconPath?: string;
    childs?: liElement[];
}