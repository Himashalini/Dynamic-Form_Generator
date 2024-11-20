export interface Field {
  label: string;
  type: string;
  name: string;
  required?: boolean;
}

export interface Schema {
  fields: Field[];
}
