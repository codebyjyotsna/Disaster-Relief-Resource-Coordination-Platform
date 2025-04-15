# Disaster Relief Resource Coordination Platform

## Project Structure

### 1. Frontend (Next.js with TailwindCSS)
- **Pages**
  - `/` (Homepage with map interface)
  - `/request-help` (Form for victims to request help)
  - `/volunteer-registration` (Form for volunteers to register)
  - `/ngo-dashboard` (Admin panel for NGOs)
  - `/donate` (Verified donation links)
- **Components**
  - `MapComponent` (Interactive map with Mapbox API)
  - `HelpRequestForm`
  - `VolunteerForm`
  - `ResourceFilters` (Filter by food, shelter, ambulance, etc.)
  - `EmergencyAlerts` (Real-time alerts UI)
- **Styling**
  - TailwindCSS for responsive, accessible UI
- **Integration**
  - Mapbox API for displaying locations
  - Firebase Authentication for user roles (victims, volunteers, NGOs)

### 2. Backend (Node.js with Express)
- **Endpoints**
  - `/api/resources` (GET: Filter resources, POST: Add new resource)
  - `/api/help-requests` (GET: Fetch help requests, POST: Submit request)
  - `/api/volunteers` (GET: Fetch volunteers, POST: Register volunteer)
  - `/api/alerts` (POST: Send emergency broadcasts)
  - `/api/ngo-dashboard` (GET/POST: Approve or manage resources)
- **Technology**
  - Socket.IO or Firebase for real-time updates
  - Twilio API for SMS/WhatsApp alerts
  - Google Places API for location validation
- **Middleware**
  - Role-based authentication (users, NGOs, admin)
  - Validation (Joi or express-validator)

### 3. Database (MongoDB Atlas or PostgreSQL)
- **Collections/Tables**
  - `users` (volunteers, NGOs, victims)
  - `resources` (food, shelter, ambulance, description, location)
  - `help_requests` (details from victims)
  - `alerts` (broadcast messages)
- **Queries**
  - Location-based filtering
  - Search by category or urgency
  - Real-time updates

### 4. Hosting
- **Frontend**: Vercel
- **Backend**: Render or Heroku
- **Images**: Cloudinary

### 5. APIs
- **Google Places API**: Geocoding and location validation
- **Twilio**: SMS/WhatsApp alerts
- **GPT API (Bonus)**: Summarize long help requests
