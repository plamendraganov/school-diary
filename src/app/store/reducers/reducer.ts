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
        notes: '' 
    },
    {
        number: 2,
        firstName: 'Bob',
        lastName: 'Wilder',
        age: 15,
        address: 'London',
        phoneNumber: '089348423432',
        notes: '' 
    },
    {
        number: 3,
        firstName: 'Mark',
        lastName: 'Roberts',
        age: 15,
        address: 'London',
        phoneNumber: '089348423432',
        notes: '' 
    },
    {
        number: 4,
        firstName: 'Mike',
        lastName: 'Sanders',
        age: 15,
        address: 'London',
        phoneNumber: '089348423432',
        notes: '' 
    },
    {
        number: 5,
        firstName: 'Robert',
        lastName: 'Franklin',
        age: 15,
        address: 'London',
        phoneNumber: '089348423432',
        notes: '' 
    }
]

function addStudent(state: IStudentData[], student) {
    return [...state, student];
}

function removeStudent(state: IStudentData[], studentToBeRemoved) {
    return [...state.filter(student => student !== studentToBeRemoved)];
}

function editStudent(state: IStudentData[], editedStudent) {
    const studentIndex = state.findIndex(student => student.firstName === editedStudent.firstName
        && student.lastName === editedStudent.lastName)

    if (studentIndex > -1) {
        state.splice(studentIndex, 1, editedStudent);
    } 
    return state;
}

export function studentReducer(state: IStudentData[] = initialState, action: StudentActions.Types) {
    switch(action.type) {
        case StudentActions.ADD_STUDENT:
            return addStudent(state, action.payload);
        case StudentActions.REMOVE_STUDENT:
            return removeStudent(state, action.payload);
        case StudentActions.EDIT_STUDENT:
            return editStudent(state, action.payload);
        default:
            return state;
    }
}



