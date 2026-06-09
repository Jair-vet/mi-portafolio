/** Enable basic content-theft deterrents.
 *  Note: these deter casual users only — they cannot stop determined developers.
 */
export function enableContentProtection(): void {
  // Disable right-click context menu
  document.addEventListener('contextmenu', (e) => e.preventDefault());

  // Disable common inspect / source shortcuts
  document.addEventListener('keydown', (e) => {
    const blocked =
      (e.ctrlKey && e.key === 'u') ||           // View source
      (e.ctrlKey && e.key === 's') ||           // Save page
      (e.ctrlKey && e.shiftKey && e.key === 'I') || // Dev tools
      (e.ctrlKey && e.shiftKey && e.key === 'J') || // Console
      (e.ctrlKey && e.shiftKey && e.key === 'C') || // Inspector
      e.key === 'F12';                          // Dev tools

    if (blocked) e.preventDefault();
  });
}
