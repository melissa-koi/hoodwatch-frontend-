/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { InjectionToken } from '@angular/core';
export const LIVE_ANNOUNCER_ELEMENT_TOKEN = new InjectionToken('liveAnnouncerElement', {
    providedIn: 'root',
    factory: LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY,
});
/** @docs-private */
export function LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY() {
    return null;
}
/** Injection token that can be used to configure the default options for the LiveAnnouncer. */
export const LIVE_ANNOUNCER_DEFAULT_OPTIONS = new InjectionToken('LIVE_ANNOUNCER_DEFAULT_OPTIONS');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGl2ZS1hbm5vdW5jZXItdG9rZW5zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9hMTF5L2xpdmUtYW5ub3VuY2VyL2xpdmUtYW5ub3VuY2VyLXRva2Vucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBUTdDLE1BQU0sQ0FBQyxNQUFNLDRCQUE0QixHQUNyQyxJQUFJLGNBQWMsQ0FBcUIsc0JBQXNCLEVBQUU7SUFDN0QsVUFBVSxFQUFFLE1BQU07SUFDbEIsT0FBTyxFQUFFLG9DQUFvQztDQUM5QyxDQUFDLENBQUM7QUFFUCxvQkFBb0I7QUFDcEIsTUFBTSxVQUFVLG9DQUFvQztJQUNsRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFXRCwrRkFBK0Y7QUFDL0YsTUFBTSxDQUFDLE1BQU0sOEJBQThCLEdBQ3ZDLElBQUksY0FBYyxDQUE4QixnQ0FBZ0MsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7SW5qZWN0aW9uVG9rZW59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBUaGUgdG9rZW5zIGZvciB0aGUgbGl2ZSBhbm5vdW5jZXIgYXJlIGRlZmluZWQgaW4gYSBzZXBhcmF0ZSBmaWxlIGZyb20gTGl2ZUFubm91bmNlclxuLy8gYXMgYSB3b3JrYXJvdW5kIGZvciBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8yMjU1OVxuXG4vKiogUG9zc2libGUgcG9saXRlbmVzcyBsZXZlbHMuICovXG5leHBvcnQgdHlwZSBBcmlhTGl2ZVBvbGl0ZW5lc3MgPSAnb2ZmJyB8ICdwb2xpdGUnIHwgJ2Fzc2VydGl2ZSc7XG5cbmV4cG9ydCBjb25zdCBMSVZFX0FOTk9VTkNFUl9FTEVNRU5UX1RPS0VOID1cbiAgICBuZXcgSW5qZWN0aW9uVG9rZW48SFRNTEVsZW1lbnQgfCBudWxsPignbGl2ZUFubm91bmNlckVsZW1lbnQnLCB7XG4gICAgICBwcm92aWRlZEluOiAncm9vdCcsXG4gICAgICBmYWN0b3J5OiBMSVZFX0FOTk9VTkNFUl9FTEVNRU5UX1RPS0VOX0ZBQ1RPUlksXG4gICAgfSk7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgZnVuY3Rpb24gTElWRV9BTk5PVU5DRVJfRUxFTUVOVF9UT0tFTl9GQUNUT1JZKCk6IG51bGwge1xuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqIE9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIGNvbmZpZ3VyZSB0aGUgZGVmYXVsdCBvcHRpb25zIGZvciB0aGUgTGl2ZUFubm91bmNlci4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTGl2ZUFubm91bmNlckRlZmF1bHRPcHRpb25zIHtcbiAgLyoqIERlZmF1bHQgcG9saXRlbmVzcyBmb3IgdGhlIGFubm91bmNlbWVudHMuICovXG4gIHBvbGl0ZW5lc3M/OiBBcmlhTGl2ZVBvbGl0ZW5lc3M7XG5cbiAgLyoqIERlZmF1bHQgZHVyYXRpb24gZm9yIHRoZSBhbm5vdW5jZW1lbnQgbWVzc2FnZXMuICovXG4gIGR1cmF0aW9uPzogbnVtYmVyO1xufVxuXG4vKiogSW5qZWN0aW9uIHRva2VuIHRoYXQgY2FuIGJlIHVzZWQgdG8gY29uZmlndXJlIHRoZSBkZWZhdWx0IG9wdGlvbnMgZm9yIHRoZSBMaXZlQW5ub3VuY2VyLiAqL1xuZXhwb3J0IGNvbnN0IExJVkVfQU5OT1VOQ0VSX0RFRkFVTFRfT1BUSU9OUyA9XG4gICAgbmV3IEluamVjdGlvblRva2VuPExpdmVBbm5vdW5jZXJEZWZhdWx0T3B0aW9ucz4oJ0xJVkVfQU5OT1VOQ0VSX0RFRkFVTFRfT1BUSU9OUycpO1xuIl19