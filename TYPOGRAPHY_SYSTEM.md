# Typography System Proposal

## Current Issues Identified

### Inconsistencies Found:
1. **H1 sizes**: 3.5rem (consistent) ✓
2. **H2 sizes**: 2rem, 1.5rem, 1.25rem (inconsistent)
3. **H3 sizes**: 1.5rem, 1.25rem (inconsistent)
4. **Body text**: 1.2rem, 1.125rem, 1rem (inconsistent)
5. **Small text**: 0.9rem, 0.9375rem (inconsistent)
6. **Line heights**: 1.1, 1.6, 1.75 (inconsistent)
7. **Font weights**: Mix of bold (700) and thin (100) for headers

## Proposed Standard Typography Scale

### Headers (PP Neue Montreal, Weight 100, Outlined Stroke)
- **H1**: 3.5rem (56px) - Page titles
  - Line height: 1.1
  - Use: Main page headings
  
- **H2**: 2rem (32px) - Major section headers
  - Line height: 1.2
  - Use: Section titles (e.g., "Conceptual & Theoretical Framework", glossary section headers)
  
- **H3**: 1.5rem (24px) - Subsection headers
  - Line height: 1.3
  - Use: Term names in glossary, subsection titles
  
- **H4**: 1.25rem (20px) - Minor headers
  - Line height: 1.4
  - Use: Footer section headers, small section titles

### Body Text (Georgia Serif)
- **Body Large**: 1.2rem (19.2px) - Main narrative paragraphs
  - Line height: 1.75
  - Use: Primary content paragraphs (about page narrative, glossary definitions)
  
- **Body**: 1.125rem (18px) - Standard body text
  - Line height: 1.6
  - Use: Standard paragraphs, mission statements
  
- **Body Small**: 1rem (16px) - Secondary text
  - Line height: 1.6
  - Use: Footer links, contact info, metadata

### Small Text (PP Neue Montreal)
- **Small**: 0.9rem (14.4px) - Labels and metadata
  - Line height: 1.5
  - Use: Footer headers, technical stack labels, form labels

### Special Cases
- **Home Manifesto**: clamp(2rem, 4vw, 4rem) - Responsive large text
  - Line height: 1.1
  - Font: PP Neue Montreal (not outlined)
  
- **CTA Text**: clamp(2rem, 5vw, 4rem) - Responsive CTA
  - Line height: 1.1
  - Font: PP Neue Montreal Thin, outlined stroke
  
- **Footer Statement**: clamp(1.5rem, 3vw, 2.5rem) - Responsive statement
  - Line height: 1.6
  - Font: Georgia Serif

## Implementation Status

✅ **Completed Standardizations:**

1. **H1**: Standardized to 3.5rem (56px) with line-height 1.1
   - Applied to: Page titles (About, Glossary, Studio)

2. **H2**: Standardized to 2rem (32px) with line-height 1.2
   - Applied to: Major section headers ("Conceptual & Theoretical Framework", glossary section headers)

3. **H3**: Standardized to 1.5rem (24px) with line-height 1.3
   - Applied to: Subsection headers (glossary terms, footer section headers with `.no-outline` class)

4. **H4**: Standardized to 1.25rem (20px) with line-height 1.4
   - Applied to: Subtitles (About page subtitle)

5. **Body Large**: Standardized to 1.2rem (19.2px) with line-height 1.75
   - Applied to: Main narrative paragraphs (About page, Glossary definitions, Studio intro)
   - Class: `.body-large`

6. **Body**: Standardized to 1.125rem (18px) with line-height 1.6
   - Applied to: Standard paragraphs, mission statements
   - Default for `<p>` tags

7. **Body Small**: Standardized to 1rem (16px) with line-height 1.6
   - Applied to: Footer links, contact info
   - Class: `.body-small`

8. **Small**: Standardized to 0.9rem (14.4px) with line-height 1.5
   - Applied to: Footer headers, section labels
   - Class: `.small`

9. **Outlined Stroke Style**: All headers (h1-h6) use PP Neue Montreal Thin (100) with outlined stroke
   - Exception: Headers with `.no-outline` class use solid color (for footer headers, subtitles)

10. **Font Families**:
    - Headers: PP Neue Montreal (Thin weight 100 for outlined, Medium 400 for non-outlined)
    - Body text: Georgia Serif

## CSS Classes Available

- `.body-large` - 1.2rem, line-height 1.75 (for main narrative text)
- `.body-small` - 1rem, line-height 1.6 (for secondary text)
- `.small` - 0.9rem, line-height 1.5 (for labels/metadata)
- `.no-outline` - Removes stroke, uses solid color (for h2, h3, h4)

## Files Updated

- `app/globals.css` - Typography scale definitions
- `app/about/page.tsx` - Standardized headers and body text
- `app/glossary/page.tsx` - Standardized headers and definitions
- `app/components/Footer.tsx` - Standardized footer typography
- `app/studio/page.tsx` - Standardized narrative intro
