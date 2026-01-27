import type {Appearances} from "./appearances";
import {AppearanceStyles} from "./appearances";
import type { Variant } from "@ah/tokens/variants";

const APPEARANCES: Appearances[]=[
    "solid",
    "outline",
    "dashed",
    "ghost"
]
const VARIANTS: Variant[]=[
    "base",
    'primary',
    "secondary",
    "success",
    "info",
    "warning",
    "danger",
    "disabled"
]

describe("Appearance Color system", ()=>{
    it('should defined styles for every appearance and variant', ()=>{
        APPEARANCES.forEach((appearance) => {
            VARIANTS.forEach((variant) => {
              const styles = AppearanceStyles[appearance][variant];
              expect(styles).toBeDefined();
              expect(styles).not.toBe('');
            });
          });
    })

    it('should defined outline for every appearance and variant', ()=>{
        VARIANTS.forEach(variant=>{
            expect(AppearanceStyles.outline[variant]).toContain('border');
            expect(AppearanceStyles.outline[variant]).toContain('bg-transparent');
        })
    });
    it('should defined dashed for every appearance and variant', ()=>{
        VARIANTS.forEach(variant=>{
            expect(AppearanceStyles.dashed[variant]).toContain('border-dashed');
            expect(AppearanceStyles.dashed[variant]).toContain('bg-transparent');
        })
    });
    it('should defined ghost for every appearance never include background by default and variant', ()=>{
        VARIANTS.forEach(variant=>{
            expect(AppearanceStyles.ghost[variant]).toContain('bg-transparent')
        })
    })
    it("should not generate style string contain undefined", ()=>{
        APPEARANCES.forEach(appearance=>{
            VARIANTS.forEach(variant=>{
                expect(AppearanceStyles[appearance][variant]).not.toContain('undefined');
            })
        })
    })

})

