"use strict";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVersionUpgradeData = exports.cdkUpgradeData = void 0;
const version_changes_1 = require("../update-tool/version-changes");
const data_1 = require("./data");
/** Upgrade data for the Angular CDK. */
exports.cdkUpgradeData = {
    attributeSelectors: data_1.attributeSelectors,
    classNames: data_1.classNames,
    constructorChecks: data_1.constructorChecks,
    cssSelectors: data_1.cssSelectors,
    elementSelectors: data_1.elementSelectors,
    inputNames: data_1.inputNames,
    methodCallChecks: data_1.methodCallChecks,
    outputNames: data_1.outputNames,
    propertyNames: data_1.propertyNames,
};
/**
 * Gets the reduced upgrade data for the specified data key. The function reads out the
 * target version and upgrade data object from the migration and resolves the specified
 * data portion that is specifically tied to the target version.
 */
function getVersionUpgradeData(migration, dataName) {
    // Note that below we need to cast to `unknown` first TS doesn't infer the type of T correctly.
    return version_changes_1.getChangesForTarget(migration.targetVersion, migration.upgradeData[dataName]);
}
exports.getVersionUpgradeData = getVersionUpgradeData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBncmFkZS1kYXRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9zY2hlbWF0aWNzL25nLXVwZGF0ZS91cGdyYWRlLWRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRzs7O0FBR0gsb0VBQW1HO0FBQ25HLGlDQW1CZ0I7QUFHaEIsd0NBQXdDO0FBQzNCLFFBQUEsY0FBYyxHQUFnQjtJQUN6QyxrQkFBa0IsRUFBbEIseUJBQWtCO0lBQ2xCLFVBQVUsRUFBVixpQkFBVTtJQUNWLGlCQUFpQixFQUFqQix3QkFBaUI7SUFDakIsWUFBWSxFQUFaLG1CQUFZO0lBQ1osZ0JBQWdCLEVBQWhCLHVCQUFnQjtJQUNoQixVQUFVLEVBQVYsaUJBQVU7SUFDVixnQkFBZ0IsRUFBaEIsdUJBQWdCO0lBQ2hCLFdBQVcsRUFBWCxrQkFBVztJQUNYLGFBQWEsRUFBYixvQkFBYTtDQUNkLENBQUM7QUFrQkY7Ozs7R0FJRztBQUNILFNBQ0EscUJBQXFCLENBQ2pCLFNBQWlDLEVBQUUsUUFBVztJQUNoRCwrRkFBK0Y7SUFDL0YsT0FBTyxxQ0FBbUIsQ0FDdEIsU0FBUyxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBaUMsQ0FBQyxDQUFDO0FBQ2hHLENBQUM7QUFORCxzREFNQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge01pZ3JhdGlvbn0gZnJvbSAnLi4vdXBkYXRlLXRvb2wvbWlncmF0aW9uJztcbmltcG9ydCB7Z2V0Q2hhbmdlc0ZvclRhcmdldCwgVmFsdWVPZkNoYW5nZXMsIFZlcnNpb25DaGFuZ2VzfSBmcm9tICcuLi91cGRhdGUtdG9vbC92ZXJzaW9uLWNoYW5nZXMnO1xuaW1wb3J0IHtcbiAgYXR0cmlidXRlU2VsZWN0b3JzLFxuICBBdHRyaWJ1dGVTZWxlY3RvclVwZ3JhZGVEYXRhLFxuICBjbGFzc05hbWVzLFxuICBDbGFzc05hbWVVcGdyYWRlRGF0YSxcbiAgY29uc3RydWN0b3JDaGVja3MsXG4gIENvbnN0cnVjdG9yQ2hlY2tzVXBncmFkZURhdGEsXG4gIGNzc1NlbGVjdG9ycyxcbiAgQ3NzU2VsZWN0b3JVcGdyYWRlRGF0YSxcbiAgZWxlbWVudFNlbGVjdG9ycyxcbiAgRWxlbWVudFNlbGVjdG9yVXBncmFkZURhdGEsXG4gIGlucHV0TmFtZXMsXG4gIElucHV0TmFtZVVwZ3JhZGVEYXRhLFxuICBtZXRob2RDYWxsQ2hlY2tzLFxuICBNZXRob2RDYWxsVXBncmFkZURhdGEsXG4gIG91dHB1dE5hbWVzLFxuICBPdXRwdXROYW1lVXBncmFkZURhdGEsXG4gIHByb3BlcnR5TmFtZXMsXG4gIFByb3BlcnR5TmFtZVVwZ3JhZGVEYXRhLFxufSBmcm9tICcuL2RhdGEnO1xuXG5cbi8qKiBVcGdyYWRlIGRhdGEgZm9yIHRoZSBBbmd1bGFyIENESy4gKi9cbmV4cG9ydCBjb25zdCBjZGtVcGdyYWRlRGF0YTogVXBncmFkZURhdGEgPSB7XG4gIGF0dHJpYnV0ZVNlbGVjdG9ycyxcbiAgY2xhc3NOYW1lcyxcbiAgY29uc3RydWN0b3JDaGVja3MsXG4gIGNzc1NlbGVjdG9ycyxcbiAgZWxlbWVudFNlbGVjdG9ycyxcbiAgaW5wdXROYW1lcyxcbiAgbWV0aG9kQ2FsbENoZWNrcyxcbiAgb3V0cHV0TmFtZXMsXG4gIHByb3BlcnR5TmFtZXMsXG59O1xuXG4vKipcbiAqIEludGVyZmFjZSB0aGF0IGRlc2NyaWJlcyB0aGUgdXBncmFkZSBkYXRhIHRoYXQgbmVlZHMgdG8gYmUgZGVmaW5lZCB3aGVuIHVzaW5nIHRoZSBDREtcbiAqIHVwZ3JhZGUgcnVsZXMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVXBncmFkZURhdGEge1xuICBhdHRyaWJ1dGVTZWxlY3RvcnM6IFZlcnNpb25DaGFuZ2VzPEF0dHJpYnV0ZVNlbGVjdG9yVXBncmFkZURhdGE+O1xuICBjbGFzc05hbWVzOiBWZXJzaW9uQ2hhbmdlczxDbGFzc05hbWVVcGdyYWRlRGF0YT47XG4gIGNvbnN0cnVjdG9yQ2hlY2tzOiBWZXJzaW9uQ2hhbmdlczxDb25zdHJ1Y3RvckNoZWNrc1VwZ3JhZGVEYXRhPjtcbiAgY3NzU2VsZWN0b3JzOiBWZXJzaW9uQ2hhbmdlczxDc3NTZWxlY3RvclVwZ3JhZGVEYXRhPjtcbiAgZWxlbWVudFNlbGVjdG9yczogVmVyc2lvbkNoYW5nZXM8RWxlbWVudFNlbGVjdG9yVXBncmFkZURhdGE+O1xuICBpbnB1dE5hbWVzOiBWZXJzaW9uQ2hhbmdlczxJbnB1dE5hbWVVcGdyYWRlRGF0YT47XG4gIG1ldGhvZENhbGxDaGVja3M6IFZlcnNpb25DaGFuZ2VzPE1ldGhvZENhbGxVcGdyYWRlRGF0YT47XG4gIG91dHB1dE5hbWVzOiBWZXJzaW9uQ2hhbmdlczxPdXRwdXROYW1lVXBncmFkZURhdGE+O1xuICBwcm9wZXJ0eU5hbWVzOiBWZXJzaW9uQ2hhbmdlczxQcm9wZXJ0eU5hbWVVcGdyYWRlRGF0YT47XG59XG5cbi8qKlxuICogR2V0cyB0aGUgcmVkdWNlZCB1cGdyYWRlIGRhdGEgZm9yIHRoZSBzcGVjaWZpZWQgZGF0YSBrZXkuIFRoZSBmdW5jdGlvbiByZWFkcyBvdXQgdGhlXG4gKiB0YXJnZXQgdmVyc2lvbiBhbmQgdXBncmFkZSBkYXRhIG9iamVjdCBmcm9tIHRoZSBtaWdyYXRpb24gYW5kIHJlc29sdmVzIHRoZSBzcGVjaWZpZWRcbiAqIGRhdGEgcG9ydGlvbiB0aGF0IGlzIHNwZWNpZmljYWxseSB0aWVkIHRvIHRoZSB0YXJnZXQgdmVyc2lvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uXG5nZXRWZXJzaW9uVXBncmFkZURhdGE8VCBleHRlbmRzIGtleW9mIFVwZ3JhZGVEYXRhLCBVID0gVmFsdWVPZkNoYW5nZXM8VXBncmFkZURhdGFbVF0+PihcbiAgICBtaWdyYXRpb246IE1pZ3JhdGlvbjxVcGdyYWRlRGF0YT4sIGRhdGFOYW1lOiBUKTogVVtdIHtcbiAgLy8gTm90ZSB0aGF0IGJlbG93IHdlIG5lZWQgdG8gY2FzdCB0byBgdW5rbm93bmAgZmlyc3QgVFMgZG9lc24ndCBpbmZlciB0aGUgdHlwZSBvZiBUIGNvcnJlY3RseS5cbiAgcmV0dXJuIGdldENoYW5nZXNGb3JUYXJnZXQ8VT4oXG4gICAgICBtaWdyYXRpb24udGFyZ2V0VmVyc2lvbiwgbWlncmF0aW9uLnVwZ3JhZGVEYXRhW2RhdGFOYW1lXSBhcyB1bmtub3duIGFzIFZlcnNpb25DaGFuZ2VzPFU+KTtcbn1cbiJdfQ==