export interface codeInputModel
{
    Ln: number,
    Col: number,
    Input: string | number,
    Lines: codeInputLine[]
}

export interface codeInputLine
{
    fullLine?: string,
    Blocks: codeInputBlock[]
}

export interface codeInputBlock
{
    startCol: number,
    length: number,
    endCol: number,
    value: string | number
}