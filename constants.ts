import { Module, Resource, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { href: "#modules", label: "Módulos" },
  { href: "#project", label: "Proyecto Final" },
  { href: "#resources", label: "Recursos" },
  { href: "#aprende-jugando", label: "Aprende Jugando" }, 
];

export const COURSE_MODULES: Module[] = [
  {
    id: "module1",
    title: "Módulo 1: Fundamentos de Gemini y la IA Generativa",
    durationInfo: "1.5 horas - Entenderás qué es la IA Generativa y darás tus primeros pasos.",
    contentPoints: [
      "<strong>1.1: La Revolución de la IA Generativa:</strong> El camino de Google hasta Gemini y el concepto de multimodalidad.",
      "<strong>1.2: La Familia Gemini:</strong> Tabla comparativa de Ultra, Pro y Nano.",
      "<strong>1.3: Recorrido Guiado por la Interfaz:</strong> Ejercicio práctico en gemini.google.com.",
      "<strong>1.4: La Multimodalidad en Acción:</strong> Demo guiada con imágenes y audio.",
      "<strong>Quiz del Módulo 1:</strong> 5 preguntas de opción múltiple."
    ]
  },
  {
    id: "module2",
    title: "Módulo 2: El Arte y la Ciencia del Prompting",
    durationInfo: "2.5 horas - Conviértete en un \"maestro del prompt\".",
    contentPoints: [
      "<strong>2.1: Principios Fundamentales:</strong> Los 4 pilares: Persona, Tarea, Contexto y Formato.",
      "<strong>2.2: Técnicas Avanzadas:</strong> Zero-Shot, Few-Shot, Cadena de Pensamiento e Instrucciones Negativas.",
      "<strong>2.3: Ejercicios Prácticos:</strong> Compara respuestas, cambia formatos y da ejemplos.",
      "<strong>2.4: Taller de Creación de Prompts Multimodales:</strong> Analiza gráficos y combina texto e imagen.",
      "<strong>Quiz del Módulo 2:</strong> 5 preguntas para evaluar las técnicas."
    ]
  },
  {
    id: "module3",
    title: "Módulo 3: Gemini para la Productividad y el Trabajo",
    durationInfo: "2.5 horas - Aplica tus habilidades en escenarios del mundo real.",
    contentPoints: [
      "<strong>3.1: Gestión de Correo y Comunicaciones:</strong> Redacta correos, responde quejas y crea plantillas.",
      "<strong>3.2: Gemini como Asistente de Investigación:</strong> Resume artículos, extrae puntos clave de PDFs.",
      "<strong>3.3: Ideación y Brainstorming:</strong> Genera nombres, ideas para blogs/videos y estructuras de informes.",
      "<strong>3.4: Análisis Básico de Datos:</strong> Analiza tablas de datos y crea contenido a partir de ellos.",
      "<strong>Quiz del Módulo 3:</strong> 5 preguntas basadas en escenarios prácticos."
    ]
  },
  {
    id: "module4",
    title: "Módulo 4: Gemini para la Creatividad y la Creación de Contenido",
    durationInfo: "2.5 horas - Libera tu lado más creativo.",
    contentPoints: [
      "<strong>4.1: Escritura Creativa Asistida por IA:</strong> Escribe poemas, historias y diálogos.",
      "<strong>4.2: Creación de Imágenes con IA:</strong> Aprende a traducir ideas en prompts visuales efectivos.",
      "<strong>4.3: Creación de Contenido para Redes Sociales:</strong> Flujo de trabajo completo desde la idea hasta la imagen.",
      "<strong>4.4: Ética y Responsabilidad:</strong> Discusión sobre originalidad, sesgos y desinformación.",
      "<strong>Quiz del Módulo 4:</strong> 5 preguntas sobre aplicación creativa y ética."
    ]
  },
  {
    id: "module5",
    title: "Módulo 5: Proyecto Final y Siguientes Pasos",
    durationInfo: "1 hora - Consolida todo lo aprendido y mira hacia el futuro.",
    contentPoints: [
      "<strong>5.1: Instrucciones para el Proyecto Final:</strong> Lanzamiento de una mini-campaña para un producto ficticio.",
      "<strong>5.2: Taller de Trabajo y Autoevaluación:</strong> Tiempo para trabajar en el proyecto con soporte.",
      "<strong>5.3: El Futuro es Multimodal:</strong> Exploración del ecosistema de IA de Google y recursos adicionales.",
      "<strong>5.4: Cierre del Curso y Certificación:</strong> Felicitaciones y entrega de certificado."
    ]
  }
];

export const COURSE_RESOURCES: Resource[] = [
  {
    id: "aprende-jugando-card", // Unique ID for this card
    title: "Aprende Jugando: El Dojo del Prompting 🥋",
    description: "Pon a prueba tus habilidades de prompting en desafíos interactivos y gana puntos Ki.",
    actionType: "openDojoModal" // Special type to identify this card
  },
  {
    id: "resource1",
    title: "Glosario de Términos de IA",
    description: "Un documento PDF con definiciones claras de conceptos clave como Prompt, Multimodal, LLM, etc."
  },
  {
    id: "resource2",
    title: "Librería de Prompts",
    description: "Una página con ejemplos de prompts efectivos que puedes copiar y adaptar para tus propios proyectos."
  },
  {
    id: "resource3",
    title: "Comunidad del Curso",
    description: "Acceso a un foro o grupo exclusivo para compartir creaciones, hacer preguntas y colaborar con otros alumnos."
  }
];

export const COURSE_INFO_ITEMS = [
    { value: "10", label: "Horas Totales" },
    { value: "5", label: "Módulos" },
    { value: "100%", label: "Práctico" },
    { value: "Nivel", label: "Principiante Digital" },
];