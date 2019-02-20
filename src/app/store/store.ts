import { IStudentData } from './models/student-data';

export interface IAppState {
    readonly classStudents: IStudentData[];
}
