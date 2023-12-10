import { liElement } from "../sidebarModels";

export interface fileTreeModel
{
    Element: treeElement[];

}

export interface treeElement
{
    path: string;
    iconPath: string;
    type: string;
    isSelected: boolean;
    isExpanding: boolean;
    isContracting: boolean;
    isExpanded?: boolean;
    childs?: treeElement[];
}

let test : treeElement = {
    path: '',
    iconPath: '',
    type: 'file',
    isSelected: false,
    isExpanding: false,
    isContracting: false,
    isExpanded: false
}