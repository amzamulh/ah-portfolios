import { BgColorStyles, BorderColorStyles, HoverBgColorStyles, HoverTextColorStyles, TextColorStyles} from "./variants"
import type {Variant} from "./variants"

const VARIANTS: Variant[] = [
    'base',
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'danger',
    'disabled',
  ];

describe("Variant color system", ()=>{
    it("should defined bg color styles for variants", ()=>{
        VARIANTS.forEach(varriant=>{
            expect(BgColorStyles[varriant]).toBeDefined();
            expect(BgColorStyles[varriant]).not.toBe(" ");
        })
    })
    it("should defined text color styles for variants", ()=>{
        VARIANTS.forEach(variant=>{
            expect(TextColorStyles[variant]).toBeDefined()
            expect(TextColorStyles[variant]).not.toBe("")
        })
    })
    it("should defined border color styles for variants", ()=>{
        VARIANTS.forEach(variant=>{
            expect(BorderColorStyles[variant]).toBeDefined()
            expect(BorderColorStyles[variant]).not.toBe("")
        })
    })
    it("should hover styles exist for nod-disabled variants", ()=>{
        VARIANTS.filter(d=>d !== 'disabled').forEach(variant=>{
            expect(HoverBgColorStyles[variant]).toBeDefined();
            expect(HoverTextColorStyles[variant]).toBeDefined();
        })
    })
})