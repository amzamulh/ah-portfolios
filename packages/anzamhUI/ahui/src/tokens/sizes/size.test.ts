import{ textSize, headingSize, iconSize, radiusSize } from './size';
import type { Size } from "./size";

const SIZES: Exclude<Size, 'full'>[]=['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
const RADIUSSIZES: Size[]=['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'full'];

describe("Size System", ()=>{
    it("should map all text sizes correctly", ()=>{
        SIZES.forEach(size=>{
            expect(textSize[size]).toBeDefined();
            expect(textSize[size]).not.toBe("");
        })
    });
    it("should map all heading sizes correctly", ()=>{
        SIZES.forEach(size=>{
            expect(headingSize[size]).toBeDefined();
            expect(headingSize[size]).not.toBe("");
        })
    });

    it("should map all test sizes correctly", ()=>{
        SIZES.forEach(size=>{
            expect(iconSize[size]).toBeDefined();
            expect(iconSize[size]).not.toBe("");
        })
    })
    it("should mapp all radius sizes correctly", ()=>{
        RADIUSSIZES.forEach(size=>{
            expect(radiusSize[size]).toBeDefined();
            expect(radiusSize[size]).not.toBe("");
        })
    })
})

