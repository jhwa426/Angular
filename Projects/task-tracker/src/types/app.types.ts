export type Color = 'red' | 'green';

export interface Task {
  id?: number;
  text: string;
  day: string;
  reminder: boolean;
}
