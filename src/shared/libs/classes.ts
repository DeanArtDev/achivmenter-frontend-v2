type ComputedClasses = Record<string, boolean>;

export function classes(classes: string[]): string;
export function classes(classes: ComputedClasses): string;
export function classes(classes: string[], computedClasses?: ComputedClasses): string;
export function classes(classes: string[] | ComputedClasses, computedClasses?: ComputedClasses): string {
  const cls: string[] = [];
  Array.isArray(classes) && cls.push(...classes.filter(Boolean));
  if (computedClasses) {
    Object.entries(computedClasses ?? classes).forEach(([key, value]) => {
      if (value) cls.push(key);
    });
  }
  return cls.join(' ');
}
