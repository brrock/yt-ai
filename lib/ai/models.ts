// Define your models here.

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
}

export const models: Array<Model> = [
  {
    id: 'gemini-1.5-flash',
    label: 'normal',
    apiIdentifier: 'gemini-1.5-flash',
    description: 'Small model for fast, lightweight tasks',
  },
  {
    id: 'gemini-1.5-flash',
    label: 'large',
    apiIdentifier: 'gemini-1.5-pro',
    description: 'Large model for slower, heavy tasks',
  },
] as const;

export const DEFAULT_MODEL_NAME: string = 'gemini-1.5-flash';
