import { Pipe,PipeTransform, } from '@angular/core'

@Pipe({name:'sortNum'})
export class SortNum implements PipeTransform{
    transform(value:any[],args:string):any{
        console.log('sorting');
        if(args ==='ascending'){
            return value.sort()
        }
        else if(args ==='descending'){
            return value.sort().reverse()
        }
    }
}

