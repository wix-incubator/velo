export interface Button
  extends HiddenCollapsedMixin,
    ClickableMixin,
    LabelMixin {
  /**
   * Sets or gets the icon image displayed on the button.
   * 	[Read more](https://www.wix.com/corvid/reference/$w.Button.html#icon)
   */
  icon: string;
  /**
   * Indicates if the button’s icon is collapsed or expanded.
   * 	[Read more](https://www.wix.com/corvid/reference/$w.Button.html#iconCollapsed)
   */
  readonly iconCollapsed: boolean;
  /**
   * Sets or gets the button's link.
   * 	[Read more](https://www.wix.com/corvid/reference/$w.Button.html#link)
   */
  link: string;
  /**
   * Gets an object containing information about the button's styles.
   * 	[Read more](https://www.wix.com/corvid/reference/$w.Button.html#style)
   */
  readonly style: Style;
  /**
   * Collapses the button’s icon and sets its `iconCollapsed` property to `true`.
   * 	[Read more](https://www.wix.com/corvid/reference/$w.Button.html#collapseIcon)
   */
  collapseIcon(): Promise<void>;
  /**
   * Expands the button’s icon and sets its `iconCollapsed` property to `false`.
   * 	[Read more](https://www.wix.com/corvid/reference/$w.Button.html#expandIcon)
   */
  expandIcon(): Promise<void>;
  /**
   * Adds an event handler that runs when the pointer is moved
   *  onto the element.
   *
   *  You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
   * 	[Read more](https://www.wix.com/corvid/reference/$w.Button.html#onMouseIn)
   */
  onMouseIn(handler: MouseEventHandler): Button;
  /**
   * Adds an event handler that runs when the pointer is moved
   *  off of the element.
   *
   *  You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
   * 	[Read more](https://www.wix.com/corvid/reference/$w.Button.html#onMouseOut)
   */
  onMouseOut(handler: MouseEventHandler): Button;
}

/**
 * Use effect options to customize an effect when [showing]($w.HiddenMixin.html#show) or [hiding]($w.HiddenMixin.html#hide) an element.
 *  Effect options include arcs, bouncing, fading, flipping, floating, flying in/out, folding, gliding and more.
 * 	[Read more](https://www.wix.com/corvid/reference/$w.EffectOptions.html#)
 */
namespace EffectOptions {
  /**
   * An object used to customize the `"arc"` effect.
   */
  export type ArcEffectOptions = {
    /**
     * Valid values: `0`-`4000` milliseconds. Defaults to `1200`.
     */
    duration?: number;
    /**
     * Valid values: `0`-`8000` milliseconds. Defaults to `0`.
     */
    delay?: number;
    /**
     * Valid values: `"left"`, `"right"`. Defaults to `"left"`.
     */
    direction?: string;
  };
  /**
   * An object used to customize the `"bounce"` effect.
   */
  export type BounceEffectOptions = {
    /**
     * Valid values: `0`-`4000` milliseconds. Defaults to `1200`.
     */
    duration?: number;
    /**
     * Valid values: `0`-`8000` milliseconds. Defaults to `0`.
     */
    delay?: number;
    /**
     * Valid values: `"topLeft"`, `"topRight"`, `"bottomRight"`,
     *  `"bottomLeft"`, `"center"`. Defaults to `"topLeft"`.
     */
    direction?: string;
    /**
     * Valid values: `"soft"`, `"medium"`, `"hard"`. Defaults to `"medium"`.
     */
    intensity?: string;
  };
  /**
   * An object used to customize the `"fade"` effect.
   */
  export type FadeEffectOptions = {
    /**
     * Valid values: `0`-`4000` milliseconds. Defaults to `1200`.
     */
    duration?: number;
    /**
     * Valid values: `0`-`8000` milliseconds. Defaults to `0`.
     */
    delay?: number;
  };
  /**
   * An object used to customize the `"flip"` effect.
   */
  export type FlipEffectOptions = {
    /**
     * Valid values: `0`-`4000` milliseconds. Defaults to `1200`.
     */
    duration?: number;
    /**
     * Valid values: `0`-`8000` milliseconds. Defaults to `0`.
     */
    delay?: number;
    /**
     * Valid values: `"top"`, `"right"`, `"bottom"`, `"left"`. Defaults to `"right"`.
     */
    direction?: string;
  };
  /**
   * An object used to customize the `"float"` effect.
   */
  export type FloatEffectOptions = {
    /**
     * Valid values: `0`-`4000` milliseconds. Defaults to `1200`.
     */
    duration?: number;
    /**
     * Valid values: `0`-`8000` milliseconds. Defaults to `0`.
     */
    delay?: number;
    /**
     * Valid values: `"top"`, `"right"`, `"bottom"`, `"left"`. Defaults to `"right"`.
     */
    direction?: string;
  };
  /**
   * An object used to customize the `"fly"` effect.
   */
  export type FlyEffectOptions = {
    /**
     * Valid values: `0`-`4000` milliseconds. Defaults to `1200`.
     */
    duration?: number;
    /**
     * Valid values: `0`-`8000` milliseconds. Defaults to `0`.
     */
    delay?: number;
    /**
     * Valid values: `"top"`, `"right"`, `"bottom"`, `"left"`. Defaults to `"right"`.
     */
    direction?: string;
  };
  /**
   * An object used to customize the `"fold"` effect.
   */
  export type FoldEffectOptions = {
    /**
     * Valid values: `0`-`4000` milliseconds. Defaults to `1200`.
     */
    duration?: number;
    /**
     * Valid values: `0`-`8000` milliseconds. Defaults to `0`.
     */
    delay?: number;
    /**
     * Valid values: `"top"`, `"right"`, `"bottom"`, `"left"`. Defaults to `"left"`.
     */
    direction?: string;
  };
  /**
   * An object used to customize the `"glide"` effect.
   */
  export type GlideEffectOptions = {
    /**
     * Valid values: `0`-`4000` milliseconds. Defaults to `1200`.
     */
    duration?: number;
    /**
     * Valid values: `0`-`8000` milliseconds. Defaults to `0`.
     */
    delay?: number;
    /**
     * Valid values: `0`-`360` degrees. Defaults to `0`.
     */
    angle?: number;
    /**
     * Valid values: `0`-`300` pixels. Defaults to `0`.
     */
    distance?: number;
  };
  /**
   * An object used to customize the `"puff"` effect.
   */
  export type PuffEffectOptions = {
    /**
     * Valid values: `0`-`4000` milliseconds. Defaults to `1200`.
     */
    duration?: number;
    /**
     * Valid values: `0`-`8000` milliseconds. Defaults to `0`.
     */
    delay?: number;
  };
  /**
   * An object used to customize the `"roll"` effect.
   */
  export type RollEffectOptions = {
    /**
     * Valid values: `0`-`4000` milliseconds. Defaults to `1200`.
     */
    duration?: number;
    /**
     * Valid values: `0`-`8000` milliseconds. Defaults to `0`.
     */
    delay?: number;
    /**
     * Valid values: `"top"`, `"right"`, `"bottom"`, `"left"`. Defaults to `"left"`.
     */
    direction?: string;
  };
  /**
   * An object used to customize the `"slide"` effect.
   */
  export type SlideEffectOptions = {
    /**
     * Valid values: `0`-`4000` milliseconds. Defaults to `1200`.
     */
    duration?: number;
    /**
     * Valid values: `0`-`8000` milliseconds. Defaults to `0`.
     */
    delay?: number;
    /**
     * Valid values: `"top"`, `"right"`, `"bottom"`, `"left"`. Defaults to `"left"`.
     */
    direction?: string;
  };
  /**
   * An object used to customize the `"spin"` effect.
   */
  export type SpinEffectOptions = {
    /**
     * Valid values: `0`-`4000` milliseconds. Defaults to `1200`.
     */
    duration?: number;
    /**
     * Valid values: `0`-`8000` milliseconds. Defaults to `0`.
     */
    delay?: number;
    /**
     * Valid values: `cw`, `ccw`. Defaults to `cw`.
     */
    direction?: string;
    /**
     * Valid values: `1`-`15`. Defaults to `5`.
     */
    cycles?: number;
  };
  /**
   * An object used to customize the `"turn"` effect.
   */
  export type TurnEffectOptions = {
    /**
     * Valid values: `0`-`4000` milliseconds. Defaults to `1200`.
     */
    duration?: number;
    /**
     * Valid values: `0`-`8000` milliseconds. Defaults to `0`.
     */
    delay?: number;
    /**
     * Valid values: `"right"`, `"left"`. Defaults to `"right"`.
     */
    direction?: string;
  };
  /**
   * An object used to customize the `"zoom"` effect.
   */
  export type ZoomEffectOptions = {
    /**
     * Valid values: `0`-`4000` milliseconds. Defaults to `1200`.
     */
    duration?: number;
    /**
     * Valid values: `0`-`8000` milliseconds. Defaults to `0`.
     */
    delay?: number;
  };
}

/**
 * Provides functionality for elements that have a label.
 * 	[Read more](https://www.wix.com/corvid/reference/$w.LabelMixin.html#)
 */
interface LabelMixin {
  /**
   * Sets or gets the label of an element.
   * 	[Read more](https://www.wix.com/corvid/reference/$w.LabelMixin.html#label)
   */
  label: string;
}

/**
 * Provides functionality for all elements that can be hidden or collapsed.
 * 	[Read more](https://www.wix.com/corvid/reference/$w.HiddenCollapsedMixin.html#)
 */
interface HiddenCollapsedMixin extends HiddenMixin, CollapsedMixin {}
/**
 * Provides functionality for elements that can be hidden.
 * 	[Read more](https://www.wix.com/corvid/reference/$w.HiddenMixin.html#)
 */
interface HiddenMixin {
  /**
   * Indicates if the element is visible or hidden.
   * 	[Read more](https://www.wix.com/corvid/reference/$w.HiddenMixin.html#hidden)
   */
  readonly hidden: boolean;
  /**
   * Indicates if the element is actually visible.
   * 	[Read more](https://www.wix.com/corvid/reference/$w.HiddenMixin.html#isVisible)
   */
  readonly isVisible: boolean;
  /**
   * Hides the element and sets its `hidden` property
   *  to `true`, using an effect if specified.
   * 	[Read more](https://www.wix.com/corvid/reference/$w.HiddenMixin.html#hide)
   */
  hide(
    effectName?: string,
    effectOptions?:
      | EffectOptions.ArcEffectOptions
      | EffectOptions.BounceEffectOptions
      | EffectOptions.FadeEffectOptions
      | EffectOptions.FlipEffectOptions
      | EffectOptions.FloatEffectOptions
      | EffectOptions.FlyEffectOptions
      | EffectOptions.FoldEffectOptions
      | EffectOptions.GlideEffectOptions
      | EffectOptions.PuffEffectOptions
      | EffectOptions.RollEffectOptions
      | EffectOptions.SlideEffectOptions
      | EffectOptions.SpinEffectOptions
      | EffectOptions.TurnEffectOptions
      | EffectOptions.ZoomEffectOptions
  ): Promise<void>;
  /**
   * Shows the element and sets its `hidden` property
   *  to `false`, using an effect if specified.
   * 	[Read more](https://www.wix.com/corvid/reference/$w.HiddenMixin.html#show)
   */
  show(
    effectName?: string,
    effectOptions?:
      | EffectOptions.ArcEffectOptions
      | EffectOptions.BounceEffectOptions
      | EffectOptions.FadeEffectOptions
      | EffectOptions.FlipEffectOptions
      | EffectOptions.FloatEffectOptions
      | EffectOptions.FlyEffectOptions
      | EffectOptions.FoldEffectOptions
      | EffectOptions.GlideEffectOptions
      | EffectOptions.PuffEffectOptions
      | EffectOptions.RollEffectOptions
      | EffectOptions.SlideEffectOptions
      | EffectOptions.SpinEffectOptions
      | EffectOptions.TurnEffectOptions
      | EffectOptions.ZoomEffectOptions
  ): Promise<void>;
}

/**
 * Provides functionality for elements that can be collapsed.
 * 	[Read more](https://www.wix.com/corvid/reference/$w.CollapsedMixin.html#)
 */
interface CollapsedMixin {
  /**
   * Indicates if the element is collapsed or expanded.
   * 	[Read more](https://www.wix.com/corvid/reference/$w.CollapsedMixin.html#collapsed)
   */
  readonly collapsed: boolean;
  /**
   * Collapses the element and sets its `collapsed` property to `true`.
   * 	[Read more](https://www.wix.com/corvid/reference/$w.CollapsedMixin.html#collapse)
   */
  collapse(): Promise<void>;
  /**
   * Expands the element and sets its `collapsed` property to `false`.
   * 	[Read more](https://www.wix.com/corvid/reference/$w.CollapsedMixin.html#expand)
   */
  expand(): Promise<void>;
}

/**
 * Provides functionality for elements that can be clicked.
 * 	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#)
 */
interface ClickableMixin {
  /**
   * Adds an event handler that runs when the element is clicked.
   * 	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
   *  @eventType click
   */
  onClick(handler: MouseEventHandler): Element;
  /**
   * Adds an event handler that runs when the element is double-clicked.
   * 	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick)
   *  @eventType dblClick
   */
  onDblClick(handler: MouseEventHandler): Element;
}

/**
 * An object representing an element's styles.
 * 	[Read more](https://www.wix.com/corvid/reference/$w.Style.html#)
 */
interface Style {
  /**
   * Sets or gets the background color of an element.
   * 	[Read more](https://www.wix.com/corvid/reference/$w.Style.html#backgroundColor)
   */
  backgroundColor: string;
  /**
   * Sets or gets the border color of an element.
   * 	[Read more](https://www.wix.com/corvid/reference/$w.Style.html#borderColor)
   */
  borderColor: string;
  /**
   * Sets or gets the border radius of an element.
   * 	[Read more](https://www.wix.com/corvid/reference/$w.Style.html#borderRadius)
   */
  borderRadius: string;
  /**
   * Sets or gets the border width of an element.
   * 	[Read more](https://www.wix.com/corvid/reference/$w.Style.html#borderWidth)
   */
  borderWidth: string;
  /**
   * Sets or gets the text color of an element.
   * 	[Read more](https://www.wix.com/corvid/reference/$w.Style.html#color)
   */
  color: string;
  /**
   * Sets or gets the foreground color of an element.
   * 	[Read more](https://www.wix.com/corvid/reference/$w.Style.html#foregroundColor)
   */
  foregroundColor: string;
}

/**
 * Handles events fired when the mouse is clicked.
 */
export type MouseEventHandler = (event: MouseEvent) => void;
