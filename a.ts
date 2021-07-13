/**
 * {@link https://www.google.com/}
 *
 * [google]{@link https://www.google.com/}
 *
 * {@link https://www.google.com/|google}
 *
 * {@link https://www.google.com/ google site}
 *
 * test insert content:
 *
 * {@link www.google.com  ] Hello [}
 *
 * multiple links in a line first:
 *
 * Check out {@link https://www.google.com} and {@link https://www.duckduckgo.com}
 *
 * Check out {@link https://www.google.com|google} and {@link https://www.duckduckgo.com|ddg}
 *
 * Check out [google]{@link https://www.google.com} and [ddg]{@link https://www.duckduckgo.com}
 * 
 * Check out {@link https://www.google.com google} and {@link https://www.duckduckgo.com ddg}
 *
 * @param y number to be added to 3
 * @returns the added numbers 
 */
export function x(y: number): number {
  return 3 + y;
}
