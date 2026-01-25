import type { Variant } from "@ah/tokens/variants";
import  { VariantColorsStyle, BgColorStyles, DefaultTextStyles,TextColorStyles, HoverBgColorStyles, HoverTextColorStyles,BorderColorStyles} from "../variants/variants";
export type Appearances  = 'solid' | 'outline' | 'dashed' | 'ghost';

export const AppearanceStyles: Record<
    Appearances,
    Record<Variant, string>
> = {
  solid: generateAppearance([
    BgColorStyles,
    DefaultTextStyles,
    HoverBgColorStyles,
    HoverTextColorStyles,
  ]),

  outline: generateAppearance([
    'bg-transparent',
    TextColorStyles,
    BorderColorStyles,
    'border',
    HoverBgColorStyles,
    HoverTextColorStyles,
  ]),

  dashed: generateAppearance([
    'bg-transparent',
    TextColorStyles,
    BorderColorStyles,
    'border border-dashed',
    HoverBgColorStyles,
    HoverTextColorStyles,
  ]),

  ghost: generateAppearance([
    'bg-transparent',
    TextColorStyles,
    HoverBgColorStyles,
    HoverTextColorStyles,
  ]),
};


function generateAppearance(
    parts: (string | Record<Variant, string>)[]
  ): Record<Variant, string> {
    const result = {} as Record<Variant, string>;
  
    (Object.keys(VariantColorsStyle) as Variant[]).forEach((variant) => {
      result[variant] = parts
        .map((part) =>
          typeof part === 'string' ? part : part[variant]
        )
        .filter(Boolean)
        .join(' ');
    });
  
    return result;
  }