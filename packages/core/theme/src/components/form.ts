import {tv} from "../utils/tv";
import {VariantProps} from "tailwind-variants";

/**
 * Form **Tailwind Variants** component
 *
 * @example
 * ```js
 * const classNames = form({...})
 *
 * <form className={base()}>
 *    // form content
 * </form>
 * ```
 */
const form = tv({
  base: "flex flex-col gap-2 items-start",
});

export type FormVariantProps = VariantProps<typeof form>;

export {form};

