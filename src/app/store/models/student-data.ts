export interface INotes {
  note: string
}

export interface IStudentData {
    number: number,
    firstName: string,
    lastName: string,
    age: number,
    address: string,
    phoneNumber: string,
    notes?: INotes[]
}
