import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skillGroups = [
    {
      icon: '⚡',
      title: 'Angular Ecosystem',
      skills: [
        { name: 'Angular', version: 'v13–21', primary: true },
        { name: 'TypeScript', primary: true },
        { name: 'RxJS', primary: true },
        { name: 'NgRx', primary: true },
        { name: 'Angular Material', primary: false },
        { name: 'Native Federation', primary: false },
        { name: 'Ionic', primary: false },
        { name: 'Angular CDK', primary: false },
      ],
    },
    {
      icon: '🤖',
      title: 'AI & Python',
      skills: [
        { name: 'Claude API', primary: true },
        { name: 'Anthropic SDK', primary: true },
        { name: 'Python', primary: true },
        { name: 'Tool Use', primary: false },
        { name: 'Prompt Caching', primary: false },
        { name: 'Agentic AI', primary: false },
      ],
    },
    {
      icon: '🧪',
      title: 'Testing',
      skills: [
        { name: 'Jest', primary: true },
        { name: 'Cypress', primary: true },
        { name: 'Jasmine', primary: false },
        { name: 'Karma', primary: false },
        { name: 'Vitest', primary: false },
      ],
    },
    {
      icon: '⚙️',
      title: 'Backend & Tools',
      skills: [
        { name: 'Spring Boot', primary: true },
        { name: 'REST APIs', primary: true },
        { name: 'Git', primary: false },
        { name: 'Jenkins', primary: false },
        { name: 'Azure AD', primary: false },
        { name: 'Firebase', primary: false },
      ],
    },
    {
      icon: '🎨',
      title: 'Frontend Fundamentals',
      skills: [
        { name: 'HTML5', primary: true },
        { name: 'CSS3 / SCSS', primary: true },
        { name: 'Responsive Design', primary: false },
        { name: 'Angular Animations', primary: false },
        { name: 'Angular Signals', primary: false },
      ],
    },
    {
      icon: '📐',
      title: 'Architecture & Patterns',
      skills: [
        { name: 'Micro-frontends', primary: true },
        { name: 'Standalone Components', primary: true },
        { name: 'Facade Pattern', primary: false },
        { name: 'OnPush Strategy', primary: false },
        { name: 'Lazy Loading', primary: false },
        { name: 'RBAC', primary: false },
      ],
    },
  ];

  proficiencies = [
    { name: 'Angular', level: 90, color: 'linear-gradient(90deg, #38bdf8, #a78bfa)' },
    { name: 'TypeScript', level: 88, color: 'linear-gradient(90deg, #38bdf8, #0ea5e9)' },
    { name: 'RxJS / NgRx', level: 80, color: 'linear-gradient(90deg, #a78bfa, #8b5cf6)' },
    { name: 'Claude API / Python', level: 40, color: 'linear-gradient(90deg, #a78bfa, #ec4899)' },
    { name: 'Spring Boot', level: 50, color: 'linear-gradient(90deg, #4ade80, #22c55e)' },
    { name: 'Jest / Cypress', level: 78, color: 'linear-gradient(90deg, #fb923c, #f97316)' },
  ];
}
