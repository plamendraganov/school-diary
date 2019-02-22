import { Action } from '@ngrx/store';
import { IStudentData } from '../models/student-data';
 
// export enum ActionTypes {
//   ADD_STUDENT = '[Student] Add',
//   REMOVE_STUDENT = '[Student] Remove',
//   Reset = '[Students] Reset',
// }

export const ADD_STUDENT = '[STUDENT] Add';
export const REMOVE_STUDENT = '[STUDENT] Remove';
export const EDIT_STUDENT = '[STUDENT] Edit';

export class AddStudent implements Action {
    readonly type: string = ADD_STUDENT;

    constructor(public payload: IStudentData) { }
}

export class RemoveStudent implements Action {
    readonly type: string = REMOVE_STUDENT;
      
    constructor(public payload: IStudentData) { }
}

export class EditStudent implements Action {
    readonly type: string = EDIT_STUDENT;

    constructor(public payload: IStudentData) { }
}

export type Types = AddStudent | RemoveStudent | EditStudent;
