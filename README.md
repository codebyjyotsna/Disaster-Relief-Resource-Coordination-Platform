# Disaster-Relief-Resource-Coordination-Platform
The **Disaster Relief Resource Coordination Platform** is a real-time, crowd-verified platform designed to connect:
- **Victims in need**
- **Volunteers offering help**
- **NGOs coordinating resources**

This platform provides a centralized, reliable source for locating verified resources (shelter, food, medical help) and donating to verified campaigns during natural disasters. It features location-based filtering, real-time updates, and community-backed verification.

## 🧠 Problem It Solves
During natural disasters, misinformation and fragmented platforms make it difficult for victims to access critical resources or for volunteers to offer help effectively. Existing solutions often lack real-time updates and verification mechanisms.
This platform solves:
1. **Resource Verification:** Verified resources and donation campaigns (via NGO backing and upvotes).
2. **Real-Time Updates:** Live updates on available resources, alerts, and help requests.
3. **Community-First Approach:** Easy-to-use interface to connect victims, volunteers, and NGOs.

## 🚀 Key Features
### Core Features:
- 📍 **Live Map**:
  - Displays help requests and resources with filters (food, shelter, medical, etc.).
  - Built using **Mapbox API**.
- ✅ **Verified NGO Listings**:
  - Easily locate verified NGOs and donation links.
- 🆘 **Request Help Form**:
  - Victims can submit their needs with details like location, category, and optional images.
- 🙋 **Volunteer Registration**:
  - Volunteers can register and specify their area preferences.
- 🔄 **Real-Time Updates**:
  - Built using **Socket.IO** or **Firebase**.
- 🔔 **Emergency Broadcasts**:
  - Victims can receive alerts via SMS or WhatsApp (via Twilio API).
- 📊 **Admin Panel for NGOs**:
  - NGOs can approve and manage help requests and resources.
- 🔍 **Search & Filter**:
  - Find resources by location, category, and urgency.

## 🌐 Bonus Features
- 💬 **AI-Generated Summaries**:
  - Summarize long help requests using **GPT API**.
- 📲 **PWA Support**:
  - Usable in low-network areas.
- 🌍 **Multilingual Interface**:
  - Add support for multiple languages using **i18n**.

## 🛠️ Tech Stack
| Layer         | Tech                                                                                  |
|---------------|---------------------------------------------------------------------------------------|
| **Frontend**  | [Next.js](https://nextjs.org) + [TailwindCSS](https://tailwindcss.com) + [Mapbox API](https://www.mapbox.com) |
| **Backend**   | [Node.js](https://nodejs.org) + [Express](https://expressjs.com)                      |
| **Database**  | [MongoDB Atlas](https://www.mongodb.com/atlas) or [PostgreSQL](https://www.postgresql.org) |
| **Auth**      | [Firebase Auth](https://firebase.google.com/products/auth) or [NextAuth](https://next-auth.js.org) |
| **Hosting**   | [Vercel](https://vercel.com) (Frontend), [Render](https://render.com) or [Heroku](https://www.heroku.com) (Backend), [Cloudinary](https://cloudinary.com) (Images) |
| **APIs**      | [Google Places API](https://developers.google.com/maps/documentation/places), [Twilio](https://www.twilio.com) (SMS/WhatsApp) |
| **Real-Time** | [Socket.IO](https://socket.io) or [Firebase](https://firebase.google.com)             |

## 🏗️ Project Structure
### Frontend
- **Pages**:
  - `/`: Homepage with a real-time map interface.
  - `/request-help`: Form for victims to request help.
  - `/volunteer-registration`: Form for volunteers to register.
  - `/ngo-dashboard`: Admin panel for NGOs.
  - `/donate`: Page for verified donation links.
- **Components**:
  - `MapComponent`: Interactive map with help request/resource markers.
  - `HelpRequestForm`: Form to submit help requests.
  - `VolunteerForm`: Form for volunteer registration.
  - `ResourceFilters`: Filter resources by type (food, shelter, medical, etc.).
  - `EmergencyAlerts`: Display emergency alerts.
### Backend
- **API Endpoints**:
  - `/api/resources`:
    - `GET`: Filter resources.
    - `POST`: Add new resource.
  - `/api/help-requests`:
    - `GET`: Fetch help requests.
    - `POST`: Submit a new request.
  - `/api/volunteers`:
    - `GET`: Fetch volunteers.
    - `POST`: Register a new volunteer.
  - `/api/alerts`:
    - `POST`: Send emergency broadcasts.
  - `/api/ngo-dashboard`:
    - `GET/POST`: Approve/manage resources.

- **Middleware**:
  - Role-based authentication for victims, volunteers, NGOs, and admins.
  - Input validation using `express-validator`.
