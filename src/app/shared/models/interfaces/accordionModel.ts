export interface AccordionsModel
{
    Accordions: AccordionModel[];
}

export interface AccordionModel
{
    value: string;
    isSelected: boolean;
    isExpanding: boolean;
    isContracting: boolean;
    isExpanded?: boolean;
    iconPath?: string;
}


