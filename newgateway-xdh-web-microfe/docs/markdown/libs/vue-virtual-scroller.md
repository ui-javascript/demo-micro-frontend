## vue-virtual-scroller

### Props

- `items`: list of items you want to display in the scroller.
- `itemHeight` (default: `null`): display height of the items in pixels used to calculate the scroll height and position. If it set to `null` (the default value), it will use [variable height mode](#variable-height-mode).
- `minItemHeight`: minimum height used if the height of a item is unknown.
- `heightField` (default: `'height'`): field used to get the item's height in variable height mode.
- `typeField` (default: `'type'`): field used to differenciate different kinds of components in the list. For each distinct type, a pool of recycled items will be created.
- `keyField` (default: `'id'`): field used to identify items and optimize render views management.
- `pageMode` (default: `false`): enable [Page mode](#page-mode).
- `prerender` (default: `0`): render a fixed number of items for Server-Side Rendering.
- `buffer` (default: `200`): amount of pixel to add to edges of the scrolling visible area to start rendering items further away.
- `emitUpdate` (default: `false`): emit a `'update'` event each time the virtual scroller content is updated (can impact performance).

### Events

- `resize`: emitted when the size of the scroller changes.
- `visible`: emitted when the scroller considers itself to be visible in the page.
- `hidden`: emitted when the scroller is hidden in the page.
- `update (startIndex, endIndex)`: emitted each time the views are updated, only if `emitUpdate` prop is `true`

### Default scoped slot props

- `item`: item being rendered in a view.
- `index`: reflects each item's position in the `items` array
- `active`: is the view active. An active view is considered visible and being positioned by `RecycleScroller`. An inactive view is not considered visible and hidden from the user. Any rendering-related computations should be skipped if the view is inactive.
