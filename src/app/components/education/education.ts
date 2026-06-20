import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  certifications = [
    {
      name: 'Anthropic Certified Architect',
      issuer: 'Anthropic',
      icon: '🤖',
      iconBg: 'rgba(167,139,250,0.15)',
      status: 'In Progress',
      link: null,
    },
    {
      name: 'Angular (Intermediate)',
      issuer: 'HackerRank · Verified',
      icon: '⚡',
      iconBg: 'rgba(56,189,248,0.15)',
      status: 'Completed',
      link: 'https://www.hackerrank.com/certificates/05f87f6d8856',
    },
    {
      name: 'Angular (Basic)',
      issuer: 'HackerRank · Verified',
      icon: '⚡',
      iconBg: 'rgba(56,189,248,0.15)',
      status: 'Completed',
      link: 'https://www.hackerrank.com/certificates/c9d87a7d9938',
    },
    {
      name: 'Building a Complete MEAN Stack Application',
      issuer: 'Board Infinity · Coursera · Jul 2024',
      icon: '🌐',
      iconBg: 'rgba(56,189,248,0.15)',
      status: 'Completed',
      link: 'https://coursera.org/share/7b03b9a80d94608331b748c993ba54ee',
    },
    {
      name: 'Secure Full Stack MEAN Developer',
      issuer: 'EC-Council · Coursera · Aug 2022',
      icon: '🔐',
      iconBg: 'rgba(251,146,60,0.15)',
      status: 'Completed',
      link: 'https://coursera.org/share/526b987716e7b8359753a8d9e2981f2d',
    },
  ];
}
