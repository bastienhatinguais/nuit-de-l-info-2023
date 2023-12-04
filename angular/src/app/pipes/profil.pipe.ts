import { Pipe, PipeTransform } from '@angular/core';
import { User } from '@models/user.model';

@Pipe({
  name: 'profil',
  standalone: true
})
export class ProfilPipe implements PipeTransform {

  transform(value: User | null, ...args: unknown[]): unknown {
    if (value)
      return `Nom: ${value.name} - Email: ${value.email}`;
    return "-"
  }

}
