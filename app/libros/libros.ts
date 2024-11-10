// src/libros.ts
import { createClient } from '@supabase/supabase-js';

// Supabase Client Initialization
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

// Función para enviar el libro a la base de datos
export const enviarLibro = async (titulo: string, autor: string, imagen: File | null, genero: string, cantidad: number) => {
  if (!titulo || !autor || !genero || !cantidad) {
    return alert('Por favor complete todos los campos.');
  }

  // Subir la imagen a Supabase Storage si existe
  let imagenUrl = '';
  if (imagen) {
    const { data, error } = await supabase.storage
      .from('libros')
      .upload(`imagenes/${imagen.name}`, imagen);
    if (error) {
      alert('Error al subir la imagen');
      return;
    }
    imagenUrl = data?.path || '';
  }

  // Insertar el libro en la tabla 'libros'
  const { error } = await supabase
    .from('libros')
    .insert([
      {
        titulo,
        autor,
        imagen_url: imagenUrl,
        genero,
        cantidad,
      },
    ]);

  if (error) {
    alert('Error al agregar el libro a la base de datos');
    return;
  }

  alert('Libro agregado con éxito');
  return true;
};

// Función para obtener los libros de la base de datos
export const obtenerLibros = async () => {
  const { data, error } = await supabase.from('libros').select('*');
  if (error) {
    alert('Error al obtener los libros');
    return [];
  }
  return data;
};
