/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { FocusTrap } from './focus-trap';
/**
 * Class that allows for trapping focus within a DOM element.
 *
 * This class uses a strategy pattern that determines how it traps focus.
 * See FocusTrapInertStrategy.
 */
export class ConfigurableFocusTrap extends FocusTrap {
    constructor(_element, _checker, _ngZone, _document, _focusTrapManager, _inertStrategy, config) {
        super(_element, _checker, _ngZone, _document, config.defer);
        this._focusTrapManager = _focusTrapManager;
        this._inertStrategy = _inertStrategy;
        this._focusTrapManager.register(this);
    }
    /** Whether the FocusTrap is enabled. */
    get enabled() { return this._enabled; }
    set enabled(value) {
        this._enabled = value;
        if (this._enabled) {
            this._focusTrapManager.register(this);
        }
        else {
            this._focusTrapManager.deregister(this);
        }
    }
    /** Notifies the FocusTrapManager that this FocusTrap will be destroyed. */
    destroy() {
        this._focusTrapManager.deregister(this);
        super.destroy();
    }
    /** @docs-private Implemented as part of ManagedFocusTrap. */
    _enable() {
        this._inertStrategy.preventFocus(this);
        this.toggleAnchors(true);
    }
    /** @docs-private Implemented as part of ManagedFocusTrap. */
    _disable() {
        this._inertStrategy.allowFocus(this);
        this.toggleAnchors(false);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLWZvY3VzLXRyYXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL2ExMXkvZm9jdXMtdHJhcC9jb25maWd1cmFibGUtZm9jdXMtdHJhcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFJSCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBS3ZDOzs7OztHQUtHO0FBQ0gsTUFBTSxPQUFPLHFCQUFzQixTQUFRLFNBQVM7SUFZbEQsWUFDRSxRQUFxQixFQUNyQixRQUE4QixFQUM5QixPQUFlLEVBQ2YsU0FBbUIsRUFDWCxpQkFBbUMsRUFDbkMsY0FBc0MsRUFDOUMsTUFBbUM7UUFDbkMsS0FBSyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFIcEQsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUNuQyxtQkFBYyxHQUFkLGNBQWMsQ0FBd0I7UUFHOUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBckJELHdDQUF3QztJQUN4QyxJQUFJLE9BQU8sS0FBYyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ2hELElBQUksT0FBTyxDQUFDLEtBQWM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkM7YUFBTTtZQUNMLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDO0lBY0QsMkVBQTJFO0lBQzNFLE9BQU87UUFDTCxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsNkRBQTZEO0lBQzdELE9BQU87UUFDTCxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCw2REFBNkQ7SUFDN0QsUUFBUTtRQUNOLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Tmdab25lfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SW50ZXJhY3Rpdml0eUNoZWNrZXJ9IGZyb20gJy4uL2ludGVyYWN0aXZpdHktY2hlY2tlci9pbnRlcmFjdGl2aXR5LWNoZWNrZXInO1xuaW1wb3J0IHtGb2N1c1RyYXB9IGZyb20gJy4vZm9jdXMtdHJhcCc7XG5pbXBvcnQge0ZvY3VzVHJhcE1hbmFnZXIsIE1hbmFnZWRGb2N1c1RyYXB9IGZyb20gJy4vZm9jdXMtdHJhcC1tYW5hZ2VyJztcbmltcG9ydCB7Rm9jdXNUcmFwSW5lcnRTdHJhdGVneX0gZnJvbSAnLi9mb2N1cy10cmFwLWluZXJ0LXN0cmF0ZWd5JztcbmltcG9ydCB7Q29uZmlndXJhYmxlRm9jdXNUcmFwQ29uZmlnfSBmcm9tICcuL2NvbmZpZ3VyYWJsZS1mb2N1cy10cmFwLWNvbmZpZyc7XG5cbi8qKlxuICogQ2xhc3MgdGhhdCBhbGxvd3MgZm9yIHRyYXBwaW5nIGZvY3VzIHdpdGhpbiBhIERPTSBlbGVtZW50LlxuICpcbiAqIFRoaXMgY2xhc3MgdXNlcyBhIHN0cmF0ZWd5IHBhdHRlcm4gdGhhdCBkZXRlcm1pbmVzIGhvdyBpdCB0cmFwcyBmb2N1cy5cbiAqIFNlZSBGb2N1c1RyYXBJbmVydFN0cmF0ZWd5LlxuICovXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhYmxlRm9jdXNUcmFwIGV4dGVuZHMgRm9jdXNUcmFwIGltcGxlbWVudHMgTWFuYWdlZEZvY3VzVHJhcCB7XG4gIC8qKiBXaGV0aGVyIHRoZSBGb2N1c1RyYXAgaXMgZW5hYmxlZC4gKi9cbiAgZ2V0IGVuYWJsZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9lbmFibGVkOyB9XG4gIHNldCBlbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZW5hYmxlZCA9IHZhbHVlO1xuICAgIGlmICh0aGlzLl9lbmFibGVkKSB7XG4gICAgICB0aGlzLl9mb2N1c1RyYXBNYW5hZ2VyLnJlZ2lzdGVyKHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9mb2N1c1RyYXBNYW5hZ2VyLmRlcmVnaXN0ZXIodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgX2VsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIF9jaGVja2VyOiBJbnRlcmFjdGl2aXR5Q2hlY2tlcixcbiAgICBfbmdab25lOiBOZ1pvbmUsXG4gICAgX2RvY3VtZW50OiBEb2N1bWVudCxcbiAgICBwcml2YXRlIF9mb2N1c1RyYXBNYW5hZ2VyOiBGb2N1c1RyYXBNYW5hZ2VyLFxuICAgIHByaXZhdGUgX2luZXJ0U3RyYXRlZ3k6IEZvY3VzVHJhcEluZXJ0U3RyYXRlZ3ksXG4gICAgY29uZmlnOiBDb25maWd1cmFibGVGb2N1c1RyYXBDb25maWcpIHtcbiAgICBzdXBlcihfZWxlbWVudCwgX2NoZWNrZXIsIF9uZ1pvbmUsIF9kb2N1bWVudCwgY29uZmlnLmRlZmVyKTtcbiAgICB0aGlzLl9mb2N1c1RyYXBNYW5hZ2VyLnJlZ2lzdGVyKHRoaXMpO1xuICB9XG5cbiAgLyoqIE5vdGlmaWVzIHRoZSBGb2N1c1RyYXBNYW5hZ2VyIHRoYXQgdGhpcyBGb2N1c1RyYXAgd2lsbCBiZSBkZXN0cm95ZWQuICovXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZm9jdXNUcmFwTWFuYWdlci5kZXJlZ2lzdGVyKHRoaXMpO1xuICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgTWFuYWdlZEZvY3VzVHJhcC4gKi9cbiAgX2VuYWJsZSgpIHtcbiAgICB0aGlzLl9pbmVydFN0cmF0ZWd5LnByZXZlbnRGb2N1cyh0aGlzKTtcbiAgICB0aGlzLnRvZ2dsZUFuY2hvcnModHJ1ZSk7XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIE1hbmFnZWRGb2N1c1RyYXAuICovXG4gIF9kaXNhYmxlKCkge1xuICAgIHRoaXMuX2luZXJ0U3RyYXRlZ3kuYWxsb3dGb2N1cyh0aGlzKTtcbiAgICB0aGlzLnRvZ2dsZUFuY2hvcnMoZmFsc2UpO1xuICB9XG59XG4iXX0=