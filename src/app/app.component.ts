import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
interface Trip {
  start: string;
  end: string;
  type: 'first' | 'continued' | 'non-continued' | 'repeated' | 'arc';
  level: number;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  startPoint = '';
  endPoint = '';
  trips: Trip[] = [];

  addTrip() {
    const start = this.startPoint.trim().toUpperCase();
    const end = this.endPoint.trim().toUpperCase();
  
    if (!start || !end) {
      alert('Please enter both start and end points.');
      return;
    }
  
    let type: Trip['type'] = 'first';
    let level = 1;
  
    const lastIndex = this.trips.length - 1;
  
    if (this.trips.length > 0) {
      const prev = this.trips[lastIndex];
  
      if (prev.start === start && prev.end === end) {
        type = 'repeated';
        level = 2;
        this.trips[lastIndex].type = 'repeated';
        this.trips[lastIndex].level = 2;
      } else if (prev.end === start) {
        type = 'continued';
      } else {
        type = 'non-continued';
      }
    }
  
    // trips array contains added trip
    this.trips.push({ start, end, type, level });
  
    this.startPoint = '';
    this.endPoint = '';
  }
  
}
