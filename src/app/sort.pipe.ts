import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './post.model';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(posts:Array<Post>, args:{}): Array<Post> {
  	posts.sort((a: {}, b: {}) => {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    });
    return posts;
  }
}


    
