import { AbstractControl, ValidatorFn } from "@angular/forms";

export class NotEmptyValidator {
    static empty(): ValidatorFn {
        return (c: AbstractControl): { [key: string]: boolean } | null => {
            if ((!c.value) || c.value.trim() === '') {
                return { 'empty': true };
            }
            return null;
        }
    }
}