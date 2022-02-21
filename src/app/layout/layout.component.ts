import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  level: number = 2;

  constructor() { }

  ngOnInit(): void {
  }

  public setLevel(level: number): void {
    this.level = level;
  }

  public setLevelClass(): string {
    return `level-${this.level}`;
  }
}
