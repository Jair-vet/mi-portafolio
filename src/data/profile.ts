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
  photoUrl: 'https://res.cloudinary.com/dytlbyofu/image/upload/v1781016445/ce50db14-833f-4983-a1da-47e382238f3a_pqcwog.jpg',
  cvUrl: import.meta.env.VITE_CV_URL || 'https://res.cloudinary.com/dytlbyofu/image/upload/v1781015129/Jair_CV_Actualizado_gnjf3b.pdf',
};
