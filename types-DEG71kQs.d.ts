import { t as error_d_exports } from "./error-DaAofQGb.js";
import { n as promise_d_exports } from "./promise-8SAFxUcZ.js";
import { s as proxy_d_exports } from "./proxy-Be0aNX-9.js";
import { n as ReactNavigationParamList } from "./react-navigation-C0E6Cr3d.js";
import { ComponentProps, ComponentType, FC, ForwardRefExoticComponent, MemoExoticComponent, ReactElement, ReactNode, RefAttributes, RefObject } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { ColorValue, ImageProps, ImageSourcePropType, ImageStyle, LayoutRectangle, NativeScrollEvent, PressableProps, ScrollView, ScrollViewProps, StyleProp, TextInputProps as TextInputProps$1, TextProps as TextProps$1, TextStyle, View, ViewProps, ViewStyle } from "react-native";
import { NativeGesture } from "react-native-gesture-handler";
import { AnimatedRef, SharedValue } from "react-native-reanimated";
import * as NodeBuffer from "buffer";
declare namespace bitset_d_exports {
  export { BitSet, bitSetAdd, bitSetCapacity, bitSetGrow, bitSetHas, bitSetRemove, createBitSet };
}
type BitSet = Uint32Array;
declare const createBitSet: (sizeInBits: number) => BitSet;
declare const bitSetCapacity: (bs: BitSet) => number;
declare const bitSetAdd: (bs: BitSet, id: number) => void;
declare const bitSetHas: (bs: BitSet, id: number) => boolean;
declare const bitSetRemove: (bs: BitSet, id: number) => void;
declare const bitSetGrow: (oldBs: Uint32Array, requiredSizeInBits: number) => BitSet;
declare namespace callback_d_exports {
  export { asap, debounce, noop };
}
declare function debounce<F extends (...args: any[]) => any>(func: F, timeout: number): (...args: Parameters<F>) => Promise<unknown>;
/**
 * A non-blocking function that runs the callback as soon as possible.
 * @param cb The callback to run.
 */
declare const asap: (cb: AnyFunction) => void;
declare const noop: () => void;
declare namespace object_d_exports {
  export { cloneDeep, defineLazyProperties, defineLazyProperty, isObject, mergeDeep };
}
/**
 * Simple check if to see if value is an object.
 *
 * @param val The value to check.
 */
declare function isObject(val: any): val is AnyObject;
/**
 * Clone an object deeply.
 *
 * @param source The source object to clone.
 */
declare function cloneDeep<T>(source: T, cache?: WeakMap<WeakKey, any>): T;
/**
 * Deep merge two objects.
 *
 * @param target The object to merge into.
 * @param source The object to merge from.
 *
 * @returns The merged target.
 */
declare function mergeDeep(target: AnyObject, source: AnyObject): AnyObject;
/**
 * Define a lazy property on an object that will be loaded when accessed.
 *
 * @param target The target object to define the property on.
 * @param property The property key to define.
 * @param loader The function that will be called to load the property value when accessed.
 * @return The target object with the lazy property defined.
 */
declare function defineLazyProperty<T extends object, K extends keyof T>(target: T, property: K, loader: () => T[K]): T;
/**
 * Define multiple lazy properties on an object that will be loaded when accessed.
 *
 * @param target The target object to define the properties on.
 * @param loaders An object where each key is a property name and the value is a function that returns the property value when accessed.
 * @returns The target object with the lazy properties defined.
 */
declare function defineLazyProperties<T extends object>(target: T, loaders: Partial<Record<keyof T, () => T[keyof T]>>): T;
declare namespace tree_d_exports {
  export { FindInTreeOptions, SearchFilter, SearchTree, findInTree };
}
type SearchTree = Record<string, any>;
type SearchFilter = (tree: SearchTree) => boolean;
interface FindInTreeOptions {
  /**
   * A set of keys to search for in the tree.
   */
  walkable?: Set<string>;
  /**
   * A set of keys to ignore when searching the tree.
   */
  ignore?: Set<string>;
  /**
   * The maximum depth to search in the tree.
   *
   * @default 100
   */
  maxDepth?: number;
}
declare function findInTree<F extends SearchFilter>(tree: SearchTree, filter: F, opts?: FindInTreeOptions): ExtractPredicate<F> | undefined;
declare namespace react_d_exports {
  export { findInReactFiber, useIsFirstRender, useReRender };
}
declare function useIsFirstRender(): boolean;
declare function useReRender(): import("react").ActionDispatch<[]>;
declare function findInReactFiber<F extends SearchFilter>(fiber: ReactElement, filter: F): ExtractPredicate<F> | undefined;
//#endregion
//#region lib/modules/src/finders/filters/constants.d.ts
/**
 * Scopes to limit filters to certain module states.
 */
declare const FilterScopes: {
  /**
   * Include all modules (both initialized and uninitialized, including blacklisted).
   * This overrides {@link FilterScopes.Uninitialized} and {@link FilterScopes.Initialized}.
   *
   * **Filter generators generally don't need this scope.**
   *
   * When combining multiple filters with composite filters, the {@link FilterScopes.All} scope doesn't set assumptions for the filter predicate.
   * It only decides which modules to run the predicate against.
   * **Filter generators must include {@link FilterScopes.Uninitialized} and/or {@link FilterScopes.Initialized} as well.**
   */
  readonly All: 1;
  /**
   * Include uninitialized modules in the search. Implies the predicate can run without exports.
   */
  readonly Uninitialized: 2;
  /**
   * Include initialized modules from the search.
   */
  readonly Initialized: 4;
};
type FilterScope = (typeof FilterScopes)[keyof typeof FilterScopes];
/**
 * @see {@link FilterScopes}
 */
type FilterScopeValue = number;
interface FilterInfo {
  /**
   * The result type of the filter.
   */
  Result: any;
  /**
   * Scopes the filter matches modules in.
   */
  Scopes: FilterScope[];
}
interface DefaultFilterInfo extends FilterInfo {
  Result: any;
  Scopes: FilterScope[];
}
//#endregion
//#region lib/discord/src/types/api.d.ts
declare module '@valenced/plugins/types' {
  interface InitPluginApi<O extends PluginApiExtensionsOptions> {
    logger: DiscordModules.Logger;
  }
}
//#endregion
//#region lib/discord/src/types/polyfills.d.ts
declare global {
  var Buffer: typeof NodeBuffer.Buffer;
}
//#endregion
//#region lib/discord/src/types/index.d.ts
declare namespace DiscordModules {
  namespace Flux {
    interface DispatcherPayload {
      type: string;
      [key: PropertyKey]: any;
    }
    type DispatcherDependency = any;
    interface StoreChangeCallbacks {
      add(cb: () => void): void;
      addConditional(cb: () => boolean): void;
      listeners: Set<() => void>;
      remove(cb: () => void): void;
      has(cb: () => void): boolean;
      hasAny(): boolean;
      invokeAll(): void;
    }
    type Store<T = object> = T & {
      addChangeListener(cb: () => void): void;
      removeChangeListener(cb: () => void): void;
      addReactChangeListener(cb: () => void): void;
      removeReactChangeListener(cb: () => void): void;
      addConditionalChangeListener(cb: () => boolean): void;
      callback(cb: () => void): void;
      throttledCallback(): unknown;
      getName(): string;
      __getLocalVars?(): object;
      _changeCallbacks: StoreChangeCallbacks;
      _isInitialized: boolean;
      _version: number;
      _reactChangeCallbacks: StoreChangeCallbacks;
      _dispatchToken: string;
    };
    interface Dispatcher {
      _actionHandlers: unknown;
      _interceptors?: ((payload: DispatcherPayload) => undefined | boolean)[];
      _currentDispatchActionType: undefined | string;
      _processingWaitQueue: boolean;
      _subscriptions: Record<string, Set<(payload: DispatcherPayload) => void>>;
      _waitQueue: unknown[];
      addDependencies(node1: DispatcherDependency, node2: DispatcherDependency): void;
      dispatch(payload: DispatcherPayload): Promise<void>;
      flushWaitQueue(): void;
      isDispatching(): boolean;
      register(name: string, actionHandler: Record<string, (e: DispatcherPayload) => void>, storeDidChange: (e: DispatcherPayload) => boolean): string;
      setInterceptor(interceptor?: (payload: DispatcherPayload) => undefined | boolean): void;
      /**
       * Subscribes to an action type
       * @param actionType The action type to subscribe to
       * @param callback The callback to call when the action is dispatched
       */
      subscribe(actionType: string, callback: (payload: DispatcherPayload) => void): void;
      /**
       * Unsubscribes from an action type
       * @param actionType The action type to unsubscribe from
       * @param callback The callback to remove
       */
      unsubscribe(actionType: string, callback: (payload: DispatcherPayload) => void): void;
      wait(cb: () => void): void;
    }
  }
  namespace AppStartPerformance {
    type MarkArgs = [emoji: string, log: string, delta?: number];
  }
  interface AppStartPerformance {
    mark(...args: AppStartPerformance.MarkArgs): void;
    markAndLog(logger: Logger, ...args: AppStartPerformance.MarkArgs): void;
    [index: string]: unknown;
  }
  interface Constants {
    [K: string]: string | number | boolean | null | AnyFunction | Constants;
  }
  /**
   * Discord's `Logger` class.
   *
   * Logs will be shown in the **Debug Logs** section in settings.
   */
  class Logger {
    constructor(tag: string);
    logDangerously(...args: unknown[]): void;
    log(...args: unknown[]): void;
    error(...args: unknown[]): void;
    warn(...args: unknown[]): void;
    info(...args: unknown[]): void;
    time(...args: unknown[]): void;
    trace(...args: unknown[]): void;
    fileOnly(...args: unknown[]): void;
    verboseDangerously(...args: unknown[]): void;
    verbose(...args: unknown[]): void;
  }
  namespace Actions {
    interface AlertActionCreators {
      openAlert(key: string, alert: ReactElement, onDismiss?: () => unknown, options?: {
        dismissable?: boolean;
      }): void;
      dismissAlert(key: string): void;
      dismissAlerts(): void;
      useAlertStore(): unknown;
    }
    interface ToastActionCreators {
      open(key: string, options: {
        text: ReactNode;
        icon?: Components.BaseIconImage | {
          alt: string;
          src: string;
          type: 'emoji';
        } | {
          alt: string;
          src: string;
          type: 'avatar';
        } | {
          name: string;
          src: string | null;
          type: 'guild';
        };
        /** Discord semantic color token. */
        iconColor?: any;
        /** Discord semantic color token. */
        secondaryIconColor?: any;
        variant?: 'default' | 'success' | 'critical';
        duration?: number;
      }): void;
      /** @deprecated Use the other overload on 350204+ */
      open(options: {
        key: string;
        content?: string;
        icon?: number | FC;
        IconComponent?: Components.BaseIconImage;
        /**
         * The icon's color, same string format as `<Text>`'s color prop
         */
        iconColor?: string;
        containerStyle?: ViewStyle;
        /**
         * How long the toast should be shown.
         * @deprecated This will no longer work after Mana toast components.
         */
        toastDurationMs?: number;
      }): void;
      close(): void;
    }
    interface ActionSheetActionCreators {
      openLazy<T extends ComponentType<any>>(sheet: Promise<{
        default: T;
      }>, key: string, props: {
        impressionName?: string;
        impressionProperties?: AnyObject;
        backdropKind?: string;
        disableHapticOnOpen?: boolean;
        appEntryKey?: string;
      } & ComponentProps<T>, stackingBehavior?: 'replaceTopSheet' | 'replaceAll' | 'stack'): void;
      hideActionSheet(key?: string): void;
      hideAllActionSheets(): void;
      setActionSheetZIndex(zIndex: number): void;
      resetActionSheetsForAppEntryKey(appEntryKey: string): void;
    }
  }
  namespace Components {
    namespace Styles {
      type TextType = 'heading' | 'text';
      type BasicTextSize = 'sm' | 'md' | 'lg';
      type BasicTextSizeWithExtraLarges = BasicTextSize | 'xl' | 'xxl';
      type TextSize = BasicTextSizeWithExtraLarges | 'xs' | 'xxs';
      type TextWeight = 'normal' | 'medium' | 'semibold' | 'bold';
      type TextWeightWithExtraBold = TextWeight | 'extrabold';
      type RedesignTextCategory = 'message-preview' | 'channel-title';
      type TextVariant = `heading-${BasicTextSizeWithExtraLarges}/${TextWeightWithExtraBold}` | `text-${TextSize}/${TextWeight}` | `display-${BasicTextSize}` | `redesign/${RedesignTextCategory}/${TextWeight}` | 'redesign/heading-18/bold' | 'redesign/heading-18/semibold' | 'eyebrow';
      type TextStyleSheet = Record<TextVariant, TextStyle>;
      type CreateStylesFunction = <const S extends Record<string, TextStyle | ViewStyle | ImageStyle>>(styles: S) => () => S;
    }
    type UseTooltipFunction = (ref: RefObject<View | null>, props: UseTooltipFunctionProps) => unknown;
    interface UseTooltipFunctionProps {
      label: string;
      position?: 'top' | 'bottom';
      visible?: boolean;
      onPress?: () => void;
    }
    interface BaseButtonProps extends PressableProps, RefAttributes<View> {
      disabled?: boolean;
      size?: ButtonSize;
      variant?: 'primary' | 'secondary' | 'tertiary' | 'destructive' | 'active' | 'expressive' | 'primary-overlay' | 'secondary-overlay';
      loading?: boolean;
      grow?: boolean;
      scaleAmountInPx?: number;
    }
    interface ButtonProps extends BaseButtonProps {
      icon?: number;
      loading?: boolean;
      iconPosition?: 'start' | 'end';
      renderIcon?(): ReactNode;
      renderRightIcon?(): ReactNode;
      renderShine?(): ReactNode;
      renderLinearGradient?(): ReactNode;
      cornerRadius?: number;
      textStyle?: TextStyle;
      loadingColorLight?: string;
      loadingColorDark?: string;
      text: string;
    }
    type ButtonSize = 'sm' | 'md' | 'lg';
    type Button = FC<ButtonProps>;
    interface IconButtonProps extends BaseButtonProps {
      icon: number;
      label?: string;
    }
    type IconButton = FC<IconButtonProps>;
    interface ImageButtonProps extends BaseButtonProps {
      image: ImageSourcePropType;
    }
    type ImageButton = FC<ImageButtonProps>;
    interface FloatingActionButtonProps {
      icon: number;
      onPress: () => void;
      disabled?: boolean;
      positionBottom?: number;
      accessibilityLabel?: string;
    }
    type FloatingActionButton = FC<FloatingActionButtonProps>;
    interface StackProps extends ViewProps {
      spacing?: number;
      align?: ViewStyle['alignItems'];
      justify?: ViewStyle['justifyContent'];
      direction?: 'vertical' | 'horizontal';
    }
    type Stack = FC<StackProps>;
    interface CardProps extends ViewProps {
      start?: boolean;
      end?: boolean;
      variant?: 'primary' | 'secondary' | 'transparent';
      border?: 'faint' | 'normal' | 'strong' | 'subtle' | 'none';
      shadow?: 'none' | 'low' | 'medium' | 'high' | 'border' | 'ledge';
      children: ReactNode;
    }
    type Card = FC<CardProps>;
    interface TextFieldProps {
      onChange?: (value: string) => void;
      onBlur?: () => void;
      onFocus?: () => void;
      leadingIcon?: FC;
      trailingIcon?: FC;
      leadingText?: string;
      trailingText?: string;
      description?: string;
      errorMessage?: string;
      isDisabled?: boolean;
      focusable?: boolean;
      editable?: boolean;
      status?: TextFieldStatus;
      defaultValue?: string;
      value?: string;
      placeholder?: string;
      placeholderTextColor?: string;
      maxLength?: number;
      multiline?: boolean;
      autoFocus?: boolean;
      secureTextEntry?: boolean;
      returnKeyType?: TextInputProps$1['returnKeyType'];
      isClearable?: boolean;
      clearable?: boolean;
      onClear?: () => void;
      size?: TextFieldSize;
      style?: StyleProp<ViewStyle>;
    }
    type TextFieldSize = 'sm' | 'md' | 'lg';
    type TextFieldStatus = 'default' | 'error';
    interface TextInputProps extends TextFieldProps {
      label?: string;
    }
    interface TextAreaProps extends Omit<TextInputProps, 'multiline'> {}
    type TextInput = FC<TextInputProps>;
    type TextField = FC<TextFieldProps>;
    type TextArea = FC<TextAreaProps>;
    interface FormSwitchProps extends ViewProps {
      value: boolean;
      onValueChange(value: boolean): void;
      disabled?: boolean;
    }
    type FormSwitch = FC<FormSwitchProps>;
    interface FormRadioProps {
      selected: boolean | null;
    }
    type FormRadio = FC<FormRadioProps>;
    interface CheckboxProps {
      checked: boolean;
      description?: string;
      label?: string;
      onToggle?: (checked: boolean) => void;
      required?: boolean;
    }
    type Checkbox = FC<CheckboxProps>;
    interface ActionSheetProps {
      scrollable?: boolean;
      startExpanded?: boolean;
      /** Whether the bottom sheet handle is disabled. */
      handleDisabled?: boolean;
      showGradient?: boolean;
      startHeight?: number;
      maxHeight?: number;
      containerHeight?: number;
      contentHeight?: number;
      backdropOpacity?: number;
      children?: ReactNode;
      header?: ReactNode;
      footer?: ReactNode;
      extraContent?: ReactNode;
      backdropChildren?: ReactNode;
      handleComponent?: ComponentType<any> | null;
      backgroundComponent?: ComponentType<any>;
      bodyStyles?: StyleProp<ViewStyle>;
      contentStyles?: StyleProp<ViewStyle>;
      backgroundStyles?: StyleProp<ViewStyle>;
      borderGradient?: string[] | Record<string, any>;
      onExpand?: () => void;
      onDismiss?: () => void;
      animatedIndex?: unknown;
      keyboardShouldPersistTaps?: 'always' | 'never' | 'handled' | boolean;
      dismissAccessibilityLabel?: string;
    }
    type ActionSheet = ForwardRefExoticComponent<ActionSheetProps & RefAttributes<{
      expandActionSheet(): void;
      closeActionSheet(force?: boolean): void;
      collapseActionSheet(): void;
      snapToIndex(index: number): void;
    }>>;
    /** {@link ActionSheet} without the horizontal padding around its content. */
    type BottomSheet = ActionSheet;
    interface ActionSheetCloseButtonProps extends Pick<ComponentProps<IconButton>, 'variant' | 'onPress'> {}
    type ActionSheetCloseButton = FC<ActionSheetCloseButtonProps>;
    type ActionSheetRow = TableRow;
    type ActionSheetRowIcon = TableRowIcon;
    type ActionSheetRowGroup = TableRowGroup;
    type ActionSheetSwitchRow = TableSwitchRow;
    interface BottomSheetTitleHeaderProps {
      leading?: ReactNode;
      title: string;
      subtitle?: string;
      trailing?: ReactNode;
    }
    type BottomSheetTitleHeader = FC<BottomSheetTitleHeaderProps>;
    type IconSize = 'extraSmall10' | 'extraSmall' | 'small' | 'small20' | 'medium' | 'large' | 'custom' | 'refreshSmall16' | 'small14';
    type TableRowVariant = 'default' | 'danger';
    interface TableCheckboxRowProps extends Omit<TableRowProps, 'trailing'> {
      checked: boolean;
      value: string;
    }
    type TableCheckboxRow = FC<TableCheckboxRowProps>;
    interface TableRadioGroupProps<T = string> extends TableRowGroupProps {
      children: ReactNode;
      onChange: (value: T) => void;
      value?: T;
      defaultValue?: T;
    }
    interface TableRadioRowProps<T = any> extends TableRowProps {
      label: string;
      value: T;
    }
    function TableRadioGroup<T>(props: TableRadioGroupProps<T>): ReactElement;
    function TableRadioRow<T>(props: TableRadioRowProps<T>): ReactElement;
    interface TableRowProps {
      label: ReactNode;
      subLabel?: ReactNode;
      icon?: ReactNode;
      trailing?: ReactNode;
      arrow?: boolean;
      onPress?: PressableProps['onPress'];
      disabled?: boolean;
      draggable?: boolean;
      dragHandlePressableProps?: PressableProps;
      labelLineClamp?: number;
      subLabelLineClamp?: number;
      start?: boolean;
      end?: boolean;
      variant?: TableRowVariant;
    }
    interface TableRow extends FC<TableRowProps> {
      Arrow: FC;
      Icon: TableRowIcon;
      Group: TableRowGroup;
      TrailingText: TableRowTrailingText;
    }
    interface TableSwitchRowProps extends Omit<TableRowProps, 'trailing'> {
      accessibilityHint?: string;
      value: boolean;
      onValueChange(value: boolean): void;
    }
    type TableSwitchRow = FC<TableSwitchRowProps>;
    interface TableRowGroupProps {
      title?: string;
      description?: string;
      hasIcons?: boolean;
      accessibilityLabel?: string;
      accessibilityRole?: string;
      children: ReactNode;
    }
    type TableRowGroup = FC<TableRowGroupProps>;
    interface TableRowGroupTitleProps {
      title: string;
    }
    type TableRowGroupTitle = FC<TableRowGroupTitleProps>;
    type TableRowIconVariant = 'default' | 'danger' | 'secondary' | 'translucent';
    interface TableRowIconProps {
      source?: ImageSourcePropType;
      IconComponent?: BaseIconImage;
      variant?: TableRowIconVariant;
    }
    type TableRowIcon = FC<TableRowIconProps>;
    interface TableRowTrailingTextProps {
      text: string;
    }
    type TableRowTrailingText = FC<TableRowTrailingTextProps>;
    interface AlertModalProps {
      title?: ReactNode;
      content?: ReactNode;
      extraContent?: ReactNode;
      actions?: ReactNode;
    }
    type AlertModal = FC<AlertModalProps>;
    type AlertActionButton = Button;
    interface ContextMenuProps {
      title: ReactNode;
      triggerOnLongPress?: boolean;
      items: Array<ContextMenuItem | ContextMenuItem[]>;
      align?: 'left' | 'right' | 'above' | 'below';
      children: (props: Partial<BaseButtonProps>) => ReactNode;
    }
    type ContextMenu = FC<ContextMenuProps>;
    interface ContextMenuItem {
      label: string;
      IconComponent?: BaseIconImage;
      variant?: 'default' | 'destructive';
      action(): void;
    }
    interface TextProps extends TextProps$1 {
      variant?: Styles.TextVariant;
      color?: string;
      style?: StyleProp<TextStyle>;
      lineClamp?: number;
      ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
      tabularNumbers?: boolean;
      children?: ReactNode;
    }
    type Text = FC<TextProps>;
    interface IntlLinkProps {
      target: string;
      children?: ReactNode;
    }
    type IntlLink = FC<IntlLinkProps>;
    interface SliderProps {
      step: number;
      value: number;
      minimumValue: number;
      maximumValue: number;
      onValueChange: (value: number) => void;
      onSlidingStart?: () => void;
      onSlidingComplete?: (value: number) => void;
      startIcon?: ReactNode;
      endIcon?: ReactNode;
    }
    type Slider = FC<SliderProps>;
    interface NavigatorHeaderProps {
      icon?: ReactNode;
      title: string;
      subtitle?: string;
    }
    type NavigatorHeader = FC<NavigatorHeaderProps>;
    interface LayerScopeProps {
      children?: ReactNode;
      zIndex?: number;
    }
    type LayerScope = FC<LayerScopeProps>;
    interface SegmentedControlItem {
      id: string;
      label: string;
      /**
       * The page to render.
       *
       * Only rendered by {@link SegmentedControlPages}.
       */
      page?: ReactNode;
      /**
       * The count to render after the label, formatted by {@link TabsProps.formatCount}.
       *
       * Only rendered by {@link Tabs}.
       */
      count?: number;
      /**
       * The icon to render above the label.
       *
       * Only rendered by {@link SegmentedControl} when its variant is `experimental_Large`.
       */
      icon?: ReactNode;
    }
    interface UseSegmentedControlStateFunctionProps {
      items: SegmentedControlItem[];
      /** The width of a single page. {@link SegmentedControlPages} renders nothing when this is `0`. */
      pageWidth: number;
      /** @default 0 */
      defaultIndex?: number;
      /**
       * The gap between items.
       *
       * @default tokens.space.PX_24
       */
      itemSpacing?: number;
      /** Called once a page has fully scrolled into view. */
      onPageChange?: (index: number) => void;
      /**
       * Called before {@link SegmentedControlState.setActiveIndex} changes the index.
       * The change only happens once `commit` is called.
       */
      onPageChangeStart?: (index: number, commit: () => void) => void;
      /** Called when {@link SegmentedControlState.setActiveIndex} changes the index. */
      onSetActiveIndex?: (index: number) => void;
    }
    interface SegmentedControlState {
      /** The active index. Fractional while the pager is being dragged. */
      activeIndex: SharedValue<number>;
      /** The range of page indices that are currently mounted and unfrozen. */
      visiblePageRange: SharedValue<[start: number, end: number]>;
      /** Ref to {@link SegmentedControlPages}' scroll view. */
      pagerRef: AnimatedRef<ScrollView>;
      /** The scroll offset the pager is animating to, or `-1` when it is not animating. */
      scrollTarget: SharedValue<number>;
      /** How far the pager is overscrolled past its bounds. Used to squish the indicator. */
      scrollOverflow: SharedValue<number>;
      /** The horizontal scroll offset of the {@link Tabs} bar. */
      scrollOffset: SharedValue<number>;
      items: SegmentedControlItem[];
      /** The measured layout of every item, keyed by index. */
      itemDimensions: SharedValue<LayoutRectangle[]>;
      itemSpacing: number;
      pageWidth: number;
      /** The index of the item currently being pressed, or `-1`. */
      pressedIndex: SharedValue<number>;
      onPageChangeRef: RefObject<((index: number) => void) | undefined>;
      /**
       * Scrolls to, and activates, the given index.
       *
       * @param index The index to activate.
       * @param hapticFeedback Whether to trigger haptic feedback. Defaults to `true`.
       * @param immediate Whether to skip the scroll animation. Defaults to `false`.
       */
      setActiveIndex(index: number, hapticFeedback?: boolean, immediate?: boolean): void;
      setItemDimensions(index: number, dimensions: LayoutRectangle): void;
      useReducedMotion: boolean;
    }
    type UseSegmentedControlStateFunction = (props: UseSegmentedControlStateFunctionProps) => SegmentedControlState;
    interface TabsProps {
      state: SegmentedControlState;
      /**
       * Whether items should grow to fill the available width.
       *
       * @default true
       */
      grow?: boolean;
      /**
       * Formats {@link SegmentedControlItem.count}.
       *
       * @default count => count.toLocaleString(locale)
       */
      formatCount?: (count: number) => string;
      /**
       * A gesture the tab bar may be scrolled simultaneously with.
       *
       * Usually {@link SegmentedControlPagesProps.nativeGesture}, so dragging the
       * pager does not cancel the tab bar's own scroll gesture.
       */
      simultaneousHandlers?: NativeGesture;
      /** Worklet called with the horizontal scroll offset of the tab bar. */
      onScrollWorklet?: (offsetX: number) => void;
      /** Worklet called once the user stops dragging the tab bar. */
      onEndDrag?: () => void;
      /** Use `gradient-background` to color the indicator and labels for non-flat backgrounds. */
      variant?: 'gradient-background';
    }
    type Tabs = FC<TabsProps>;
    interface SegmentedControlPagesProps {
      state: SegmentedControlState;
      style?: StyleProp<ViewStyle>;
      bounces?: boolean;
      /**
       * A gesture the pager may be scrolled simultaneously with.
       *
       * The pager is wrapped in a `GestureDetector` for this gesture.
       */
      nativeGesture?: NativeGesture;
      /** Worklet called whenever the pager scrolls. */
      onScrollWorklet?: (event: NativeScrollEvent) => void;
      /** Worklet called once the user starts dragging the pager. */
      onBeginDragWorklet?: (event: NativeScrollEvent) => void;
      /** Worklet called once the user stops dragging the pager. */
      onEndDragWorklet?: (event: NativeScrollEvent) => void;
    }
    type SegmentedControlPages = FC<SegmentedControlPagesProps>;
    interface SegmentedControlProps {
      state: SegmentedControlState;
      /**
       * `experimental_Large` additionally renders {@link SegmentedControlItem.icon}s,
       * doubles the spacing around the indicator, scales labels up, and lets the
       * indicator be dragged between segments.
       *
       * `experimental_Small` only shrinks the vertical padding of the segments.
       *
       * @default 'default'
       */
      variant?: 'default' | 'experimental_Small' | 'experimental_Large';
      /** Forwarded to the underlying horizontal `ScrollView`. */
      keyboardShouldPersistTaps?: ScrollViewProps['keyboardShouldPersistTaps'];
    }
    type SegmentedControl = FC<SegmentedControlProps>;
    interface BaseIconImageProps extends ImageProps {
      /** @default 'md' */
      size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
      /** Color value or Discord's color token. */
      color?: ColorValue | any;
    }
    type BaseIconImage = FC<BaseIconImageProps>;
  }
  namespace Modules {
    namespace Settings {
      export interface SettingListRenderer {
        SettingsList: SettingsList;
        SearchableSettingsList: SearchableSettingsList;
      }
      export interface SettingsListProps {
        containerStyle?: StyleProp<ViewStyle>;
        initialSetting?: string;
        node: {
          type: 'list';
          ListHeaderComponent?: ComponentType;
          ListFooterComponent?: ComponentType;
          sections: Array<{
            label?: string | ReactNode;
            settings: string[];
            subLabel?: string | ReactNode;
          }>;
        };
      }
      export type SettingsList = MemoExoticComponent<FC<SettingsListProps>>;
      export type SearchableSettingsList = MemoExoticComponent<FC<SettingsListProps>>;
      export interface SettingsSection {
        label: string;
        settings: string[];
        index?: number;
      }
      interface BaseSettingsItem {
        useTitle: () => string;
        parent: string | null;
        unsearchable?: boolean;
        variant?: Components.TableRowProps['variant'];
        IconComponent?: Components.BaseIconImage;
        usePredicate?: () => boolean;
        useTrailing?: () => ReactNode;
        useDescription?: () => string;
        useIsDisabled?: () => boolean;
      }
      export interface PressableSettingsItem extends BaseSettingsItem {
        type: 'pressable';
        withArrow?: boolean;
        onPress?: () => void;
      }
      export interface ToggleSettingsItem extends BaseSettingsItem {
        type: 'toggle';
        useValue: () => boolean;
        onValueChange?: (value: boolean) => void;
      }
      export interface RouteSettingsItem extends BaseSettingsItem {
        type: 'route';
        screen: {
          route: string;
          getComponent(): ComponentType<StackScreenProps<ReactNavigationParamList>>;
        };
      }
      export interface StaticSettingsItem extends BaseSettingsItem {
        type: 'static';
      }
      export type SettingsItem = PressableSettingsItem | ToggleSettingsItem | RouteSettingsItem | StaticSettingsItem;
      export {};
    }
  }
  namespace Utils {
    namespace TypedEventEmitter {
      type DefaultEventMap = [never];
      type EventMap<T> = Record<keyof T, any[]> | DefaultEventMap;
      type Listener<T, K extends keyof T> = T[K] extends any[] ? (...args: T[K]) => void : never;
    }
    class TypedEventEmitter<T extends Record<string, any[]> = Record<string, any[]>> {
      emitter: TypedEventEmitter<T> & {
        setMaxListeners(n: number): void;
        getMaxListeners(): number;
        prependListener<K extends keyof T>(event: K, listener: TypedEventEmitter.Listener<T, K>): TypedEventEmitter<T>;
        prependOnceListener<K extends keyof T>(event: K, listener: TypedEventEmitter.Listener<T, K>): TypedEventEmitter<T>;
        listeners<K extends keyof T>(event: K): TypedEventEmitter.Listener<T, K>[];
        rawListeners<K extends keyof T>(event: K): TypedEventEmitter.Listener<T, K>[];
        eventNames(): (keyof T)[];
      };
      addListener<K extends keyof T>(event: K, listener: TypedEventEmitter.Listener<T, K>): this;
      on<K extends keyof T>(event: K, listener: TypedEventEmitter.Listener<T, K>): this;
      once<K extends keyof T>(event: K, listener: TypedEventEmitter.Listener<T, K>): this;
      removeListener<K extends keyof T>(event: K, listener: TypedEventEmitter.Listener<T, K>): this;
      off<K extends keyof T>(event: K, listener: TypedEventEmitter.Listener<T, K>): this;
      removeAllListeners(event?: keyof T): this;
      emit<K extends keyof T>(event: K, ...args: T[K]): boolean;
      listenerCount<K extends keyof T>(event: K, listener?: TypedEventEmitter.Listener<T, K>): number;
    }
  }
}
//#endregion
//#region lib/modules/src/finders/filters/utils.d.ts
type FilterResult<F> = F extends Filter<infer I> ? I['Result'] : never;
type FilterInfoOf<F> = F extends Filter<infer I> ? I : FilterInfo;
declare const FilterInfoBrand: unique symbol;
interface FilterBase<Info extends FilterInfo = DefaultFilterInfo> {
  (id: Metro.ModuleID, exports?: Metro.ModuleExports, initialized?: boolean): boolean;
  key: string;
  scopes: FilterScopeValue;
  /** @internal */
  readonly [FilterInfoBrand]?: Info;
}
type Filter<Info extends FilterInfo = DefaultFilterInfo> = FilterHelpers<Info> & FilterBase<Info>;
type MergeFilterInfo<I1 extends FilterInfo, I2 extends FilterInfo> = {
  Result: I1['Result'] & I2['Result'];
  Scopes: [...I1['Scopes'], ...I2['Scopes']];
};
type UnionFilterInfo<I1 extends FilterInfo, I2 extends FilterInfo> = {
  Result: I1['Result'] | I2['Result'];
  Scopes: [...I1['Scopes'], ...I2['Scopes']];
};
interface FilterHelpers<Info extends FilterInfo = DefaultFilterInfo> {
  /**
   * Manually the key for this filter.
   *
   * **Don't use this unless you know what you're doing.** Only API exports should be using this.
   *
   * @param key The key to set for this filter.
   */
  keyAs<T extends FilterBase<any>>(this: T, key: string): T;
  /**
   * Combines this filter with another filter, returning a new filter that matches if **both** filters match.
   *
   * @param filter The filter to combine with.
   */
  and<T extends FilterBase<any>, F extends FilterBase<any>>(this: T, filter: F): Filter<MergeFilterInfo<Info, FilterInfoOf<F>>>;
  /**
   * Combines this filter with another filter, returning a new filter that matches if **either** filter matches.
   *
   * @param filter The filter to combine with.
   */
  or<T extends Filter<Info>, F extends FilterBase<any>>(this: T, filter: F): Filter<UnionFilterInfo<Info, FilterInfoOf<F>>>;
  /**
   * Creates a new instance of this filter.
   */
  'new'(this: Filter<Info>): Filter<Info>;
  /**
   * Scopes this filter to match specific modules.
   *
   * @param scopes The scopes of modules to match.
   */
  scope<T extends Filter<Info>, const S extends FilterScope[]>(this: T, ...scopes: S): Filter<Info & {
    Scopes: S;
  }>;
}
type FilterGenerator<G extends (...args: any[]) => Filter> = G & {
  keyFor(args: Parameters<G>): string;
  defaultScopesFor(args: Parameters<G>): FilterScopeValue;
};
/**
 * Create a filter generator.
 *
 * @param filter The function that filters the modules.
 * @param keyFor The function that generates the key for the filter.
 * @param defaultScopesFor The function that generates the default scopes for the filter, or static scopes. Defaults to {@link FilterScopes.Initialized}.
 * @returns A function that generates a filter with the specified arguments.
 *
 * @example
 * ```ts
 * const custom = createFilterGenerator<[arg1: number, arg2: string]>(
 *   ([arg1, arg2], id, exports, initialized) => {
 *     // WARNING: exports can be a Proxy, nullish, or a primitive, so be careful when using it
 *     // filter logic
 *     return true
 *   },
 *   ([arg1, arg2]) => `custom(${arg1}, ${arg2})`
 * )
 * ```
 *
 * @see {@link withProps} for an example on custom-typed filters.
 */
declare function createFilterGenerator<A extends any[]>(filter: (args: A, id: Metro.ModuleID, exports: Metro.ModuleExports, initialized: boolean) => boolean, keyFor: (args: A) => string, defaultScopesFor?: ((args: A) => FilterScopeValue) | FilterScopeValue): FilterGenerator<(...args: A) => Filter>;
declare function createFilterGenerator<A extends any[]>(filter: (args: A, id: Metro.ModuleID) => boolean, keyFor: (args: A) => string, defaultScopesFor?: ((args: A) => FilterScopeValue) | FilterScopeValue): FilterGenerator<(...args: A) => Filter>;
//#endregion
//#region lib/modules/src/finders/filters/composite.d.ts
type AllOf = FilterGenerator<<F1 extends FilterBase, F2 extends FilterBase>(f1: F1, f2: F2) => Filter<MergeFilterInfo<FilterInfoOf<F1>, FilterInfoOf<F2>>>>;
/**
 * Combines two filters into one, returning true if **every** filter matches.
 *
 * If only one of the filters can run on uninitialized modules ({@link FilterScopes.Uninitialized}),
 * it is used as the prefilter for uninitialized modules, and the other only runs once a candidate is initialized.
 *
 * @param filters The filters to combine.
 *
 * @example With filter helpers
 * ```ts
 * const [SomeModule] = lookupModule(
 *   withProps('x', 'name')
 *     .and(withName('SomeName'))
 *     .and(withDependencies([1, 485, null, 2])),
 * )
 * ```
 *
 * @example
 * ```ts
 * const [SomeModule] = lookupModule(
 *   allOf(
 *     allOf(withProps('x', 'name'), withName('SomeName')),
 *     withDependencies([1, 485, null, 2]),
 *   ),
 * )
 * ```
 */
declare const allOf: (<F1 extends FilterBase, F2 extends FilterBase>(f1: F1, f2: F2) => Filter<MergeFilterInfo<FilterInfoOf<F1>, FilterInfoOf<F2>>>) & {
  keyFor(args: [f1: FilterBase<DefaultFilterInfo>, f2: FilterBase<DefaultFilterInfo>]): string;
  defaultScopesFor(args: [f1: FilterBase<DefaultFilterInfo>, f2: FilterBase<DefaultFilterInfo>]): FilterScopeValue;
} & {
  keyFor: (args: [f1: FilterBase<DefaultFilterInfo>, f2: FilterBase<DefaultFilterInfo>]) => string;
  defaultScopesFor: (args: [f1: FilterBase<DefaultFilterInfo>, f2: FilterBase<DefaultFilterInfo>]) => FilterScopeValue;
};
type AnyOf = FilterGenerator<<F1 extends FilterBase, F2 extends FilterBase>(f1: F1, f2: F2) => Filter<UnionFilterInfo<FilterInfoOf<F1>, FilterInfoOf<F2>>>>;
/**
 * Combines two filters into one, returning true if **some** filters match.
 *
 * @param filters The filters to combine.
 *
 * @example With filter helpers
 * ```ts
 * const [SomeModule] = lookupModule(
 *   withProps('x', 'name')
 *     .or(withName('SomeName'))
 *     .or(withDependencies([1, 485, null, 2])),
 * )
 * ```
 *
 * @example
 * ```ts
 * const [SomeModule] = lookupModule(
 *   anyOf(
 *     anyOf(withProps('x', 'name'), withName('SomeName')),
 *     withDependencies([1, 485, null, 2]),
 *   ),
 * )
 * ```
 */
declare const anyOf: (<F1 extends FilterBase, F2 extends FilterBase>(f1: F1, f2: F2) => Filter<UnionFilterInfo<FilterInfoOf<F1>, FilterInfoOf<F2>>>) & {
  keyFor(args: [f1: FilterBase<DefaultFilterInfo>, f2: FilterBase<DefaultFilterInfo>]): string;
  defaultScopesFor(args: [f1: FilterBase<DefaultFilterInfo>, f2: FilterBase<DefaultFilterInfo>]): FilterScopeValue;
} & {
  keyFor: (args: [f1: FilterBase<DefaultFilterInfo>, f2: FilterBase<DefaultFilterInfo>]) => string;
  defaultScopesFor: (args: [f1: FilterBase<DefaultFilterInfo>, f2: FilterBase<DefaultFilterInfo>]) => FilterScopeValue;
};
type NamespaceOnly = FilterGenerator<<F extends FilterBase>(filter: F) => Filter<FilterInfoOf<F>>>;
/**
 * Matches the filter against the module namespace only, excluding its `default` export.
 *
 * Works on what the filter is run against, so it also applies inside composite filters.
 * Uninitialized modules are left to the filter.
 *
 * @param filter The filter to match against the module namespace.
 *
 * @example
 * ```ts
 * // Matches { x }, but not { default: { x } }
 * const [SomeModule] = lookupModule(namespaceOnly(withProps('x')))
 * ```
 */
declare const namespaceOnly: (<F extends FilterBase>(filter: F) => Filter<FilterInfoOf<F>>) & {
  keyFor(args: [filter: FilterBase<DefaultFilterInfo>]): string;
  defaultScopesFor(args: [filter: FilterBase<DefaultFilterInfo>]): FilterScopeValue;
} & {
  keyFor: (args: [filter: FilterBase<DefaultFilterInfo>]) => string;
  defaultScopesFor: (args: [filter: FilterBase<DefaultFilterInfo>]) => FilterScopeValue;
};
//#endregion
//#region lib/modules/src/finders/filters/dynamic.d.ts
/** @internal This structure is not stable, and should only be referenced internally. */
interface ComparableDependencyMap extends Array<Metro.ModuleID | number | null | undefined | ComparableDependencyMap> {
  p?: boolean;
  r?: number;
  s?: number;
  n?: number;
  x?: number;
  u?: boolean;
  o?: boolean;
}
declare const withDependencies: WithDependencies;
type WithDependencies = FilterGenerator<<T>(deps: ComparableDependencyMap) => Filter<{
  Result: T;
  Scopes: [typeof FilterScopes.Uninitialized, typeof FilterScopes.Initialized];
}>> & {
  partial: typeof partial;
  relative: typeof relative;
  skip: typeof skip;
  last: typeof last;
  atLeast: typeof atLeast;
  atMost: typeof atMost;
  unordered: typeof unordered;
  ordered: typeof ordered;
};
/**
 * Compare the set without requiring it to reach the end of the dependency map.
 *
 * On its own this matches the **leading** dependencies. Can be used with {@link withDependencies.skip}.
 *
 * Order still matters. If you mark an index as dynamic, the same index must also be present during comparison to pass.
 *
 * Time complexity: `O(m)`.
 *
 * @param deps The dependency map to compare partially. This permanently modifies the array.
 * @returns The modified dependency map.
 *
 * @see {@link withDependencies.last} for the trailing counterpart.
 */
declare function partial(deps: ComparableDependencyMap): ComparableDependencyMap;
/**
 * Skip a number of dependencies before comparing positionally.
 *
 * Passing `Infinity` anchors the set to the end, matching the **last** `deps.length` dependencies.
 * Anything before them is unconstrained.
 *
 * Time complexity: `O(m)`.
 *
 * @param amount The amount of dependencies to skip from the start, or `Infinity` to anchor to the end.
 * @param deps The dependency map to skip in. This permanently modifies the array.
 * @returns The modified dependency map.
 *
 * @see {@link withDependencies.last} for the `Infinity` shorthand.
 */
declare function skip(amount: number, deps?: ComparableDependencyMap): ComparableDependencyMap;
/**
 * Match the **last** `deps.length` dependencies, leaving anything before them unconstrained.
 *
 * Shorthand for {@link withDependencies.skip} with `Infinity`.
 * Prefer this over leading comparisons when a module's trailing dependencies are the stable part of its fingerprint.
 *
 * Time complexity: `O(m)`.
 *
 * @param deps The dependency map to anchor to the end. This permanently modifies the array.
 * @returns The modified dependency map.
 *
 * @example
 * ```ts
 * const { last, relative } = withDependencies
 *
 * // Matches modules whose last three dependencies are [Any, module ID + 1, 2]
 * withDependencies(last([null, relative(1), 2]))
 * ```
 */
declare function last(deps?: ComparableDependencyMap): ComparableDependencyMap;
/**
 * Require the module to have at least `count` dependencies.
 *
 * This implies {@link withDependencies.partial}, as an exact length check would never pass alongside a bound.
 *
 * Time complexity: `O(1)`.
 *
 * @param count The minimum amount of dependencies.
 * @param deps The dependency map to bound. This permanently modifies the array.
 * @returns The modified dependency map.
 */
declare function atLeast(count: number, deps?: ComparableDependencyMap): ComparableDependencyMap;
/**
 * Require the module to have at most `count` dependencies.
 *
 * This implies {@link withDependencies.partial}, as an exact length check would never pass alongside a bound.
 *
 * Time complexity: `O(1)`.
 *
 * @param count The maximum amount of dependencies.
 * @param deps The dependency map to bound. This permanently modifies the array.
 * @returns The modified dependency map.
 */
declare function atMost(count: number, deps?: ComparableDependencyMap): ComparableDependencyMap;
/**
 * Compare the set in order, allowing any number of unrelated dependencies between the entries.
 *
 * Entries must appear in the given order. Gaps before, between and after them are unconstrained.
 * Dynamic (`null`) entries consume one dependency slot.
 *
 * Each entry takes the earliest dependency satisfying it. That is exact for subsequences,
 * so entries matching overlapping dependencies never cause a false negative.
 *
 * Time complexity: `O(n + m)`. The cursor only moves forward. Each dependency is visited at most once.
 *
 * @param deps The dependency map to compare as a subsequence. This permanently modifies the array.
 * @returns The modified dependency map.
 *
 * @see {@link withDependencies.unordered} to drop the order requirement too.
 *
 * @example
 * ```ts
 * const { ordered, relative } = withDependencies
 *
 * // Matches modules depending on module ID 4, then its own next module, in that order,
 * // with any number of other dependencies around them
 * withDependencies(ordered([4, relative(1)]))
 * ```
 */
declare function ordered(deps: ComparableDependencyMap): ComparableDependencyMap;
/**
 * Compare the set without caring about order or position, only that every dependency exists somewhere.
 *
 * Entries are matched independently, so two identical entries can both match the same dependency.
 * Dynamic (`null`) entries are meaningless here and are ignored.
 *
 * **This is much more expensive than positional comparison**, as every entry is compared against every dependency.
 * Bound it with {@link withDependencies.atLeast} or {@link withDependencies.atMost} where possible, as those are checked first.
 *
 * Time complexity: `O(n * m)`.
 *
 * @param deps The dependency map to compare unordered. This permanently modifies the array.
 * @returns The modified dependency map.
 *
 * @see {@link withDependencies.ordered} to keep the order requirement.
 */
declare function unordered(deps: ComparableDependencyMap): ComparableDependencyMap;
/**
 * Marks this dependency to compare relatively to the module ID being compared.
 *
 * Time complexity: `O(1)`.
 *
 * @param magnitude The relative magnitude to use when comparing module IDs. Positive values mean the dependency's module ID is greater than the module being compared, negative values mean it's less.
 * @param root Marks this dependency to compare relatively to the root (returning) module ID being compared. Useful for nested comparisons where you want to compare by the root module ID instead of the parent's module ID of the nested dependency.
 *
 * @see {@link relative.within} to accept a range of magnitudes.
 */
declare function relative(magnitude: Metro.ModuleID, root?: boolean): number;
declare namespace index_d_exports {
  export { AllOf, AnyOf, ComparableDependencyMap, DefaultFilterInfo, Filter, FilterBase, FilterGenerator, FilterHelpers, FilterInfo, FilterInfoOf, FilterResult, FilterScope, FilterScopeValue, FilterScopes, MergeFilterInfo, NamespaceOnly, UnionFilterInfo, WithName, WithProps, WithSingleProp, WithoutProps, allOf, anyOf, createFilterGenerator, namespaceOnly, withDependencies, withName, withProps, withSingleProp, withoutProps };
}
type FilterRequiringExports<T> = Filter<{
  Result: T;
  Scopes: [typeof FilterScopes.Initialized];
}>;
/**
 * Filter modules by their exports having all of the specified properties.
 *
 * @param prop The property to check for.
 * @param props More properties to check for (optional).
 *
 * @example
 * ```ts
 * const [React] = lookupModule(withProps<typeof import('react')>('createElement'))
 * // const React: typeof import('react')
 * ```
 */
declare const withProps: WithProps;
type WithProps = FilterGenerator<<T extends Record<string, any> = Record<string, any>>(prop: keyof T, ...props: Array<keyof T>) => FilterRequiringExports<T>>;
/**
 * Filter modules by their exports having none of the specified properties.
 *
 * @param prop The property to check for.
 * @param props More properties to check for (optional).
 */
declare const withoutProps: WithoutProps;
type WithoutProps = FilterGenerator<<T extends Record<string, any>>(prop: string, ...props: string[]) => FilterRequiringExports<T>>;
/**
 * Filter modules by their exports having only the specified property.
 *
 * @param prop The property to check for.
 *
 * @example
 * ```ts
 * const [FormSwitchModule] = lookupModule(withSingleProp('FormSwitch'))
 * // const FormSwitchModule: { FormSwitch: any }
 * ```
 */
declare const withSingleProp: WithSingleProp;
type WithSingleProp = FilterGenerator<<T extends Record<string, any>>(prop: keyof T) => FilterRequiringExports<T>>;
/**
 * Filter modules by their exports having the specified name.
 *
 * Usually used for function components or classes.
 *
 * @param name The name to check for.
 *
 * @example Auto-typing as object
 * ```ts
 * const [SomeComponent] = lookupModule(withName('SomeComponent'))
 * // const SomeComponent: { name: 'SomeComponent' }
 * ```
 *
 * @example Typing as function component
 * ```ts
 * type MyComponent = React.FC<{ foo: string }>
 *
 * const [MyComponent] = lookupModule(withName<MyComponent>('MyComponent'))
 * // const MyComponent: MyComponent & { name: 'MyComponent' }
 * ```
 *
 * @example Typing as class
 * ```
 * interface SomeClass {
 *    someMethod(): void
 * }
 *
 * const [SomeClass] = lookupModule(withName<{ new(param: string): SomeClass }>('SomeClass'))
 * // const SomeClass: { new(): SomeClass, name: 'SomeClass' }
 */
declare const withName: WithName;
type WithName = FilterGenerator<<T extends object = object>(name: string) => FilterRequiringExports<T>>;
declare namespace discord_d_exports {
  export { WithGeneratedIconComponent, lookupGeneratedIconComponent, withGeneratedIconComponent };
}
type WithGeneratedIconComponent = FilterGenerator<<N extends string>(name: N, ...assets: string[]) => Filter<{
  Result: { [K in N]: DiscordModules.Components.BaseIconImage; };
  Scopes: [typeof FilterScopes.Uninitialized, typeof FilterScopes.Initialized];
}>>;
/**
 * Filter by icon component name and asset names.
 *
 * @param names The component name, then the asset names if the component has multiple assets. *
 * @example
 * ```ts
 * const [CopyIconModule] = lookupModule(
 *   withGeneratedIconComponent('CopyIcon'),
 * )
 * if (CopyIconModule) {
 *   const { CopyIcon } = CopyIconModule
 *   // Use CopyIcon as a React component
 * }
 * ```
 * @example
 * ```ts
 * const [CircleXIconModule] = lookupModule(
 *   withGeneratedIconComponent(
 *     'CircleXIcon',
 *     'CircleXIcon-secondary',
 *     'CircleXIcon-primary',
 *   ),
 * )
 * ```
 */
declare const withGeneratedIconComponent: WithGeneratedIconComponent;
/**
 * Looks up a generated icon component by its name and asset names.
 *
 * @param names The component name, then the asset names if the component has multiple assets.
 * @returns The icon component, or `undefined` if it could not be found.
 */
declare function lookupGeneratedIconComponent<N extends string>(...names: [N, ...string[]]): DiscordModules.Components.BaseIconImage | undefined;
//#endregion
//#region lib/utils/src/types.d.ts
type Nullish = null | undefined;
type If<T, Then, Else> = T extends true ? Then : Else;
type Not<T extends boolean> = T extends true ? false : true;
type AnyObject = Record<PropertyKey, any>;
type AnyFunction = (...args: any[]) => any;
type LogicalOr<T1, T2> = T1 extends true ? true : T2 extends true ? true : false;
type LogicalAnd<T1, T2> = T1 extends true ? T2 extends true ? true : false : false;
type DeepPartial<T> = { [K in keyof T]?: T[K] extends AnyObject ? DeepPartial<T[K]> : T[K]; };
type ExtractPredicate<T> = T extends ((arg: any) => arg is infer R) ? R : never;
type KeyWithType<O extends AnyObject, T> = { [K in keyof O]: O[K] extends T ? K : never; }[keyof O];
interface PreInitPluginApiUtils {
  bitset: typeof bitset_d_exports;
  callback: typeof callback_d_exports;
  error: typeof error_d_exports;
  object: typeof object_d_exports;
  promise: typeof promise_d_exports;
  proxy: typeof proxy_d_exports;
  tree: typeof tree_d_exports;
  react: typeof react_d_exports;
  /** This API is available in and after the `init` phase.  */
  discord: unknown;
}
interface PluginApiUtils extends PreInitPluginApiUtils {
  discord: typeof discord_d_exports;
}
declare module '@valenced/plugins/types' {
  interface UnscopedPreInitPluginApi {
    utils: PreInitPluginApiUtils;
  }
  interface UnscopedInitPluginApi {
    utils: PluginApiUtils;
  }
}
//#endregion
//#region lib/modules/src/types.d.ts
/**
 * Metro is a bundler for React Native.
 *
 * @see {@link https://github.com/facebook/metro/blob/main/packages/metro-runtime/src/polyfills/require.js}
 */
declare namespace Metro {
  type DependencyMap = Array<ModuleID>;
  type FactoryFn = (global: object, require: RequireFn, metroImportDefault: RequireFn, metroImportAll: RequireFn, moduleObject: Module, exports: ModuleExports, dependencyMap: DependencyMap) => void;
  type RegisterSegmentFn = (segmentId: number, moduleDefiner: (moduleId: ModuleID) => void, moduleIds?: ReadonlyArray<ModuleID> | null) => void;
  type ModuleID = number;
  interface ModuleDefinition<Initialized = boolean> {
    /**
     * Dependencies of this module (set to `undefined` once the module is initialized)
     */
    dependencyMap: If<Initialized, undefined, DependencyMap>;
    /**
     * Error that occurred during initialization
     */
    error?: any;
    /**
     * Factory function that initializes the module
     */
    factory: If<Initialized, undefined, FactoryFn>;
    /**
     * Whether an error occurred during initialization
     */
    hasError: boolean;
    importedAll: ModuleExports;
    importedDefault: ModuleExports;
    /**
     * Whether factory has been successfully called
     * */
    isInitialized: boolean;
    publicModule: Module;
  }
  type Module = {
    id?: ModuleID;
    exports: ModuleExports;
  };
  type ModuleList = Map<ModuleID, ModuleDefinition>;
  type RequireFn = (id: ModuleID) => ModuleExports;
  type DefineFn = (factory: FactoryFn, moduleId: ModuleID, dependencyMap: DependencyMap) => void;
  type ClearFn = () => ModuleList;
  interface Require extends RequireFn {
    importDefault: RequireFn;
    importAll: RequireFn;
  }
  type ModuleExports = any;
}
declare namespace ValencedMetro {
  type Module = {
    id: Metro.ModuleID;
    exports: Metro.ModuleExports;
  };
  type ModuleDefinition<Initialized = boolean> = {
    flags: number;
    module?: Module;
    factory: If<Initialized, undefined, () => void>;
    importedDefault?: Metro.ModuleExports;
    importedAll?: Metro.ModuleExports;
    error?: If<Initialized, undefined, any>;
  };
  type ModuleList = Map<Metro.ModuleID, ModuleDefinition>;
}
/**
 * Maybe the default export matched instead of the namespace, because you're using `options.returnNamespace`.
 */
type MaybeDefaultExportMatched<T> = T | {
  default: T;
};
//#endregion
export { useReRender as $, AllOf as A, FilterInfoOf as B, index_d_exports as C, withoutProps as D, withSingleProp as E, namespaceOnly as F, DiscordModules as G, MergeFilterInfo as H, Filter as I, FilterScope as J, DefaultFilterInfo as K, FilterBase as L, NamespaceOnly as M, allOf as N, ComparableDependencyMap as O, anyOf as P, useIsFirstRender as Q, FilterGenerator as R, WithoutProps as S, withProps as T, UnionFilterInfo as U, FilterResult as V, createFilterGenerator as W, FilterScopes as X, FilterScopeValue as Y, findInReactFiber as Z, lookupGeneratedIconComponent as _, AnyObject as a, defineLazyProperties as at, WithProps as b, If as c, mergeDeep as ct, LogicalOr as d, noop as dt, FindInTreeOptions as et, Not as f, WithGeneratedIconComponent as g, PreInitPluginApiUtils as h, AnyFunction as i, cloneDeep as it, AnyOf as j, withDependencies as k, KeyWithType as l, asap as lt, PluginApiUtils as m, Metro as n, SearchTree as nt, DeepPartial as o, defineLazyProperty as ot, Nullish as p, FilterInfo as q, ValencedMetro as r, findInTree as rt, ExtractPredicate as s, isObject as st, MaybeDefaultExportMatched as t, SearchFilter as tt, LogicalAnd as u, debounce as ut, withGeneratedIconComponent as v, withName as w, WithSingleProp as x, WithName as y, FilterHelpers as z };