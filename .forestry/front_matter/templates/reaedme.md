Guidelines about structuring CSS [WIP]

### When to use a scss variable (e.g. $var) vs a css variable (e.g. --var)
- If a variable does not change (e.g. max content width), use a global scss variable.
- If a variable changes depending on the placement of the corresponding element in the DOM, use a css variable. For example, colors used in theme pages and modified blocks.

### Style
- Strive to have properties follow the order: positioning, display, other
