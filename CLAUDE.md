# Figma → HTML: Pixel-Perfect Rules (Desktop + Mobile)
## Breakpoints
- DESKTOP 1440px and MOBILE (394px) — fill from the real Figma frame widths.
- Both must be pixel-perfect against their OWN Figma frame.
- Desktop CSS is the base. Mobile changes live ONLY in @media (max-width:___px)
  blocks. Once desktop is locked it is frozen.
## Source of truth
- Figma node is ground truth: exact px, hex, font, text from get_design_context
  / get_variable_defs. Never invent values. Never substitute icons/images
  (use download_assets). Never paraphrase copy.
## Build order
- PHASE A: entire desktop page, section by section, pixel-perfect.
- PHASE B: only after desktop is locked, mobile via @media overrides.
## Per-section process
1. get_screenshot(node) for the active breakpoint.
2. get_design_context(node) for exact values.
3. download_assets(node) into /assets.
4. Build (desktop=base CSS; mobile=@media block only).
5. Give me the local URL + section anchor, then STOP for my Chrome check.
6. I send exact deltas. Fix. Repeat until I say "locked."
7. Clear context. Next section.
## Hard rules
- Exact px, no clamp(). No substitutions. No copy rewriting. No DOM
  restructuring. Mobile edits @media blocks only. All images in /assets,
  no figma.com/api/mcp/asset URLs in final code.
