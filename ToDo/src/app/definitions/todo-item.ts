import * as luxon from 'luxon';

export default interface ToDoItem {
    text: string;
    completed: boolean;
    addedAt: number;
}