export type Variant =
  | 'base'
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'disabled';

  
interface VariantColor {
    bg?: string;
    defaultText?: string;
    text?: string;
    hoverBg?: string;
    hoverText?: string;
    border?: string;
  }
  
  export const VariantColorsStyle: Record<Variant, VariantColor> = {
    base: { 
      bg: 'bg-body-light dark:bg-body-dark',
      defaultText: 'text-body-dark dark:text-body-light', 
      text: 'text-body-dark dark:text-body-light', 
      hoverBg: 'hover:bg-hover-light dark:hover:bg-hover-dark',
      hoverText: 'hover:text-hover-dark dark:hover-text-hover-light', 
      border: 'border-border-light dark:border-border-dark' 
      },
    primary: { 
      bg: 'bg-primary dark:bg-primary-dark ', 
      defaultText:'text-body-light dark:text-body-dark', 
      text: 'text-primary dark:text-primary-dark', 
      hoverBg: 'hover:bg-primary-dark dark:hover:bg-priamry-light',
      hoverText: 'hover:text-primary-dark dark:hover:text-priamry-light',
      border: 'border-primary dark:border-primary-dark' 
      },
    secondary: { 
      bg: 'bg-secondary dark:bg-secondary-dark',
      defaultText:'text-body-light dark:text-body-dark',  
      text: 'text-secondary dark:text-secondary-dark', 
      hoverBg: 'hover:bg-secondary-dark dark:hover:bg-secondary-light', 
      hoverText: 'hover:text-secondary-dark dark:hover:text-secondary-light', 
      border: 'border-secondary dark:border-secondary-dark' 
      },
    info: { 
      bg: 'bg-info dark:bg-info-dark', 
      defaultText:'text-body-light dark:text-body-dark', 
      text: 'text-info dark:text-info-dark', 
      hoverBg: 'hover:bg-info-dark dark:hover:bg-info-light', 
      hoverText: 'hover:text-info-dark dark:hover:text-info-light', 
      border: 'border-info dark:border-info-dark' 
      },
    success: { 
      bg: 'bg-success dark:bg-success-dark text-body-dark',
      defaultText:'text-body-dark',  
      text: 'text-success dark:text-success-dark', 
      hoverBg: 'hover:bg-success-dark dark:bg-success-light', 
      hoverText: 'hover:text-success-dark dark:text-success-light', 
      border: 'border-success darK:border-success-dark' 
      },
    warning: { 
      bg: 'bg-warning dark:bg-warning text-body-dark', 
      defaultText:'text-body-dark', 
      text: 'text-warning dark:text-warning-dark', 
      hoverBg: 'hover:bg-warning-dark dark:hover:bg-warning-light', 
      hoverText: 'hover:text-warning-dark dark:hover:text-warning-light', 
      border: 'border-warning dark:border-warning-dark' 
      },
    danger: { 
      bg: 'bg-danger dark:bg-danger-dark text-body-light dark:text-body-dark', 
      defaultText:'text-body-light dark:text-body-dark', 
      text: 'text-danger dark:text-danger-dark', 
      hoverBg: 'hover:bg-danger-dark dark:hover:bg-danger-light',
      hoverText: 'hover:text-danger-dark dark:hover:text-danger-light',
      border: 'border-danger dark:border-danger-dark' 
      },
    disabled: { 
      bg: 'bg-disable dark:bg-disable-dark',
      defaultText:'text-mute-light dark:text-mute-dark',  
      text: 'text-disable-light dark:text-disable-dark', 
      border: 'border-disabled dark:border-disabled-dark' 
      },
  };

  const generateVariantStyles = <T extends keyof VariantColor>(propKeys: T | T[]) => {
    const keys = Array.isArray(propKeys) ? propKeys : [propKeys];
    const result: Record<Variant, string> = {} as Record<Variant, string>;
  
    for (const variant in VariantColorsStyle) {
      result[variant as Variant] = keys
        .map((key) => VariantColorsStyle[variant as Variant][key])
        .filter(Boolean)
        .join(' ');
    }
  
    return result;
  };
  
  // Exported variant styles
  export const BgColorStyles = generateVariantStyles(['bg']);
  export const DefaultTextStyles = generateVariantStyles(['defaultText']);
  export const HoverBgColorStyles = generateVariantStyles(['hoverBg']);
  export const HoverTextColorStyles = generateVariantStyles(['hoverText']);
  export const TextColorStyles = generateVariantStyles(['text']);
  export const BorderColorStyles = generateVariantStyles('border');
  