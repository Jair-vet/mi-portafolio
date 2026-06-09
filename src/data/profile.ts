// Personal info — sensitive fields (email/phone) are base64-encoded.
// Decoded at runtime via src/utils/obfuscate.ts

export const profile = {
  name: 'Carlos Jair Aceves García',
  displayName: 'Jair Aceves',
  title: 'Senior Full Stack Developer',
  subtitle: 'Cloud Architect & Technical Leader',
  bio: [
    "I'm a Senior Full Stack Developer with 6+ years of experience designing and delivering scalable, high-performance web solutions. Expert in Clean Architecture, microservices, and cloud-native applications on AWS.",
    'Specialized in React.js 18, Next.js, TypeScript, Node.js, NestJS, and event-driven architectures with Kafka. Strong DevOps background with Docker, Kubernetes, Terraform, and CI/CD pipelines on GitHub Actions.',
    'Deeply integrated with the AI ecosystem: building autonomous agent workflows with Claude API, Gemini, and Ollama; orchestrating multi-agent systems with MCP (Model Context Protocol) and N8N automation pipelines.',
  ],
  location: 'Guadalajara, Jalisco, México',
  // base64 encoded: jairaceves56@gmail.com
  emailEncoded: 'amFpcmFjZXZlczU2QGdtYWlsLmNvbQ==',
  // base64 encoded: MX: (+52) 312 155 5316
  phoneEncoded: 'TVg6ICgrNTIpIDMxMiAxNTUgNTMxNg==',
  photoUrl: 'https://res.cloudinary.com/dytlbyofu/image/upload/v1781016445/ce50db14-833f-4983-a1da-47e382238f3a_pqcwog.jpg',
  cvUrl: import.meta.env.VITE_CV_URL || 'https://res.cloudinary.com/dytlbyofu/image/upload/v1781015129/Jair_CV_Actualizado_gnjf3b.pdf',
};
