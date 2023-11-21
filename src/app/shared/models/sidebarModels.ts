export interface sidebarModel
{
    Buttons: liElement[];
}

export interface liElement
{
    value: string;
    isSelected: boolean;
    childs? : liElement[];
}