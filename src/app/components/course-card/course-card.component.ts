import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Course } from '../../types';
@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss',
})
export class CourseCardComponent {
  // Inside your component.ts
  // Inside your component, e.g., CoursesComponent
ngOnInit(): void {
  console.log('CoursesComponent initialized');
}

   @Input() course: any;

  courses = [
    {
      id: 1,
      imageUrl: 'assets/images/java-course.jpg',
      title: 'Java Programming',
      description: 'Learn Java from basics to advanced concepts.',
      category: 'Programming',
      videoUrl: 'https://www.youtube.com/watch?v=grEKMHGYyns', // Example YouTube link
    },
    {
      id: 2,
      imageUrl: 'assets/images/c-course.jpg',
      title: 'C Programming',
      description: 'Master C programming for system-level coding.',
      category: 'Programming',
      videoUrl: 'https://www.youtube.com/watch?v=KJgsSFOSQv0', // Example YouTube link
    },
    {
      id: 3,
      imageUrl: 'assets/images/net-course.jpg',
      title: '.NET Framework',
      description: 'Build robust applications using .NET.',
      category: 'Development',
      videoUrl: 'https://www.youtube.com/watch?v=4ysdSYOLEEE', // Example YouTube link
    },
    {
      id: 4,
      imageUrl: 'assets/images/python-course.jpg',
      title: 'Python for Data Science',
      description: 'Explore Python for data analysis and AI.',
      category: 'Data Science',
      videoUrl: 'https://www.youtube.com/watch?v=rfscVS0vtbw', // Example YouTube link
    },
    {
      id: 5,
      imageUrl: 'assets/images/react-course.jpg',
      title: 'React.js Essentials',
      description: 'Create dynamic web apps using React.',
      category: 'Web Development',
      videoUrl: 'https://www.youtube.com/watch?v=w7ejDZ8SWv8', // Example YouTube link
    },
    {
      id: 6,
      imageUrl: 'assets/images/angular-course.jpg',
      title: 'Angular Mastery',
      description: 'Become an expert in Angular development.',
      category: 'Web Development',
      videoUrl: 'https://www.youtube.com/watch?v=3qBXWUpoPHo', // Example YouTube link
    },
  ];

  openVideo(url: string) {
    window.open(url, '_blank');
  }
}


