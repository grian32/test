/**
 * {@link https://www.google.com/}
 * [google]{@link https://www.google.com/}
 * {@link https://www.google.com/|google}
 * {@link https://www.google.com/ google site}
 * insert content:
 * {@link www.google.com  ] Hello [}
 * test xss:
 * {@link www.google.com ] <svg onload="alert(1)"></svg> [}
 * @param y number to be added to 3
 * @returns the added numbers 
 */
export function x(y: number): number {
  return 3 + y;
}
