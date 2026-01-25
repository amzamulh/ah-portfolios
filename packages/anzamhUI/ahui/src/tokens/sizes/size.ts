export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'full';

const textSizeMap = { 
    xs: 'text-xs', 
    sm: 'text-sm', 
    md: 'text-base', 
    lg: 'text-lg', 
    xl: 'text-xl', 
    xxl: 'text-xxl' } as const;
const headingSizeMap = { 
    xs: 'text-h6', 
    sm: 'text-h5 font-medium', 
    md: 'text-h4 font-medium', 
    lg: 'text-h3 font-semibold', 
    xl: 'text-h2 font-bold', 
    xxl: 'text-h1 font-bold' } as const;
const borderRadiusMap = { 
    xs: 'rounded-xs', 
    sm: 'rounded-sm', 
    md: 'rounded-md', 
    lg: 'rounded-lg', 
    xl: 'rounded-xl', 
    xxl: 'rounded-xxl', 
    full: 'rounded-full' } as const;
const iconSizeMap = { 
    xs: 'icon-xs', 
    sm: 'icon-sm', 
    md: 'icon-md', 
    lg: 'icon-base', 
    xl: 'icon-lg', 
    xxl: 'icon-xl' } as const;



// Generic size mapping helper
const generateSizeStyles = <T extends Record<string, string>>(map: T) => map;

// Exported sizes
export const textSize = generateSizeStyles(textSizeMap);
export const radiusSize = generateSizeStyles(borderRadiusMap);
export const headingSize = generateSizeStyles(headingSizeMap);
export const iconSize = generateSizeStyles(iconSizeMap);