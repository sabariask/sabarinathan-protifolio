import { Component, HostListener, signal, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit, OnDestroy {
  isScrolled = signal(false);
  menuOpen = signal(false);
  activeSection = signal('hero');

  private router = inject(Router);
  private observer!: IntersectionObserver;

  navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education & Certs' },
    { id: 'contact', label: 'Contact' },
  ];

  ngOnInit() {
    const fragment = window.location.hash.slice(1) || 'hero';
    this.activeSection.set(fragment);

    if (fragment && fragment !== 'hero') {
      setTimeout(() => {
        document.getElementById(fragment)?.scrollIntoView({ behavior: 'auto', block: 'start' });
      }, 100);
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeSection.set(entry.target.id);
            window.history.replaceState(null, '', '#' + entry.target.id);
          }
        });
      },
      { threshold: 0.3 },
    );

    const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) this.observer.observe(el);
    });
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMenu() {
    this.menuOpen.update((v) => !v);
  }
  closeMenu() {
    this.menuOpen.set(false);
  }

  scrollTo(id: string) {
    this.router.navigate([], { fragment: id });

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
  }

  isActive(id: string): boolean {
    return this.activeSection() === id;
  }
}
