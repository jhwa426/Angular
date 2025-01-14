import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'truncateName',
  standalone: true,
})
export class TruncateNamePipe implements PipeTransform {
  // Used to truncate a string to a certain length
  transform(
    value: string | null | undefined,
    maxLength: number = 16,
    ellipsis: string = '...'
  ): string {
    if (!value) {
      return ''; // Return an empty string for undefined/null
    }
    return value.length > maxLength
      ? value.slice(0, maxLength) + ellipsis
      : value;
  }
}
