export interface navbarModel
{
    Buttons: navbarElement[];
}

export interface navbarElement
{
    id: number;
    value: string;
    isSelected: boolean;
}