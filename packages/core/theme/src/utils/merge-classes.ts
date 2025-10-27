import {clsx} from "@nextui-org/shared-utils";

export type SlotsToClasses<S extends string> = Partial<Record<S, string | string[]>>;

/**
 * Merge classes utility function
 *
 * @param itemClasses - The item classes
 * @param itemPropsClasses - The item props classes
 * @returns The merged classes
 */
export const mergeClasses = <
  T extends SlotsToClasses<string>,
  P extends SlotsToClasses<string>,
>(
  itemClasses?: T,
  itemPropsClasses?: P,
): T => {
  if (!itemClasses && !itemPropsClasses) return {} as T;

  const keys = new Set([
    ...Object.keys(itemClasses || {}),
    ...Object.keys(itemPropsClasses || {}),
  ]);

  return Array.from(keys).reduce(
    (acc, key) => ({
      ...acc,
      [key]: clsx(itemClasses?.[key], itemPropsClasses?.[key]),
    }),
    {} as T,
  );
};

