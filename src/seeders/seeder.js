const db = require('../utils/database');
const Users = require('../models/users.models');
const Courses = require('../models/courses.models');
const Categories = require('../models/categories.models');
const Videos = require('../models/videos.models');
const UsersCourses = require('../models/usersCourses.models');
const CoursesCategories = require('../models/coursesCategories.models');

const users = [
  { firstName: 'José de Jesús', lastName: 'Tejero Zapata', email: 'jose@email.com', password: '1234', },
  { firstName: 'Sandy Nikioli', lastName: 'Pérez Jiménez', email: 'sandy@email.com', password: '1234', },
  { firstName: 'Héctor Roberto', lastName: 'Tejero Pérez', email: 'hector@email.com', password: '1234', },
];

const courses = [
  { title: 'NodeJS', description: 'Aprender base de datos en NodeJS', instructor: 'Ian Rosas' },
  { title: 'Diseño gráfico', description: 'Aprender diseño gráfico en Udemy', instructor: 'Trino' },
  { title: 'A bailar', description: 'Aprender a bailar con Tugo', instructor: 'Tugo' },
];

const categories = [
  { name: 'Programación' },
  { name: 'Tecnología' },
  { name: 'Diseño' },
  { name: 'Preparación personal' },
  { name: 'Motriz' },
];

const videos = [
  { title: 'Node y NPM', url: 'https://us02web.zoom.us/rec/share/B_DGqwo9hZ3zYPF78IPlrcZbTOf-2RY5iCSJGFN28mHl00dArREFUY6J-YICVNQN.03B-O1pNb5d8Yxrv', courseId: 1, },
  { title: 'ACLARACIONES Anuncio Curso de Diseño Gráfico GRATIS', url: 'https://www.youtube.com/watch?v=X_fO9euZZgE&list=PLHOYuNSVc0nQL16H44EQCTtzsooglESQX&ab_channel=Trino', courseId: 2, },
  { title: '¿QUÉ ES y para qué SIRVE el DISEÑO GRÁFICO? Curso de Diseño Gráfico GRATIS - Video #1', url: 'https://www.youtube.com/watch?v=7mgxFa-3T0Q&list=PLHOYuNSVc0nQL16H44EQCTtzsooglESQX&index=2&ab_channel=Trino', courseId: 2, },
  { title: 'Canción 🎵 VIAJAR A ÁFRICA 🎵 | Canciones infantiles de NENE LEÓN', url: 'https://www.youtube.com/watch?v=au1i7gMZvpM&ab_channel=NeneLe%C3%B3n%2Ccancionesinfantiles', courseId: 3, },
  { title: 'RUGIR, RUGIR para ser feliz | Canción Para No Tener Miedo (Viajar a África 2)', url: 'https://www.youtube.com/watch?v=SfkqJtjQwGY&ab_channel=NeneLe%C3%B3n%2Ccancionesinfantiles', courseId: 3, },
  { title: 'Vídeo para hacer reír a bebés y niños pequeños - Tótem', url: 'https://www.youtube.com/watch?v=axzafznE4tg&ab_channel=NeneLe%C3%B3n%2Ccancionesinfantiles', courseId: 3, },
];

const usersCourses = [
  { userId: 1, courseId: 1, review: 'Not available', },
  { userId: 2, courseId: 2, review: 'Not available', },
  { userId: 3, courseId: 3, review: 'Not available', },
];

const coursesCategories = [
  { courseId: 1, categoryId: 1, },
  { courseId: 1, categoryId: 2, },
  { courseId: 1, categoryId: 4, },
  { courseId: 2, categoryId: 2, },
  { courseId: 2, categoryId: 3, },
  { courseId: 2, categoryId: 4, },
  { courseId: 3, categoryId: 4, },
  { courseId: 3, categoryId: 5, },
];

db.sync({ force: true }).then(async () => {
  console.log('Iniciando plantación...');

  users.forEach((user) => Users.create(user));
  setTimeout(() => {
    courses.forEach((course) => Courses.create(course));
  }, 200);
  setTimeout(() => {
    categories.forEach((category) => Categories.create(category));
  }, 200);
  setTimeout(() => {
    videos.forEach((video) => Videos.create(video));
  }, 200);
  setTimeout(() => {
    usersCourses.forEach((uc) => UsersCourses.create(uc));
  }, 200);
  setTimeout(() => {
    coursesCategories.forEach((cc) => CoursesCategories.create(cc));
  }, 200);
});