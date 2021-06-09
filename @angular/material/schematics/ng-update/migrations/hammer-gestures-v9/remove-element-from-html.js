"use strict";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeElementFromHtml = void 0;
/**
 * Removes the specified element. Additionally, preceding whitespace will be removed
 * to not leave empty lines in the resulting HTML.
 */
function removeElementFromHtml(element, recorder) {
    // sourceCodeLocation is always set since we parse with location info enabled.
    const { startOffset, endOffset } = element.sourceCodeLocation;
    const parentIndex = element.parentNode.childNodes.indexOf(element);
    const precedingTextSibling = element.parentNode.childNodes.find((f, i) => f.nodeName === '#text' && i === parentIndex - 1);
    recorder.remove(startOffset, endOffset - startOffset);
    // If we found a preceding text node which just consists of whitespace, remove it.
    if (precedingTextSibling && /^\s+$/.test(precedingTextSibling.value)) {
        const textSiblingLocation = precedingTextSibling.sourceCodeLocation;
        recorder.remove(textSiblingLocation.startOffset, textSiblingLocation.endOffset - textSiblingLocation.startOffset);
    }
}
exports.removeElementFromHtml = removeElementFromHtml;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLWVsZW1lbnQtZnJvbS1odG1sLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL3NjaGVtYXRpY3MvbmctdXBkYXRlL21pZ3JhdGlvbnMvaGFtbWVyLWdlc3R1cmVzLXY5L3JlbW92ZS1lbGVtZW50LWZyb20taHRtbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HOzs7QUFLSDs7O0dBR0c7QUFDSCxTQUFnQixxQkFBcUIsQ0FDakMsT0FBa0MsRUFBRSxRQUF3QjtJQUM5RCw4RUFBOEU7SUFDOUUsTUFBTSxFQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUMsR0FBRyxPQUFPLENBQUMsa0JBQW1CLENBQUM7SUFDN0QsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25FLE1BQU0sb0JBQW9CLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUMzRCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQW1DLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxLQUFLLE9BQU8sSUFBSSxDQUFDLEtBQUssV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRWhHLFFBQVEsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLFNBQVMsR0FBRyxXQUFXLENBQUMsQ0FBQztJQUV0RCxrRkFBa0Y7SUFDbEYsSUFBSSxvQkFBb0IsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3BFLE1BQU0sbUJBQW1CLEdBQUcsb0JBQW9CLENBQUMsa0JBQW1CLENBQUM7UUFDckUsUUFBUSxDQUFDLE1BQU0sQ0FDWCxtQkFBbUIsQ0FBQyxXQUFXLEVBQy9CLG1CQUFtQixDQUFDLFNBQVMsR0FBRyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUN0RTtBQUNILENBQUM7QUFqQkQsc0RBaUJDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7VXBkYXRlUmVjb3JkZXJ9IGZyb20gJ0Bhbmd1bGFyLWRldmtpdC9zY2hlbWF0aWNzJztcbmltcG9ydCB7cGFyc2U1fSBmcm9tICdAYW5ndWxhci9jZGsvc2NoZW1hdGljcyc7XG5cbi8qKlxuICogUmVtb3ZlcyB0aGUgc3BlY2lmaWVkIGVsZW1lbnQuIEFkZGl0aW9uYWxseSwgcHJlY2VkaW5nIHdoaXRlc3BhY2Ugd2lsbCBiZSByZW1vdmVkXG4gKiB0byBub3QgbGVhdmUgZW1wdHkgbGluZXMgaW4gdGhlIHJlc3VsdGluZyBIVE1MLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRWxlbWVudEZyb21IdG1sKFxuICAgIGVsZW1lbnQ6IHBhcnNlNS5EZWZhdWx0VHJlZUVsZW1lbnQsIHJlY29yZGVyOiBVcGRhdGVSZWNvcmRlcikge1xuICAvLyBzb3VyY2VDb2RlTG9jYXRpb24gaXMgYWx3YXlzIHNldCBzaW5jZSB3ZSBwYXJzZSB3aXRoIGxvY2F0aW9uIGluZm8gZW5hYmxlZC5cbiAgY29uc3Qge3N0YXJ0T2Zmc2V0LCBlbmRPZmZzZXR9ID0gZWxlbWVudC5zb3VyY2VDb2RlTG9jYXRpb24hO1xuICBjb25zdCBwYXJlbnRJbmRleCA9IGVsZW1lbnQucGFyZW50Tm9kZS5jaGlsZE5vZGVzLmluZGV4T2YoZWxlbWVudCk7XG4gIGNvbnN0IHByZWNlZGluZ1RleHRTaWJsaW5nID0gZWxlbWVudC5wYXJlbnROb2RlLmNoaWxkTm9kZXMuZmluZChcbiAgICAgIChmLCBpKTogZiBpcyBwYXJzZTUuRGVmYXVsdFRyZWVUZXh0Tm9kZSA9PiBmLm5vZGVOYW1lID09PSAnI3RleHQnICYmIGkgPT09IHBhcmVudEluZGV4IC0gMSk7XG5cbiAgcmVjb3JkZXIucmVtb3ZlKHN0YXJ0T2Zmc2V0LCBlbmRPZmZzZXQgLSBzdGFydE9mZnNldCk7XG5cbiAgLy8gSWYgd2UgZm91bmQgYSBwcmVjZWRpbmcgdGV4dCBub2RlIHdoaWNoIGp1c3QgY29uc2lzdHMgb2Ygd2hpdGVzcGFjZSwgcmVtb3ZlIGl0LlxuICBpZiAocHJlY2VkaW5nVGV4dFNpYmxpbmcgJiYgL15cXHMrJC8udGVzdChwcmVjZWRpbmdUZXh0U2libGluZy52YWx1ZSkpIHtcbiAgICBjb25zdCB0ZXh0U2libGluZ0xvY2F0aW9uID0gcHJlY2VkaW5nVGV4dFNpYmxpbmcuc291cmNlQ29kZUxvY2F0aW9uITtcbiAgICByZWNvcmRlci5yZW1vdmUoXG4gICAgICAgIHRleHRTaWJsaW5nTG9jYXRpb24uc3RhcnRPZmZzZXQsXG4gICAgICAgIHRleHRTaWJsaW5nTG9jYXRpb24uZW5kT2Zmc2V0IC0gdGV4dFNpYmxpbmdMb2NhdGlvbi5zdGFydE9mZnNldCk7XG4gIH1cbn1cbiJdfQ==