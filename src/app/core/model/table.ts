export interface Table {
  [key: string]: TableItem;
}

export interface TableItem { team: string; points: number; scored: number; conceeded: number; }
