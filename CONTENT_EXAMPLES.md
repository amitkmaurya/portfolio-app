# 📝 Content Examples - What to Replace

This file shows you exactly what to replace in each file to fully personalize your portfolio.

---

## 🎨 Projects Data Example

**File**: `src/app/rooms/page.tsx` (Lines 8-50)

Replace the `const rooms = [` array with your actual projects:

```tsx
const rooms = [
  {
    name: "EduLearn Platform",
    price: "EdTech · Learning",
    capacity: "Role: Full-stack engineer",
    amenities: ["React + Node.js", "Database design", "Mobile app"],
    status: "Shipped",
    image: "YOUR_PROJECT_IMAGE_URL",
  },
  {
    name: "PayFlow - Payment Gateway",
    price: "FinTech · Payments",
    capacity: "Role: Frontend + Design",
    amenities: ["Next.js", "Payment integrations", "UI design"],
    status: "Live",
    image: "YOUR_PROJECT_IMAGE_URL",
  },
  {
    name: "HealthSync - Patient Portal",
    price: "Healthcare · Portal",
    capacity: "Role: Full-stack",
    amenities: ["HIPAA compliant", "Real-time updates", "Mobile"],
    status: "Shipped",
    image: "YOUR_PROJECT_IMAGE_URL",
  },
  {
    name: "Coaching Management System",
    price: "EdTech · Management",
    capacity: "Role: Backend + Frontend",
    amenities: ["Student tracking", "Attendance", "Fee management"],
    status: "Active",
    image: "YOUR_PROJECT_IMAGE_URL",
  },
  {
    name: "School Website Redesign",
    price: "Education · Website",
    capacity: "Role: Designer + Developer",
    amenities: ["Responsive design", "Enrollment form", "Content CMS"],
    status: "Shipped",
    image: "YOUR_PROJECT_IMAGE_URL",
  },
];
```

---

## 👥 Client Testimonials Example

**File**: `src/app/testimonials/page.tsx` (Lines 7-25)

Replace with real feedback from clients:

```tsx
const reviews = [
  {
    name: "Rajesh Sharma",
    rating: 5,
    course: "Founder, EduLearn",
    quote: "Amit delivered our platform on time and with exceptional quality. Great communication throughout!",
    image: "CLIENT_PHOTO_URL",
  },
  {
    name: "Priya Verma",
    rating: 5,
    course: "CEO, FinFlow Startup",
    quote: "Professional, detail-oriented, and solved complex payment integration issues smoothly.",
    image: "CLIENT_PHOTO_URL",
  },
  {
    name: "Dr. Amit Patel",
    rating: 5,
    course: "Hospital Director, HealthSync",
    quote: "The healthcare portal exceeded our expectations. User feedback has been overwhelmingly positive.",
    image: "CLIENT_PHOTO_URL",
  },
];
```

---

## 💰 Pricing Example

**File**: `src/app/pricing/page.tsx` (Lines 10-27)

Customize to your rates (current is in INR):

```tsx
const plans = [
  {
    name: "Website/Landing",
    monthly: 50000,  // ₹50k for simple projects
    yearly: 45000,
    features: ["5-7 pages", "Responsive design", "Basic SEO"],
  },
  {
    name: "Web Application",
    monthly: 150000, // ₹1.5L for apps
    yearly: 135000,
    features: ["Custom backend", "Database design", "API development"],
  },
  {
    name: "Full-Stack Product",
    monthly: 300000, // ₹3L for complex
    yearly: 270000,
    features: ["Frontend + Backend", "Design system", "Deployment"],
  },
  {
    name: "Monthly Retainer",
    monthly: 100000, // ₹1L/month ongoing
    yearly: 900000,
    features: ["20 hrs/week", "Maintenance", "Feature updates"],
  },
];
```

---

## 📚 Services Example

**File**: `src/app/facilities/page.tsx` (Lines 10-24)

Update to your actual services:

```tsx
const facilities = [
  {
    title: "Full-Stack Development",
    description: "React, Node.js, PostgreSQL, MongoDB - complete web applications",
    icon: Code2,
  },
  {
    title: "Frontend Development",
    description: "Next.js, Tailwind CSS, responsive design, performance optimization",
    icon: Palette,
  },
  {
    title: "Backend Development",
    description: "Node.js, Express, databases, APIs, authentication systems",
    icon: Briefcase,
  },
  {
    title: "UI/UX Design",
    description: "Figma design, user flows, prototyping, design systems",
    icon: Sparkles,
  },
  {
    title: "Database Design",
    description: "PostgreSQL, MongoDB, Redis, data architecture, optimization",
    icon: ShieldCheck,
  },
  {
    title: "Deployment & DevOps",
    description: "Vercel, AWS, Docker, GitHub CI/CD, monitoring, scaling",
    icon: Rocket,
  },
];
```

---

## 📖 Blog Articles Example

**File**: `src/app/blog/page.tsx` (Lines 7-27)

Replace with your own articles:

```tsx
const posts = [
  {
    title: "Building Scalable EdTech Platforms: Lessons Learned",
    category: "EdTech",
    date: "Feb 20, 2026",
    excerpt: "Key architectural decisions and challenges when scaling education platforms.",
    image: "BLOG_IMAGE_URL",
  },
  {
    title: "FinTech Security: Protecting User Payment Data",
    category: "FinTech",
    date: "Feb 10, 2026",
    excerpt: "Best practices for secure payment processing and compliance.",
    image: "BLOG_IMAGE_URL",
  },
  {
    title: "React Performance Optimization in Large-Scale Apps",
    category: "Development",
    date: "Jan 25, 2026",
    excerpt: "Techniques to improve React app performance and bundle size.",
    image: "BLOG_IMAGE_URL",
  },
];
```

---

## 🖼️ Gallery Images Example

**File**: `src/app/gallery/page.tsx` (Lines 10-30)

Replace with screenshots of your actual work:

```tsx
const galleryItems = [
  {
    id: 1,
    title: "EduLearn Dashboard",
    category: "EdTech",
    image: "SCREENSHOT_URL",
  },
  {
    id: 2,
    title: "PayFlow Checkout",
    category: "FinTech",
    image: "SCREENSHOT_URL",
  },
  {
    id: 3,
    title: "HealthSync Mobile",
    category: "Healthcare",
    image: "SCREENSHOT_URL",
  },
  // ... add more
];
```

---

## 🔧 How to Get Image URLs

### Option 1: Use Your Own Images
1. Upload to a service like **Cloudinary**, **AWS S3**, or **Imgur**
2. Get the public URL
3. Replace in your data

### Option 2: Use Unsplash (Temporary)
```
https://images.unsplash.com/photo-[ID]?auto=format&fit=crop&w=900&q=80
```

### Option 3: Local Files
Put images in `public/` folder, then use:
```tsx
image: "/images/my-project.png"
```

---

## 📄 Home Page Customization

**File**: `src/app/page.tsx`

Key sections to review and customize:

1. **Line 110-150**: Hero section copy (already updated)
2. **Line 42-110**: Featured projects data
3. **Line 17-32**: Services/highlights (matches your specialization)
4. **Line 78-98**: Stats - update to your numbers

---

## 👤 About Page - Your Story

**File**: `src/app/about/page.tsx` (Lines 50-60)

Update with your actual background:

```tsx
// Around line 50-60
<p className="text-slate-600 dark:text-slate-300">
  I'm Amit Kumar, a software engineer and designer with 6+ years of 
  experience building digital products. Starting from freelance web 
  development, I've specialized in EdTech, FinTech, and healthcare 
  platforms. I combine technical expertise with design thinking to 
  create user-centric solutions.
</p>
```

---

## 🎯 Contact Information Already Updated

These are already set to your info:
- ✅ Name: Amit Kumar
- ✅ Email: amit@amitkmaurya.com
- ✅ Website: amitkmaurya.com
- ✅ Location: India · Remote worldwide

No changes needed here!

---

## 📋 Prioritized Update Order

1. **FIRST**: Add your 5 best projects (most important!)
2. **SECOND**: Add real client testimonials
3. **THIRD**: Update pricing to your actual rates
4. **FOURTH**: Add your blog articles
5. **FIFTH**: Add gallery images
6. **SIXTH**: Update services list

---

## ✨ Tips for Best Results

### Project Descriptions
- Be specific about your role
- Highlight impact/results
- Use keywords (React, Node.js, etc.)
- Include technologies used

### Testimonials  
- Get permission from clients first
- Use real names and titles
- Request specific praise
- Include measurable results if possible

### Images
- Use high-quality screenshots
- Keep aspect ratios consistent
- Add alt text for accessibility
- Optimize file sizes

### Content
- Keep it professional but personable
- Use your voice and style
- Show personality in blog posts
- Update regularly (especially blog)

---

## 🚀 Final Checklist

Before launching:
- [ ] All projects added with real images
- [ ] All testimonials from real clients
- [ ] Pricing matches your rates
- [ ] Services match your expertise
- [ ] About page tells your story
- [ ] Blog/insights section populated
- [ ] Gallery has your work samples
- [ ] Contact information correct
- [ ] Build runs without errors: `npm run build`
- [ ] Preview locally: `npm run dev`

---

Good luck with your portfolio! Make it truly yours! 🎉
