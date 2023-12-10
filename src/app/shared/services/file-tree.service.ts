import { Injectable } from '@angular/core';
import { fileTreeModel } from '../models/interfaces/fileTreeModel';

@Injectable({
  providedIn: 'root'
})
export class FileTreeService {

  rootFolderPath: string;
  blob!: Blob;
  model!: fileTreeModel;

  constructor() {
    this.rootFolderPath = "C:/Users/Louis Boeckmans/Desktop/Visual Studio Code/DesignCheat - Copie";
  }

  onInit() : void
  {
      this.loadModel();
  }

  loadModel() : void
  {

  }




  
   
}
