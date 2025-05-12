# TripFlow

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.8.

---

## 📁 Features

- Input fields for Start Point and End Point.  
- Design uses only the first three characters of the start and end points.  
- Functionality:
    1. If it’s a continued trip (e.g., Bangalore to Chennai, Chennai to Ooty), then the straight line is on **Level 1**.  
    2. If it’s not a continued trip (e.g., Bangalore to Chennai, Ooty to Bangalore), then the straight line should have an arrow and be on **Level 1**.  
    3. If consecutive trips have the same pickup and drop location, then those should be shown on **Level 2**.  

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
