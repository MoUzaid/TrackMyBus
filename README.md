🚌 TrackMyBus – Real-Time University Bus Tracking System
🎯 Overview

TrackMyBus is a smart real-time bus tracking system built specially for Integral University students and staff.
The platform enables students to track their university bus live, while the driver shares their current GPS coordinates in real time (captured using the browser’s Geolocation API via watchPosition()).
It ensures accurate arrival notifications, admin control, and seamless communication between students, drivers, and the admin.

⚙️ Features
👨‍🎓 User Features

•🔍 Track Your University Bus in Real-Time — View your bus moving live on the map.

•📍 Auto Location Updates — Driver’s GPS coordinates continuously update using watchPosition() for real-time accuracy.

•⏰ Smart Notifications —

   1.“Your bus is arriving soon” when the bus is 10 minutes away.
  
  2.“Your bus has arrived” when the bus reaches your location.
  
   (Implemented using Firebase Cloud Messaging)

•🔐 Password Reset — Forgot your password? Get a reset link in your email via NodeMailer.



🚍 Driver Features

•📡 Share Real-Time GPS Location — Driver’s current GPS coordinates are fetched using the Geolocation API (watchPosition) and continuously sent to the backend for live tracking.

•🔐 Secure Login and Password Reset via email link.

🧑‍💼 Admin Features

•🛠️ Manage Buses — Create, edit, and delete bus details.

•👨‍✈️ Driver Management — Only admin can register drivers.

•🎓 Student Assignment — View how many students are assigned to each bus.

•📍 Pickup Points Overview — See all pickup points for every bus.

•🌍 Geocoding Integration — When creating or updating a bus, admin can enter the location by name, and it automatically converts into latitude & longitude (since map APIs work with coordinates).

•🛰️ Track Every Bus in Real-Time — Complete control over all university buses.

### 🧩 Tech Stack  

| **Layer** | **Technologies Used** |
|:-----------|:----------------------|
| **Frontend** | React.js, Leaflet.js (for maps), CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB |
| **Route Drawing** | OpenRouteService (ORS) API |
| **Notifications** | Firebase Cloud Messaging |
| **Email Service** | NodeMailer |
| **APIs** | Nominatim API (for Geocoding) |
| **Authentication** | JWT (JSON Web Token) |
| **Location Tracking** | Browser Geolocation API (`watchPosition()`) |


🗺️ How It Works

1.Driver App → Uses the Geolocation API (watchPosition) to continuously send live GPS coordinates to the backend.

2.User App → Fetches location data continuously to show bus movement on the map.

3.Firebase Cloud Messaging → Sends “Arriving Soon” and “Arrived” alerts.

4.Admin Dashboard → Full control over bus routes, drivers, and students.

5.NodeMailer → Handles password reset links for both drivers and users.


🧠 Key Highlights

•🔁 Real-time synchronization between users and drivers.

•🚦 Accurate ETA (Estimated Time of Arrival) calculation.

•📬 Automatic alerts to improve user experience.

•🧭 Integrated Geocoding for easy admin management.

•🔒 Secure authentication and password reset flow.



🚀 Future Enhancements

•📱 Launch dedicated mobile app version.

•🔊 Add voice alerts for bus arrival.

•📊 Add analytics dashboard for admins (bus usage, route optimization, etc.).

•📡 Introduce IoT GPS device integration for real-time precision.



## 📸 Screenshots

### 🏠 Home Page
![Home Page](./public/screenshots/UserHome.png)

### 🚌 Driver Home
![Driver Home](./public/screenshots/DriverHome.png)

### 👨‍🎓 User & Driver Connection
![User Driver](./public/screenshots/UserDriver.png)

### 🗺️ User Map
![User Map](./public/screenshots/UserMap.png)

### 🧭 Pickup Points
![Pickup Points](./public/screenshots/PickupPoints.png)

### 🧩 Admin Dashboard
![Admin Dashboard](./public/screenshots/AdminDasboard.png)

### 🆕 Create Bus
![Create Bus](./public/screenshots/CreateBus.png)

### 👩‍🎓 View Students
![View Students](./public/screenshots/ViewStudents.png)
