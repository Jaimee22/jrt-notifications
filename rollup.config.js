import css from 'rollup-plugin-css-only'; // Plugin para manejar CSS
import { terser } from 'rollup-plugin-terser'; // Plugin para minificar

export default {
  input: 'src/index.js', // Punto de entrada de la librería
  output: [
    {
      file: 'dist/jrt-notifications.js', // Salida UMD
      format: 'umd',
      name: 'JRTNotifications', // Nombre de la librería (global para navegador)
    },
    {
      file: 'dist/jrt-notifications.esm.js', // Salida ESModule
      format: 'es',
    },
  ],
  plugins: [
    css({ output: 'dist/styles.css' }), // Extrae el CSS
    terser(), // Minifica el código
  ],
};
