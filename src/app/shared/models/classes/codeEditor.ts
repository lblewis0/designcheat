import { Injectable } from '@angular/core';
import { codeInputLine } from '../classes/codeEditor-sample';
import { codeInputDataSample } from '../classes/codeEditor-sample';

@Injectable({
    providedIn: 'root',
})
export class codeEditor {

    public Col!: number;
    public Ln!: number;
    public Input!: string | number | null;
    public InputKey!: string | undefined;
    public Lines!: codeInputLine[];
    public LineLeftSubstring!: string | null;
    public LineRightSubstring!: string | null;
    
    constructor() {
        this.Input = null;
        this.Col = 0;
        this.Ln = 0;
        this.Lines = codeInputDataSample;
    }

    activeLine() : codeInputLine | undefined
    {
        if(this.Lines)
        {
            if(this.Lines.length > 0)
            {
                return this.Lines[this.Ln]
            }
            else
            {
                return undefined;
            }
        }
        else
        {
            return undefined;
        }  
    }

    onInputChange() : void
    {

    }




}