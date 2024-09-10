import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./landing/landing.component').then((m) => m.LandingComponent),
  },
  {
    path: 'courses',
    loadComponent: () =>
      import('./courses/courses.component').then((m) => m.CoursesComponent),
  },
  {
    path: 'courses/:id',
    loadComponent: () =>
      import('./course-detail/course-detail.component').then(
        (m) => m.CourseDetailComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'contact', // New route for Contact page
    loadComponent: () =>
      import('./contact/contact.component').then((m) => m.ContactComponent),
  },
  {
    path: 'aboute', // Existing route
    loadComponent: () =>
      import('./aboute/aboute.component').then((m) => m.AbouteComponent),
  },
];
