# 🚀 Portafolio Personal – Firebase Studio

Este proyecto es un portafolio profesional construido con **Next.js**, **TypeScript**, **Tailwind CSS** y desplegado en **Firebase Hosting**. Está diseñado para ser rápido, accesible y fácil de mantener.

## 📁 Estructura del Proyecto

- `src/app/page.tsx`: Página principal del portafolio
- `next.config.ts`: Configuración de exportación estática y orígenes permitidos
- `public/`: Recursos estáticos como imágenes y favicon
- `firebase.json`: Configuración de despliegue en Firebase Hosting

## 🛠️ Tecnologías Usadas

- [Next.js](https://nextjs.org/) con `output: 'export'`
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Firebase Hosting](https://firebase.google.com/)
- [Genkit](https://github.com/google/genkit) (para experimentación con AI local)

## 📦 Instalación

```bash
git clone https://github.com/memo-iud/Potafolio.git
cd Potafolio
npm install
npm run dev         # Ejecuta el servidor local en el puerto 9002
npm run build       # Compila el proyecto (usa cross-env para compatibilidad en Windows)
npm run export      # Genera la carpeta 'out/' para despliegue estático
npm run lint        # Ejecuta ESLint
npm run typecheck   # Verifica errores de TypeScript


