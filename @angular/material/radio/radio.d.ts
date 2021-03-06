/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';
import { BooleanInput, NumberInput } from '@angular/cdk/coercion';
import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import { AfterContentInit, AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, InjectionToken, OnDestroy, OnInit, QueryList } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { CanDisableRipple, CanDisableRippleCtor, HasTabIndex, HasTabIndexCtor, ThemePalette } from '@angular/material/core';
export interface MatRadioDefaultOptions {
    color: ThemePalette;
}
export declare const MAT_RADIO_DEFAULT_OPTIONS: InjectionToken<MatRadioDefaultOptions>;
export declare function MAT_RADIO_DEFAULT_OPTIONS_FACTORY(): MatRadioDefaultOptions;
/**
 * Provider Expression that allows mat-radio-group to register as a ControlValueAccessor. This
 * allows it to support [(ngModel)] and ngControl.
 * @docs-private
 */
export declare const MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR: any;
/** Change event object emitted by MatRadio and MatRadioGroup. */
export declare class MatRadioChange {
    /** The MatRadioButton that emits the change event. */
    source: _MatRadioButtonBase;
    /** The value of the MatRadioButton. */
    value: any;
    constructor(
    /** The MatRadioButton that emits the change event. */
    source: _MatRadioButtonBase, 
    /** The value of the MatRadioButton. */
    value: any);
}
/**
 * Injection token that can be used to inject instances of `MatRadioGroup`. It serves as
 * alternative token to the actual `MatRadioGroup` class which could cause unnecessary
 * retention of the class and its component metadata.
 */
export declare const MAT_RADIO_GROUP: InjectionToken<_MatRadioGroupBase<_MatRadioButtonBase>>;
/**
 * Base class with all of the `MatRadioGroup` functionality.
 * @docs-private
 */
export declare abstract class _MatRadioGroupBase<T extends _MatRadioButtonBase> implements AfterContentInit, ControlValueAccessor {
    private _changeDetector;
    /** Selected value for the radio group. */
    private _value;
    /** The HTML name attribute applied to radio buttons in this group. */
    private _name;
    /** The currently selected radio button. Should match value. */
    private _selected;
    /** Whether the `value` has been set to its initial value. */
    private _isInitialized;
    /** Whether the labels should appear after or before the radio-buttons. Defaults to 'after' */
    private _labelPosition;
    /** Whether the radio group is disabled. */
    private _disabled;
    /** Whether the radio group is required. */
    private _required;
    /** The method to be called in order to update ngModel */
    _controlValueAccessorChangeFn: (value: any) => void;
    /**
     * onTouch function registered via registerOnTouch (ControlValueAccessor).
     * @docs-private
     */
    onTouched: () => any;
    /**
     * Event emitted when the group value changes.
     * Change events are only emitted when the value changes due to user interaction with
     * a radio button (the same behavior as `<input type-"radio">`).
     */
    readonly change: EventEmitter<MatRadioChange>;
    /** Child radio buttons. */
    abstract _radios: QueryList<T>;
    /** Theme color for all of the radio buttons in the group. */
    color: ThemePalette;
    /** Name of the radio button group. All radio buttons inside this group will use this name. */
    get name(): string;
    set name(value: string);
    /** Whether the labels should appear after or before the radio-buttons. Defaults to 'after' */
    get labelPosition(): 'before' | 'after';
    set labelPosition(v: 'before' | 'after');
    /**
     * Value for the radio-group. Should equal the value of the selected radio button if there is
     * a corresponding radio button with a matching value. If there is not such a corresponding
     * radio button, this value persists to be applied in case a new radio button is added with a
     * matching value.
     */
    get value(): any;
    set value(newValue: any);
    _checkSelectedRadioButton(): void;
    /**
     * The currently selected radio button. If set to a new radio button, the radio group value
     * will be updated to match the new selected button.
     */
    get selected(): T | null;
    set selected(selected: T | null);
    /** Whether the radio group is disabled */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Whether the radio group is required */
    get required(): boolean;
    set required(value: boolean);
    constructor(_changeDetector: ChangeDetectorRef);
    /**
     * Initialize properties once content children are available.
     * This allows us to propagate relevant attributes to associated buttons.
     */
    ngAfterContentInit(): void;
    /**
     * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
     * radio buttons upon their blur.
     */
    _touch(): void;
    private _updateRadioButtonNames;
    /** Updates the `selected` radio button from the internal _value state. */
    private _updateSelectedRadioFromValue;
    /** Dispatch change event with current selection and group value. */
    _emitChangeEvent(): void;
    _markRadiosForCheck(): void;
    /**
     * Sets the model value. Implemented as part of ControlValueAccessor.
     * @param value
     */
    writeValue(value: any): void;
    /**
     * Registers a callback to be triggered when the model value changes.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be registered.
     */
    registerOnChange(fn: (value: any) => void): void;
    /**
     * Registers a callback to be triggered when the control is touched.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be registered.
     */
    registerOnTouched(fn: any): void;
    /**
     * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
     * @param isDisabled Whether the control should be disabled.
     */
    setDisabledState(isDisabled: boolean): void;
    static ngAcceptInputType_disabled: BooleanInput;
    static ngAcceptInputType_required: BooleanInput;
}
/**
 * A group of radio buttons. May contain one or more `<mat-radio-button>` elements.
 */
export declare class MatRadioGroup extends _MatRadioGroupBase<MatRadioButton> {
    _radios: QueryList<MatRadioButton>;
}
/** @docs-private */
declare abstract class MatRadioButtonBase {
    _elementRef: ElementRef;
    abstract disabled: boolean;
    constructor(_elementRef: ElementRef);
}
declare const _MatRadioButtonMixinBase: CanDisableRippleCtor & HasTabIndexCtor & typeof MatRadioButtonBase;
/**
 * Base class with all of the `MatRadioButton` functionality.
 * @docs-private
 */
export declare abstract class _MatRadioButtonBase extends _MatRadioButtonMixinBase implements OnInit, AfterViewInit, OnDestroy, CanDisableRipple, HasTabIndex {
    protected _changeDetector: ChangeDetectorRef;
    private _focusMonitor;
    private _radioDispatcher;
    private _providerOverride?;
    private _uniqueId;
    /** The unique ID for the radio button. */
    id: string;
    /** Analog to HTML 'name' attribute used to group radios for unique selection. */
    name: string;
    /** Used to set the 'aria-label' attribute on the underlying input element. */
    ariaLabel: string;
    /** The 'aria-labelledby' attribute takes precedence as the element's text alternative. */
    ariaLabelledby: string;
    /** The 'aria-describedby' attribute is read after the element's label and field type. */
    ariaDescribedby: string;
    /** Whether this radio button is checked. */
    get checked(): boolean;
    set checked(value: boolean);
    /** The value of this radio button. */
    get value(): any;
    set value(value: any);
    /** Whether the label should appear after or before the radio button. Defaults to 'after' */
    get labelPosition(): 'before' | 'after';
    set labelPosition(value: 'before' | 'after');
    private _labelPosition;
    /** Whether the radio button is disabled. */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Whether the radio button is required. */
    get required(): boolean;
    set required(value: boolean);
    /** Theme color of the radio button. */
    get color(): ThemePalette;
    set color(newValue: ThemePalette);
    private _color;
    /**
     * Event emitted when the checked state of this radio button changes.
     * Change events are only emitted when the value changes due to user interaction with
     * the radio button (the same behavior as `<input type-"radio">`).
     */
    readonly change: EventEmitter<MatRadioChange>;
    /** The parent radio group. May or may not be present. */
    radioGroup: _MatRadioGroupBase<_MatRadioButtonBase>;
    /** ID of the native input element inside `<mat-radio-button>` */
    get inputId(): string;
    /** Whether this radio is checked. */
    private _checked;
    /** Whether this radio is disabled. */
    private _disabled;
    /** Whether this radio is required. */
    private _required;
    /** Value assigned to this radio. */
    private _value;
    /** Unregister function for _radioDispatcher */
    private _removeUniqueSelectionListener;
    /** The native `<input type=radio>` element */
    _inputElement: ElementRef<HTMLInputElement>;
    /** Whether animations are disabled. */
    _noopAnimations: boolean;
    constructor(radioGroup: _MatRadioGroupBase<_MatRadioButtonBase>, elementRef: ElementRef, _changeDetector: ChangeDetectorRef, _focusMonitor: FocusMonitor, _radioDispatcher: UniqueSelectionDispatcher, animationMode?: string, _providerOverride?: MatRadioDefaultOptions | undefined, tabIndex?: string);
    /** Focuses the radio button. */
    focus(options?: FocusOptions, origin?: FocusOrigin): void;
    /**
     * Marks the radio button as needing checking for change detection.
     * This method is exposed because the parent radio group will directly
     * update bound properties of the radio button.
     */
    _markForCheck(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    /** Dispatch change event with current value. */
    private _emitChangeEvent;
    _isRippleDisabled(): boolean;
    _onInputClick(event: Event): void;
    /**
     * Triggered when the radio button received a click or the input recognized any change.
     * Clicking on a label element, will trigger a change event on the associated input.
     */
    _onInputChange(event: Event): void;
    /** Sets the disabled state and marks for check if a change occurred. */
    protected _setDisabled(value: boolean): void;
    static ngAcceptInputType_checked: BooleanInput;
    static ngAcceptInputType_disabled: BooleanInput;
    static ngAcceptInputType_required: BooleanInput;
    static ngAcceptInputType_disableRipple: BooleanInput;
    static ngAcceptInputType_tabIndex: NumberInput;
}
/**
 * A Material design radio-button. Typically placed inside of `<mat-radio-group>` elements.
 */
export declare class MatRadioButton extends _MatRadioButtonBase {
    constructor(radioGroup: MatRadioGroup, elementRef: ElementRef, changeDetector: ChangeDetectorRef, focusMonitor: FocusMonitor, radioDispatcher: UniqueSelectionDispatcher, animationMode?: string, providerOverride?: MatRadioDefaultOptions, tabIndex?: string);
}
export {};
