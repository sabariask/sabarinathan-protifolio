import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects = [
    {
      name: 'Zara — Agentic Productivity Assistant',
      type: 'Personal Project · AI Engineering',
      description:
        'An agentic chatbot built with the Anthropic Claude API featuring tool use, multi-step autonomous reasoning, and prompt caching. Built as hands-on preparation for the Anthropic Certified Architect exam.',
      highlights: [
        'Implemented Claude tool use with save_task, get_tasks, complete_task functions',
        'Built autonomous agent loop with multi-step goal execution and runaway prevention',
        'Applied prompt caching for cost optimization on repeated context',
        'Persistent task storage with full CRUD via natural language',
      ],
      tags: ['Python', 'Claude API', 'Tool Use', 'Agentic AI', 'Prompt Caching'],
      github: 'https://github.com/sabariask/zara_chatbot',
      live: null,
      icon: '🤖',
      iconBg: 'rgba(167,139,250,0.15)',
      accent: 'linear-gradient(90deg, #a78bfa, #38bdf8)',
      featured: true,
    },
    {
      name: 'Synops 2.0 — Enterprise Platform',
      type: 'Accenture · Internal Project',
      description:
        'Enterprise employee service platform with Angular micro-frontend architecture. Features dynamic dashboards, activity tracking, and role-based views with Azure AD integration.',
      highlights: [
        'Micro-frontend with Native Federation for independent deployment',
        'Role-based dashboards with Azure AD authentication',
        'Employee tracking features with REST API integration',
        'Angular 21 standalone components architecture',
      ],
      tags: ['Angular 21', 'Native Federation', 'Azure AD', 'Angular Material', 'RxJS'],
      github: null,
      live: null,
      icon: '🏢',
      iconBg: 'rgba(56,189,248,0.15)',
      accent: 'linear-gradient(90deg, #38bdf8, #4ade80)',
      featured: true,
    },
    {
      name: 'Ross Stores — Retail Platform',
      type: 'Accenture · Client Confidential',
      description:
        'Large-scale retail application with product display, cost/discount calculation, and role-based order management. Heavy focus on performance and code quality.',
      highlights: [
        'Dynamic grid and form UI with Angular Reactive Forms',
        'RxJS optimization preventing redundant API calls',
        'Performance improvements on large dataset grids',
        'Spring Boot bug fixes and production support',
      ],
      tags: ['Angular 17', 'RxJS', 'Jest', 'Cypress', 'Spring Boot'],
      github: null,
      live: null,
      icon: '🛍️',
      iconBg: 'rgba(251,146,60,0.15)',
      accent: 'linear-gradient(90deg, #fb923c, #f43f5e)',
      featured: false,
    },
    {
      name: 'CN Railway — Transport Tracker',
      type: 'Accenture · Client Confidential',
      description:
        'Real-time transport application tracking railway cars across role-based users, updating arrival and departure times with mobile support via Ionic.',
      highlights: [
        'Real-time car tracking with role-based access',
        'Mobile-ready interface built with Ionic framework',
        'Unit tests with Jasmine and Karma',
        'Requirement analysis and work estimation',
      ],
      tags: ['Angular 13', 'Ionic', 'RxJS', 'Jasmine', 'Karma'],
      github: null,
      live: null,
      icon: '🚂',
      iconBg: 'rgba(74,222,128,0.15)',
      accent: 'linear-gradient(90deg, #4ade80, #06b6d4)',
      featured: false,
    },
    {
      name: 'Company Portal — Employee Management System',
      type: 'Personal Project · Full Stack',
      description:
        'Comprehensive Angular 21 web app for managing employees, departments, projects and tasks with role-based access control, admin dashboard, and HTTP interceptors.',
      highlights: [
        'Employee, department, project and task CRUD with Angular Material',
        'Role-based access control with auth guards and route protection',
        'HTTP interceptors for token management and error handling',
        'Reactive state management with RxJS and Angular CDK',
      ],
      tags: ['Angular 21', 'Spring Boot', 'Angular Material', 'RxJS', 'RBAC', 'SCSS'],
      github: 'https://github.com/sabariask/company_portal_ui',
      live: null,
      icon: '🏗️',
      iconBg: 'rgba(56,189,248,0.15)',
      accent: 'linear-gradient(90deg, #38bdf8, #a78bfa)',
      featured: true,
    },
    {
      name: 'NgRx Masterclass — State Management',
      type: 'Personal Project · Learning & Reference',
      description:
        'Advanced NgRx patterns reference app covering Store, Effects, ComponentStore, Facade pattern, Angular Signals, Router integration, and authentication flows.',
      highlights: [
        'Todos, Notes, Counter features with full NgRx Store + Effects',
        'Facade pattern implementation for simplified component access',
        'Angular Signals integration alongside traditional NgRx',
        'ComponentStore for local state, auth guards, HTTP interceptors',
      ],
      tags: ['Angular 21', 'NgRx', 'RxJS', 'Signals', 'TypeScript', 'Vitest'],
      github: 'https://github.com/sabariask/ngrx-masterclass',
      live: null,
      icon: '⚡',
      iconBg: 'rgba(167,139,250,0.15)',
      accent: 'linear-gradient(90deg, #a78bfa, #f43f5e)',
      featured: true,
    },
    {
      name: 'Company Portal — Backend API',
      type: 'Personal Project · Backend',
      description:
        'Spring Boot REST API backend for the Company Portal, handling employee management, authentication, role-based authorization, and department/project data.',
      highlights: [
        'RESTful APIs for employees, departments, projects and tasks',
        'Spring Security with role-based authorization',
        'JWT authentication and session management',
        'Integrated with Angular frontend via HTTP services',
      ],
      tags: ['Spring Boot', 'Java', 'REST API', 'Spring Security', 'JWT'],
      github: 'https://github.com/sabariask/company_portal_backend',
      live: 'https://sabari-nathan-mani.web.app/',
      icon: '⚙️',
      iconBg: 'rgba(74,222,128,0.15)',
      accent: 'linear-gradient(90deg, #4ade80, #38bdf8)',
      featured: false,
    },
  ];
}
