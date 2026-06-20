import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  jobs = [
    {
      company: 'Accenture',
      title: 'Angular Developer — Synops 2.0',
      period: 'Current Project',
      type: 'Internal Platform',
      current: true,
      confidential: false,
      description:
        'Enterprise employee service platform built with Angular micro-frontend architecture. Features dynamic dashboards, activity tracking, and role-based views with Azure AD integration.',
      achievements: [
        'Developed Employee Service micro-frontend with independent deployment using Native Federation',
        'Built role-based dashboards and employee tracking features with REST API integration',
        'Implemented Azure AD authentication and authorization flows',
        'Developed features with unit tests maintaining high code coverage',
      ],
      tech: [
        'Angular 21',
        'TypeScript',
        'Native Federation',
        'Angular Material',
        'RxJS',
        'Azure AD',
        'REST APIs',
      ],
    },
    {
      company: 'Accenture',
      title: 'Angular & Spring Boot Developer — Ross Stores',
      period: 'Previous Project',
      type: 'Client Confidential · Retail',
      current: false,
      confidential: true,
      description:
        'Large-scale retail application displaying products, calculating costs and discounts, and managing order placement with role-based access control.',
      achievements: [
        'Built dynamic grid and form-based UI components using Angular Reactive Forms',
        'Optimized API call handling to prevent redundant backend requests using RxJS operators',
        'Improved performance while handling large datasets in grids via virtual scrolling',
        'Enhanced change detection by moving heavy logic out of templates',
        'Applied TypeScript strict mode across the codebase to reduce runtime errors',
        'Improved test coverage using Jest unit tests and Cypress E2E tests',
        'Worked on Spring Boot backend — fixed bugs, resolved defects, and supported production issues',
      ],
      tech: ['Angular 17', 'TypeScript', 'RxJS', 'Jest', 'Cypress', 'Spring Boot', 'HTML', 'CSS'],
    },
    {
      company: 'Accenture',
      title: 'Associate Developer — CN Railway',
      period: 'Previous Project',
      type: 'Client Confidential · Transport',
      current: false,
      confidential: true,
      description:
        'Transport-based application tracking railway cars in real time across different role-based users, updating arrival and departure times.',
      achievements: [
        'Developed role-based views for real-time car tracking across the railway network',
        'Built responsive mobile interface using Ionic framework',
        'Wrote unit tests using Jasmine and Karma for component coverage',
        'Handled requirement analysis and work estimation for feature development',
      ],
      tech: ['Angular 13', 'TypeScript', 'Ionic', 'RxJS', 'Jasmine', 'Karma', 'HTML', 'CSS'],
    },
  ];
}
