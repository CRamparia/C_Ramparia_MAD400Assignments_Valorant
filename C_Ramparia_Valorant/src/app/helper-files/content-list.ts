import { Content } from "./content-interface";


 export class ContentList {
    private count = 0;  
    
    private listOfContent: Content[];

    constructor(){
        this.listOfContent = [];
    }

    get contentVal() {
        return this.listOfContent;
    }
    
    addContent(valAdd: Content){
        this.contentVal.push(valAdd);
    }

    numberOfItem(){
        return this.listOfContent.length;
    }

    takeInput(i:number){
        return `<h1>${this.listOfContent[i].title}</h1><p> description \: ${this.listOfContent[i].description}</p><p>${this.listOfContent[i].creator}</p><img src=${this.listOfContent[i].imgURL}></img><p>${this.listOfContent[i].type}</p>`
    }

}