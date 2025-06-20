# Gemini Total Course Landing Page

Una landing page moderna y atractiva para el curso completo de Gemini, construida con React, TypeScript y Vite.

## 🚀 Características

- **Diseño moderno y responsivo**
- **Componentes modulares en React**
- **TypeScript para mejor desarrollo**
- **Vite para desarrollo rápido**
- **Secciones informativas del curso**
- **Modal de registro**
- **Sección de recursos**

## 🛠️ Tecnologías utilizadas

- React 19.1.0
- TypeScript 5.7.2
- Vite 6.2.0
- CSS Modules

## 📦 Instalación

### Prerrequisitos
- Node.js (versión 16 o superior)

### Pasos de instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/IndoDiego/gemini-total-course-landing-page.git
   cd gemini-total-course-landing-page
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Configura las variables de entorno (opcional):**
   Crea un archivo `.env.local` y agrega:
   ```
   GEMINI_API_KEY=tu_api_key_aqui
   ```

4. **Ejecuta el proyecto en modo desarrollo:**
   ```bash
   npm run dev
   ```

5. **Abre tu navegador en:**
   ```
   http://localhost:5173
   ```

## 📜 Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye el proyecto para producción
- `npm run preview` - Previsualiza la build de producción

## 🏗️ Estructura del proyecto

```
gemini-total-course-landing-page/
├── components/          # Componentes React
│   ├── CourseInfoBar.tsx
│   ├── DojoModal.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ModuleItem.tsx
│   ├── ModulesSection.tsx
│   ├── ProjectSection.tsx
│   ├── RegistrationModal.tsx
│   ├── ResourceCard.tsx
│   └── ResourcesSection.tsx
├── App.tsx             # Componente principal
├── index.html          # HTML base
├── index.tsx           # Punto de entrada
├── package.json        # Dependencias y scripts
├── tsconfig.json       # Configuración de TypeScript
├── vite.config.ts      # Configuración de Vite
└── README.md           # Este archivo
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**IndoDiego**
- GitHub: [@IndoDiego](https://github.com/IndoDiego)

## 🙏 Agradecimientos

- React Team por el framework
- Vite por la herramienta de build
- TypeScript por el tipado estático
