import { IStudentData } from './student-data';

export interface IAppState {
    readonly classStudents: IStudentData[];
}
