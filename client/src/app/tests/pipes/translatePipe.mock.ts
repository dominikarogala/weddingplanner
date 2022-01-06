import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'translate',
})
export class TranslateMockPipe implements PipeTransform {
    name = 'translate';

    transform(value: string): string {
        return value;
    }
}
