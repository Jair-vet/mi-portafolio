/** Decode a base64-encoded string at runtime (avoids plaintext in bundle) */
export function deobfuscate(encoded: string): string {
  try {
    return atob(encoded);
  } catch {
    return '';
  }
}

/** Build a mailto: href from an obfuscated email */
export function mailtoFromEncoded(encoded: string): string {
  return `mailto:${deobfuscate(encoded)}`;
}

/** Build a tel: href from an obfuscated phone */
export function telFromEncoded(encoded: string): string {
  const phone = deobfuscate(encoded).replace(/[^+\d]/g, '');
  return `tel:${phone}`;
}
