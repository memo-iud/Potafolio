
import {
  AndroidIcon,
  Css3Icon,
  DockerIcon,
  GitIcon,
  GitHubIcon,
  Html5Icon,
  JavaIcon,
  JavaScriptIcon,
  JiraIcon,
  MongoDbIcon,
  MySqlIcon,
  NodeJsIcon,
  PostgreSqlIcon,
  PythonIcon,
  SpringBootIcon,
  ThymeleafIcon,
  DBeaverIcon,
  WhatsappIcon,
} from "@/components/icons";

export const siteConfig = {
  title: "Guillermo Loaiza Mesa | Desarrollador de Software Java, JavaScript & Python",
  description: "Portafolio de Guillermo Loaiza, desarrollador de software y estudiante de ingeniería. Explora mis proyectos en Java, Python, JavaScript y desarrollo de aplicaciones.",
};

export const navLinks = [
  { href: "#about", label: "Sobre Mí" },
  { href: "#projects", label: "Proyectos" },
  { href: "#skills", label: "Habilidades" },
  { href: "#contact", label: "Contacto" },
];

export const heroSection = {
  title: "Guillermo León Loaiza Mesa",
  subtitle: "Desarrollador de Software | Creando soluciones eficientes con código limpio",
  paragraph: "Transformo ideas en aplicaciones funcionales y escalables. Como tecnólogo y futuro ingeniero de software, mi pasión es resolver problemas complejos a través de la programación en Java, JavaScript y Python.",
  cta_primary: {
    label: "Ver mis proyectos",
    href: "#projects",
  },
  cta_secondary: {
    label: "Contactarme",
    href: "#contact",
  },
};

export const aboutSection = {
  title: "Sobre Mí",
  paragraph: "Soy un apasionado por la tecnología con una sólida formación como Tecnólogo en Desarrollo de Software y Técnico en Mantenimiento de Computadores. Actualmente, estoy ampliando mis horizontes como estudiante de Ingeniería de Software y Datos en la Institución Universitaria Digital de Antioquia. Mi objetivo es simple: utilizar la tecnología para construir herramientas útiles y eficientes. Me encanta el desafío de aprender nuevas tecnologías y aplicarlas en proyectos prácticos, desde el desarrollo backend hasta la creación de aplicaciones móviles.",
  motto: "“La mejor forma de predecir el futuro es creándolo con código.”",
};

export const projectsSection = {
  title: "Algunos de mis proyectos",
  projects: [
    {
      id: "project-1",
      title: "Blog Project",
      description: "Un sistema de blog completamente funcional desarrollado para demostrar habilidades en la creación de aplicaciones web dinámicas. Permite la creación, edición y eliminación de posts, junto con una gestión básica de usuarios.",
      technologies: ["Java", "Spring Boot", "Thymeleaf", "MySQL"],
      githubUrl: "https://github.com/memo-iud",
      demoUrl: null,
    },
    {
      id: "project-2",
      title: "Android Login",
      description: "Prototipo de un sistema de autenticación seguro para aplicaciones Android. Este proyecto explora los fundamentos del desarrollo móvil nativo y la gestión de sesiones de usuario de forma local.",
      technologies: ["Java", "Android SDK", "XML"],
      githubUrl: "https://github.com/memo-iud",
      demoUrl: null,
    },
    {
      id: "project-3",
      title: "Conectores de Bases de Datos",
      description: "Una librería de backend que implementa conectores para diversas bases de datos como PostgreSQL y MongoDB. Ideal para entender la capa de persistencia y la gestión de datos en diferentes entornos.",
      technologies: ["Python", "Psycopg2", "PyMongo"],
      githubUrl: "https://github.com/memo-iud",
      demoUrl: null,
    },
    {
      id: "project-4",
      title: "Retos de Programación",
      description: "Mi repositorio personal donde resuelvo desafíos de lógica y algoritmos. Es una demostración de mi capacidad para resolver problemas y mi compromiso con la mejora continua de mis habilidades de codificación.",
      technologies: ["JavaScript", "Python", "Java"],
      githubUrl: "https://github.com/memo-iud",
      demoUrl: null,
    },
    {
      id: "project-5",
      title: "Funciones JavaScript",
      description: "Una colección de funciones de utilidad en JavaScript puro, enfocadas en ser reutilizables y eficientes. Este proyecto muestra mi dominio de los conceptos fundamentales del lenguaje.",
      technologies: ["JavaScript (ES6+)"],
      githubUrl: "https://github.com/memo-iud",
      demoUrl: null,
    },
  ],
};

export const skillsSection = {
    title: "Mis Habilidades",
    categories: [
        {
            title: "Lenguajes de Programación",
            skills: [
                { name: "Java", icon: JavaIcon },
                { name: "JavaScript", icon: JavaScriptIcon },
                { name: "Python", icon: PythonIcon },
            ],
        },
        {
            title: "Frameworks y Tecnologías",
            skills: [
                { name: "Spring Boot", icon: SpringBootIcon },
                { name: "Node.js", icon: NodeJsIcon },
                { name: "Android SDK", icon: AndroidIcon },
                { name: "HTML5", icon: Html5Icon },
                { name: "CSS3", icon: Css3Icon },
                { name: "Thymeleaf", icon: ThymeleafIcon },
            ],
        },
        {
            title: "Bases de Datos",
            skills: [
                { name: "MySQL", icon: MySqlIcon },
                { name: "PostgreSQL", icon: PostgreSqlIcon },
                { name: "MongoDB", icon: MongoDbIcon },
                { name: "DBeaver", icon: DBeaverIcon },
            ],
        },
        {
            title: "Herramientas y Control de Versiones",
            skills: [
                { name: "Git", icon: GitIcon },
                { name: "GitHub", icon: GitHubIcon },
                { name: "Docker (Básico)", icon: DockerIcon },
            ],
        },
        {
            title: "Metodologías y Herramientas Ágiles",
            skills: [
                { name: "Jira", icon: JiraIcon },
            ],
        },
    ],
};

export const contactSection = {
    title: "¿Hablamos?",
    paragraph: "Estoy buscando oportunidades para colaborar en proyectos innovadores y seguir creciendo como desarrollador. Si tienes una idea, un proyecto, ¡me encantaría saber de ti!",
    email: "gl4552458@gmail.com",
    phone: "321 883 73 00",
    whatsappUrl: "https://wa.me/573218837300",
    youtube: "https://www.youtube.com/@programandoconMemo",
    github: "https://github.com/memo-iud",
    location: "Antioquia, Bello, Colombia",
};