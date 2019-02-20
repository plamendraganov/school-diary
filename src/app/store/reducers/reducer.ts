import { IStudentData } from '../models/student-data';

import * as StudentActions from '../actions/actions';

const initialState: IStudentData[] = [
    {
        number: 1,
        firstName: 'Anthony',
        lastName: 'Joshua',
        age: 15,
        address: 'London',
        phoneNumber: '089348423432',
        photoUrl: '' 
    },
    {
        number: 1,
        firstName: 'Bob',
        lastName: 'Wilder',
        age: 15,
        address: 'London',
        phoneNumber: '089348423432',
        photoUrl: '' 
    },
    // {
    //     number: 1,
    //     firstName: 'Mark',
    //     lastName: 'Roberts',
    //     age: 15,
    //     address: 'London',
    //     phoneNumber: '089348423432',
    //     photoUrl: '' 
    // },
    // {
    //     number: 1,
    //     firstName: 'Mike',
    //     lastName: 'Sanders',
    //     age: 15,
    //     address: 'London',
    //     phoneNumber: '089348423432',
    //     photoUrl: '' 
    // },
    // {
    //     number: 1,
    //     firstName: 'Robert',
    //     lastName: 'Franklin',
    //     age: 15,
    //     address: 'London',
    //     phoneNumber: '089348423432',
    //     photoUrl: '' 
    // }
]

function addStudent(state: IStudentData[], student) {
    return [...state, student];
}

export function studentReducer(state: IStudentData[] = initialState, action: StudentActions.Types) {
    switch(action.type) {
        case StudentActions.ADD_STUDENT:
            return addStudent(state, action.payload);
        case StudentActions.REMOVE_STUDENT:
            return [];
        default:
            return state;
    }
}



