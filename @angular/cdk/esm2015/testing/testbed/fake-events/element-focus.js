/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { dispatchFakeEvent } from './dispatch-events';
function triggerFocusChange(element, event) {
    let eventFired = false;
    const handler = () => eventFired = true;
    element.addEventListener(event, handler);
    element[event]();
    element.removeEventListener(event, handler);
    if (!eventFired) {
        dispatchFakeEvent(element, event);
    }
}
/**
 * Patches an elements focus and blur methods to emit events consistently and predictably.
 * This is necessary, because some browsers, like IE11, will call the focus handlers asynchronously,
 * while others won't fire them at all if the browser window is not focused.
 * @docs-private
 */
export function patchElementFocus(element) {
    element.focus = () => dispatchFakeEvent(element, 'focus');
    element.blur = () => dispatchFakeEvent(element, 'blur');
}
/** @docs-private */
export function triggerFocus(element) {
    triggerFocusChange(element, 'focus');
}
/** @docs-private */
export function triggerBlur(element) {
    triggerFocusChange(element, 'blur');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC1mb2N1cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvdGVzdGluZy90ZXN0YmVkL2Zha2UtZXZlbnRzL2VsZW1lbnQtZm9jdXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFFcEQsU0FBUyxrQkFBa0IsQ0FBQyxPQUFvQixFQUFFLEtBQXVCO0lBQ3ZFLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQztJQUN2QixNQUFNLE9BQU8sR0FBRyxHQUFHLEVBQUUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQ3hDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDekMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7SUFDakIsT0FBTyxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM1QyxJQUFJLENBQUMsVUFBVSxFQUFFO1FBQ2YsaUJBQWlCLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ25DO0FBQ0gsQ0FBQztBQUVEOzs7OztHQUtHO0FBQ0gsTUFBTSxVQUFVLGlCQUFpQixDQUFDLE9BQW9CO0lBQ3BELE9BQU8sQ0FBQyxLQUFLLEdBQUcsR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFELE9BQU8sQ0FBQyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzFELENBQUM7QUFFRCxvQkFBb0I7QUFDcEIsTUFBTSxVQUFVLFlBQVksQ0FBQyxPQUFvQjtJQUMvQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdkMsQ0FBQztBQUVELG9CQUFvQjtBQUNwQixNQUFNLFVBQVUsV0FBVyxDQUFDLE9BQW9CO0lBQzlDLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUN0QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7ZGlzcGF0Y2hGYWtlRXZlbnR9IGZyb20gJy4vZGlzcGF0Y2gtZXZlbnRzJztcblxuZnVuY3Rpb24gdHJpZ2dlckZvY3VzQ2hhbmdlKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBldmVudDogJ2ZvY3VzJyB8ICdibHVyJykge1xuICBsZXQgZXZlbnRGaXJlZCA9IGZhbHNlO1xuICBjb25zdCBoYW5kbGVyID0gKCkgPT4gZXZlbnRGaXJlZCA9IHRydWU7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcik7XG4gIGVsZW1lbnRbZXZlbnRdKCk7XG4gIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcik7XG4gIGlmICghZXZlbnRGaXJlZCkge1xuICAgIGRpc3BhdGNoRmFrZUV2ZW50KGVsZW1lbnQsIGV2ZW50KTtcbiAgfVxufVxuXG4vKipcbiAqIFBhdGNoZXMgYW4gZWxlbWVudHMgZm9jdXMgYW5kIGJsdXIgbWV0aG9kcyB0byBlbWl0IGV2ZW50cyBjb25zaXN0ZW50bHkgYW5kIHByZWRpY3RhYmx5LlxuICogVGhpcyBpcyBuZWNlc3NhcnksIGJlY2F1c2Ugc29tZSBicm93c2VycywgbGlrZSBJRTExLCB3aWxsIGNhbGwgdGhlIGZvY3VzIGhhbmRsZXJzIGFzeW5jaHJvbm91c2x5LFxuICogd2hpbGUgb3RoZXJzIHdvbid0IGZpcmUgdGhlbSBhdCBhbGwgaWYgdGhlIGJyb3dzZXIgd2luZG93IGlzIG5vdCBmb2N1c2VkLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hFbGVtZW50Rm9jdXMoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgZWxlbWVudC5mb2N1cyA9ICgpID0+IGRpc3BhdGNoRmFrZUV2ZW50KGVsZW1lbnQsICdmb2N1cycpO1xuICBlbGVtZW50LmJsdXIgPSAoKSA9PiBkaXNwYXRjaEZha2VFdmVudChlbGVtZW50LCAnYmx1cicpO1xufVxuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyaWdnZXJGb2N1cyhlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICB0cmlnZ2VyRm9jdXNDaGFuZ2UoZWxlbWVudCwgJ2ZvY3VzJyk7XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgZnVuY3Rpb24gdHJpZ2dlckJsdXIoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgdHJpZ2dlckZvY3VzQ2hhbmdlKGVsZW1lbnQsICdibHVyJyk7XG59XG4iXX0=