export interface Tarea {
  id: string;
  titulo: string;
}

export interface Subtarea {
  id: string;
  titulo: string;
  descripcion: string;
}

export interface DetalleSubtarea {
  descripcion: string;
  estado: 'completa' | 'pendiente';
}

export const tareas: Tarea[] = [
  { id: '1', titulo: 'Ir al super' },
  { id: '2', titulo: 'Hacer los trabajos practicos pendientes' },
];

export const subtareasPorTarea: Record<string, Subtarea[]> = {
  '1': [
    { id: '1-1', titulo: 'Comprar leche', descripcion: '4 unidades de leche descremada de 1L' },
    { id: '1-2', titulo: 'Comprar verudras', descripcion: '1/2kg de papa y de cebolla' },
  ],
  '2': [
    { id: '2-1', titulo: 'Materia Big Data', descripcion: 'Realizar el trabajo integrador antes del 10/06' },
    { id: '2-2', titulo: 'Materia React Native', descripcion: 'Completar la pagina con las tareas' },
  ],
};

export const detallesSubtareas: Record<string, DetalleSubtarea> = {
  '1-1': { descripcion: '4 unidades de leche descremada de 1L', estado: 'completa' },
  '1-2': { descripcion: '1/2kg de papa y de cebolla', estado: 'pendiente' },
  '2-1': { descripcion: 'Realizar el trabajo integrador antes del 10/06', estado: 'pendiente' },
  '2-2': { descripcion: 'Completar la pagina con las tareas', estado: 'completa' },
};
