// Personal info — sensitive fields (email/phone) are base64-encoded.
// Decoded at runtime via src/utils/obfuscate.ts

export const profile = {
  name: 'Carlos Jair Aceves García',
  displayName: 'Jair Aceves',
  title: 'Senior Full Stack Developer',
  subtitle: 'Cloud Architect & Technical Leader',
  bio: [
    "I'm a Senior Full Stack Developer with 5+ years of experience designing and implementing scalable, high-performance web solutions. Expert in Clean Architecture, microservices, and cloud-native applications.",
    'Specialized in React.js 18, Vue.js 3, TypeScript, Node.js, Stripe integrations, and event-driven architectures with Kafka. Strong CI/CD background and technical leadership of multidisciplinary teams.',
  ],
  location: 'Guadalajara, Jalisco, México',
  // base64 encoded: jairaceves56@gmail.com
  emailEncoded: 'amFpcmFjZXZlczU2QGdtYWlsLmNvbQ==',
  // base64 encoded: MX: (+52) 312 155 5316
  phoneEncoded: 'TVg6ICgrNTIpIDMxMiAxNTUgNTMxNg==',
  // Current photo — update URL after uploading new photo to Cloudinary
  photoUrl: 'https://res.cloudinary.com/dytlbyofu/image/upload/v1741046461/CV/IMG_5220_vyqrrr.jpg',
  // CV PDF — update URL after uploading new PDF to Cloudinary
  cvUrl: import.meta.env.VITE_CV_URL || 'https://res.cloudinary.com/dytlbyofu/image/upload/v1715033576/CV/Cv-sp_yxpn9z.pdf',
};
