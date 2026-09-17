# react-atomic-design-system

[![npm version](https://img.shields.io/npm/v/react-atomic-design-system.svg)](https://www.npmjs.com/package/react-atomic-design-system)
[![npm downloads](https://img.shields.io/npm/dm/react-atomic-design-system.svg)](https://www.npmjs.com/package/react-atomic-design-system)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)

A React component library built with [Tailwind CSS v4](https://tailwindcss.com/) and [Radix UI](https://www.radix-ui.com/) primitives, organized around atomic design. It ships **atoms** (the smallest building blocks — buttons, inputs, avatars, ...) and **molecules** (small compositions of atoms — checkbox groups, dropdowns, data tables, ...), each fully documented with its props.

## Live demo

- 🖥️ **Component demo (web view)** — [asadwali.github.io/Atomic-Design-System-React](https://asadwali.github.io/Atomic-Design-System-React/)
- 📖 **Storybook** — [asadwali.github.io/Atomic-Design-System-React/storybook](https://asadwali.github.io/Atomic-Design-System-React/storybook/)
- 📦 **npm package** — [npmjs.com/package/react-atomic-design-system](https://www.npmjs.com/package/react-atomic-design-system)
- 💻 **Source / GitHub** — [github.com/asadwali/Atomic-Design-System-React](https://github.com/asadwali/Atomic-Design-System-React)

## Contributing

Contributions are welcome! Fork the repo, make your changes, and open a pull request. See [CONTRIBUTING.md](./CONTRIBUTING.md) for local setup, coding conventions, and the PR process.

## Installation

```bash
npm install react-atomic-design-system react react-dom
```

## Usage

Import the stylesheet once, anywhere near the root of your app (e.g. `main.jsx` / `App.jsx` / `layout.jsx`):

```js
import 'react-atomic-design-system/style.css';
```

Then import any component:

```jsx
import { Button, Avatar, DataTable } from 'react-atomic-design-system';

function Example() {
  return (
    <Button variant="primary" size="lg">
      Click me
    </Button>
  );
}
```

The stylesheet is fully pre-compiled, so no Tailwind configuration is required in your project — it works in plain Vite/CRA apps as well as Next.js.

## Components

Full prop reference (type, default, required/optional, description) and a usage example for every component:

**Atoms** — [Avatar](#avatar) · [Badge](#badge) · [Button](#button) · [ButtonGroup](#buttongroup) · [DatePicker](#datepicker) · [CalendarDatePicker](#calendardatepicker) · [Input](#input) · [OTPInput](#otpinput) · [CircularProgressBar](#circularprogressbar) · [ProgressBar](#progressbar) · [SemiCircularProgressBar](#semicircularprogressbar) · [Textarea](#textarea)

**Molecules** — [AvatarGroup](#avatargroup) · [AvatarWithInfo](#avatarwithinfo) · [BadgeGroup](#badgegroup) · [ChatMessage](#chatmessage) · [CheckBox](#checkbox) · [CheckBoxGroup](#checkboxgroup) · [CardCheckboxWithHeader](#cardcheckboxwithheader) · [PaymentCheckBoxCard](#paymentcheckboxcard) · [ComboboxDropdown](#comboboxdropdown) · [DataTableGrid](#datatablegrid) · [DataTable](#datatable) · [Dropdowns](#dropdowns) · [DropdownSelect](#dropdownselect) · [InputWithDropDown](#inputwithdropdown) · [Modal](#modal) · [Navbar](#navbar) · [Pagination](#pagination) · [PaginationGroup](#paginationgroup) · [PaginationInfoBar](#paginationinfobar) · [SocialMediaButton](#socialmediabutton) · [Stepper](#stepper) · [Tabs](#tabs) · [Toast](#toast) · [Toggle](#toggle) · [Tooltip](#tooltip)

### Atoms

Atoms are the smallest, most reusable building blocks of the design system — single-purpose UI primitives (buttons, inputs, badges, etc.) that molecules are composed from.

#### Avatar

Displays a user or company avatar as an image, initials, or a placeholder icon, with optional size variants, a focus/hover ring state, a notification dot, and a small overlaid company icon/image badge.

**Import**

```jsx
import { Avatar } from 'react-atomic-design-system';
```

**Props**

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| size | string | `''` | No | Controls the avatar's outer dimensions and the notification/company badge size. One of `xs`, `sm`, `md`, `lg`, `xl`, `2xl`. Any other value (including the default) falls back to a `size-4` box. |
| imageUrl | string | `''` | No | URL of the main avatar image. When set, it takes priority over `type` and is rendered in an `<img>`. |
| state | string | `'default'` | No | Visual interaction state applied as a ring around the avatar. One of `default`, `hover`, `focused`. |
| type | string | `'image'` | No | Which fallback content to render when `imageUrl` is empty. One of `image`, `initials`, `icon`. With `initials`, the first letter of each word in `userName` is shown; with `icon`, `placeholderIcon` is shown; otherwise a `?` placeholder is shown. |
| userName | string | `''` | No | Full name used to derive initials (e.g. `"John Doe"` → `"JD"`) when `type="initials"`. |
| placeholderIcon | node | `null` | No | Icon/element rendered when `type="icon"` and no `imageUrl` is set. |
| companyIcon | node | `null` | No | Icon/element rendered in the small company badge when `showCompanyIcon` is true and no `companyImageUrl` is set. |
| companyImageUrl | string | `''` | No | Image URL rendered in the small company badge when `showCompanyIcon` is true; takes priority over `companyIcon`. |
| alt | string | `'Avatar'` | No | `alt` text passed to the main avatar `<img>`. |
| showNotification | bool | `false` | No | Shows a small colored dot in the bottom-right corner of the avatar. |
| notificationColor | string | `'bg-green-500'` | No | Tailwind background-color class applied to the notification dot. |
| showCompanyIcon | bool | `false` | No | Shows the small company badge (only rendered when `companyIcon` or `companyImageUrl` is also provided). |

**Example**

```jsx
<Avatar
  size="md"
  userName="John Doe"
  type="initials"
  showNotification
  notificationColor="bg-green-500"
/>
```

#### Badge

A small inline label ("chip") used to tag or categorize content, with color variants, optional left/right icons or dots, an optional embedded `Avatar` image, and an optional close button for dismissible chips.

**Import**

```jsx
import { Badge } from 'react-atomic-design-system';
```

**Props**

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| children | node | `—` | No | Label content of the badge. When omitted and an icon prop is set, the badge switches to a smaller icon-only layout. |
| variant | string | `'primary'` | No | Color style of the badge. One of `primary`, `success`, `warning`, `error`, `gray`, `blueGray`, `sky`, `blue`, `indigo`, `pink`, `rose`, `orange`. |
| size | string | `'md'` | No | Size of the badge (padding/font, or the icon-only square size). One of `sm`, `md`, `lg`. |
| leftIcon | node | `—` | No | Icon rendered before the content. |
| rightIcon | node | `—` | No | Icon rendered after the content. |
| dotLeft | bool | `false` | No | Renders a small filled dot before the content (in the current text color). |
| dotRight | bool | `false` | No | Renders a small filled dot after the content. |
| className | string | `''` | No | Additional classes merged onto the root `<span>`. |
| image | string | `—` | No | Image URL rendered as a small `Avatar` (`imageUrl`) at the start of the badge. |
| closable | bool | `false` | No | Shows a close (`X`) button; clicking it hides the badge by setting internal visibility state to `false` (the badge unmounts itself, returning `null`). |
| ...props | — | — | No | Any other native `<span>` attributes are spread onto the root element. |

**Example**

```jsx
<Badge variant="success" leftIcon={<CheckIcon />} closable>
  Active
</Badge>
```

#### Button

A standard clickable button with filled/outline/ghost color variants (including red "danger" variants), size options, and optional left/right icons, including an icon-only layout when no `children` are passed.

**Import**

```jsx
import { Button } from 'react-atomic-design-system';
```

**Props**

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| children | node | `—` | No | Button label content. When omitted and an icon prop is set, the button switches to a compact icon-only layout (no gap between icons). |
| variant | string | `'primary'` | No | Color/style of the button. One of `primary`, `secondary`, `outline`, `ghost`, `primaryRed`, `secondaryRed`, `outlineRed`, `ghostRed`. |
| size | string | `'lg'` | No | Button size (padding/text size). One of `sm`, `md`, `lg`, `xl`, `2xl`. |
| leftIcon | node | `—` | No | Icon rendered before the label. |
| rightIcon | node | `—` | No | Icon rendered after the label. |
| className | string | `''` | No | Additional classes merged onto the `<button>`. |
| disabled | bool | `false` | No | Disables the button and applies disabled styling/cursor. |
| ...props | — | — | No | Any other native `<button>` attributes (e.g. `onClick`, `type`) are spread onto the element. |

**Example**

```jsx
<Button variant="primary" size="md" leftIcon={<PlusIcon />}>
  Add item
</Button>
```

#### ButtonGroup

A segmented group of buttons rendered from a `buttons` array, with one item highlighted as active by index, shared color/size variants, and per-button optional icons or icon-only buttons.

**Import**

```jsx
import { ButtonGroup } from 'react-atomic-design-system';
```

**Props**

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| buttons | array | `[]` | No | Array of button descriptors, each shaped like `{ label, leftIcon, rightIcon }`. `label` is required per-item for a button to render text; if a button has no `label` but has `leftIcon`/`rightIcon`, it renders as a square icon-only button. |
| activeIndex | number | `0` | No | Index into `buttons` of the item to render as active/highlighted. |
| variant | string | `'primary'` | No | Color style applied to every button in the group. One of `primary`, `secondary`, `tertiary`. |
| size | string | `'md'` | No | Size applied to every button in the group. One of `sm`, `md`, `lg`. |
| className | string | `''` | No | Additional classes merged onto the wrapping `<div>` (`role="group"`). |
| onClick | func | `() => {}` | No | Called with the clicked button's index, e.g. `onClick(index)`. |
| ...props | — | — | No | Any other native `<div>` attributes are spread onto the wrapping element. |

**Example**

```jsx
<ButtonGroup
  buttons={[{ label: 'Day' }, { label: 'Week' }, { label: 'Month' }]}
  activeIndex={1}
  onClick={(index) => setActiveIndex(index)}
/>
```

#### DatePicker

A single-date picker combining a free-text input (parsed with `chrono-node`, so values like "next week" resolve to a real date) with a calendar popover for direct selection. Internally it composes `Button`, `Calendar`, `Input`, `Label`, and `Popover` primitives imported from a local `@/components/ui/*` path rather than this package's own `Input`/`Button` atoms.

**Import**

```jsx
import { DatePicker } from 'react-atomic-design-system';
```

**Props**

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| date | `Date` | `—` | No | The currently selected date. When it changes, the text field and calendar month are synced to it. |
| onDateChange | func | `—` | Yes | Called with a `Date` whenever the user picks a day on the calendar or types text that `chrono-node` can parse into a date. |

**Example**

```jsx
<DatePicker date={selectedDate} onDateChange={(date) => setSelectedDate(date)} />
```

#### CalendarDatePicker

A date-range (or single-date) picker button that opens a popover containing quick preset ranges ("Today", "This Week", "Last Month", etc.), month/year dropdown selectors, and a range calendar. Supports scrolling the mouse wheel over the day/month/year segments of the trigger label to nudge the selected date. Forwards its `ref` to the underlying trigger `Button`.

**Import**

```jsx
import { CalendarDatePicker } from 'react-atomic-design-system';
```

**Props**

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| id | string | `'calendar-date-picker'` | No | Base id used to build ids for the internal day/month/year hover targets (`firstDay-${id}`, etc.) and passed to the trigger button. |
| className | string | `—` | No | Additional classes merged into the trigger button's variant classes, and also passed through to the underlying `Calendar`. |
| date | object | `—` | No | Current range, shaped `{ from: Date, to: Date }`. In single mode (`numberOfMonths={1}`) only `from` is meaningfully used. |
| closeOnSelect | bool | `false` | No | When true, selecting one of the quick preset ranges closes the popover immediately. |
| numberOfMonths | number | `2` | No | `2` shows two calendar months and range-selection UI (from/to); `1` shows a single month and single-date behavior. |
| yearsRange | number | `10` | No | Number of years (centered on the current year) available in the year dropdown/scroll-select. |
| onDateSelect | func | `—` | Yes | Called with `{ from, to }` (`Date` objects) whenever the range/date changes via presets, calendar selection, dropdowns, or wheel scrolling. |
| variant | string | `—` | No | Passed to the internal `cva`-based style variants for the trigger button. One of `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`. |
| ...props | — | — | No | Any other native `<button>` attributes are spread onto the trigger `Button`. |

**Example**

```jsx
<CalendarDatePicker
  date={dateRange}
  onDateSelect={(range) => setDateRange(range)}
  numberOfMonths={2}
/>
```

#### Input

A labeled text input with size and color/variant styling, optional left/right icons, fixed left prefix text, and helper/error messaging below the field. Declares `PropTypes` for documentation/validation purposes.

**Import**

```jsx
import { Input } from 'react-atomic-design-system';
```

**Props**

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| label | string | `—` | No | Label text rendered above the field. |
| type | string | `'text'` | No | Passed straight through as the native `<input type>`. |
| as | string | `'input'` | No | Declared via `PropTypes.oneOf(['input', 'textarea'])`, but in this implementation it is not used to change the rendered element — the component always renders an `<input>`. |
| size | string | `'default'` | No | Field height/padding/text size. One of `sm`, `default`, `lg`. |
| variant | string | `'default'` | No | Color style of the field border/background/focus ring. One of `default`, `primary`, `secondary`, `destructive`. |
| iconLeft | node | `—` | No | Icon rendered inside the field on the left; also adds left padding to the input. |
| iconRight | node | `—` | No | Icon rendered inside the field on the right; also adds right padding to the input. |
| error | string | `—` | No | Error message shown below the field (in place of `helperText`) and applies destructive border/ring styling to the input. |
| fixedLeftText | string | `—` | No | Fixed prefix text (e.g. `"http://"`) rendered inside the field on the left; reserves left padding on the input for it. |
| fixedRightText | string | `—` | No | Declared via `PropTypes` but not rendered anywhere in the current implementation — has no visible effect. |
| helperText | string | `—` | No | Helper text shown below the field when there is no `error`. |
| className | string | `—` | No | Additional classes merged onto the native `<input>`. |
| ...props | — | — | No | Any other native `<input>` attributes (e.g. `value`, `onChange`, `placeholder`, `disabled`) are spread onto the input. |

**Example**

```jsx
<Input
  label="Website"
  fixedLeftText="http://"
  placeholder="example.com"
  helperText="Enter your site URL"
/>
```

#### OTPInput

A one-time-passcode entry field made of individually boxed digit inputs, with auto-advance to the next box on entry, backspace-to-previous-box behavior, an optional visual separator (for 6-digit codes), and error/helper text.

**Import**

```jsx
import { OTPInput } from 'react-atomic-design-system';
```

**Props**

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| value | string | `''` | No | Current OTP value as a string of digits, one character per box. |
| onChange | func | `—` | Yes | Called with the updated OTP string whenever a digit is entered or removed. |
| length | number | `4` | No | Number of digit boxes to render. Intended for `4` or `6`; when `6`, a `-` separator is rendered after the 4th box. |
| size | string | `'md'` | No | Size of each digit box. One of `sm`, `md`, `lg`. |
| label | string | `—` | No | Label text rendered above the boxes. |
| helperText | string | `—` | No | Helper text shown below the boxes when there is no `error`. |
| error | string | `''` | No | Error message shown below the boxes; also applies red border/ring styling to every box. |
| disabled | bool | `false` | No | Disables all digit inputs and applies disabled styling. |
| name | string | `'otp'` | No | Used as the `htmlFor`/`id` association for the label. |

**Example**

```jsx
<OTPInput
  value={otp}
  onChange={setOtp}
  length={6}
  label="Verification code"
/>
```

#### CircularProgressBar

A circular (ring) progress indicator built from an SVG `<circle>`, showing a percentage value and an optional label, in a fixed set of preset sizes.

**Import**

```jsx
import { CircularProgressBar } from 'react-atomic-design-system';
```

**Props**

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| size | string | `'md'` | No | Preset diameter/stroke/font-size combination. One of `xs`, `sm`, `md`, `lg`, `xl`. |
| percentage | number | `0` | No | Progress value (0–100) shown as text in the center and used to compute the filled arc length. |
| label | string | `''` | No | Optional caption shown alongside the percentage (below the ring for `xs`, overlaid above center for other sizes). |
| variant | string | `'primary'` | No | Color of the progress arc. Only `primary` is defined in the current implementation. |
| bgColor | string | `'stroke-gray-200'` | No | Tailwind `stroke-*` class for the background (track) circle. |
| className | string | `—` | No | Additional classes merged onto the root wrapping `<div>`. |

**Example**

```jsx
<CircularProgressBar size="md" percentage={72} label="Storage" />
```

#### ProgressBar

A horizontal linear progress bar with several ways to display the percentage value: inline next to the bar, as a tooltip above or below the fill position, or as text below the bar.

**Import**

```jsx
import { ProgressBar } from 'react-atomic-design-system';
```

**Props**

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| progress | number | `0` | No | Progress value; clamped to the 0–100 range before rendering. |
| variant | string | `'primary'` | No | Color of the filled bar and percentage text. Only `primary` is defined in the current implementation. |
| showPercentage | string | `'none'` | No | Where (if at all) to display the percentage text. One of `'none'`, `'inline-right'`, `'tooltip-top'`, `'tooltip-bottom'`, `'below-right'`. |
| className | string | `''` | No | Additional classes merged onto the root wrapping `<div>`. |

**Example**

```jsx
<ProgressBar progress={45} showPercentage="tooltip-top" />
```

#### SemiCircularProgressBar

A half-circle (gauge-style) progress indicator built from an SVG arc `<path>`, showing a percentage value and an optional label, in a fixed set of preset sizes.

**Import**

```jsx
import { SemiCircularProgressBar } from 'react-atomic-design-system';
```

**Props**

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| size | string | `'md'` | No | Preset diameter/stroke/font-size combination. One of `xs`, `sm`, `md`, `lg`, `xl`. |
| percentage | number | `0` | No | Progress value (0–100) shown as text inside the arc and used to compute the filled arc length. |
| label | string | `''` | No | Optional caption. Rendered inside the SVG above the percentage for non-`xs` sizes, or below the arc as a separate `<span>` for `xs`. |
| variant | string | `'primary'` | No | Color of the progress arc. Only `primary` is defined in the current implementation. |
| bgColor | string | `'stroke-gray-200'` | No | Tailwind `stroke-*` class for the background (track) arc. |
| className | string | `—` | No | Additional classes merged onto the root wrapping `<div>`. |

**Example**

```jsx
<SemiCircularProgressBar size="lg" percentage={60} label="Battery" />
```

#### Textarea

A labeled multi-line text field with color/variant styling and helper/error messaging below the field.

**Import**

```jsx
import { Textarea } from 'react-atomic-design-system';
```

**Props**

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| label | string | `—` | No | Label text rendered above the field, associated via `htmlFor`/`id` to `name`. |
| name | string | `—` | No | Used as the `id`/`name` of the `<textarea>` and the label's `htmlFor`. |
| placeholder | string | `''` | No | Native placeholder text. |
| value | string | `—` | No | Controlled value of the `<textarea>`. |
| onChange | func | `—` | No | Change handler passed straight through to the native `<textarea>`. |
| variant | string | `'primary'` | No | Color style of the field border/focus ring/messages. One of `primary`, `danger`. |
| disabled | bool | `false` | No | Disables the field and applies disabled styling. |
| error | string | `''` | No | Error message shown below the field (in place of `helperText`) and applies red border/ring styling. |
| helperText | string | `''` | No | Helper text shown below the field when there is no `error`. |
| rows | number | `4` | No | Native `rows` attribute controlling the field's visible height. |
| className | string | `''` | No | Additional classes merged onto the native `<textarea>`. |

**Example**

```jsx
<Textarea
  label="Comments"
  name="comments"
  placeholder="Add any additional notes"
  rows={5}
/>
```

### Molecules

Molecules are composed by combining atoms (and other primitives, such as Radix UI parts or `@tanstack/react-table`) into more complete, self-contained UI patterns like avatar groups, checkboxes, dropdowns, tables, modals, and navigation elements.

#### AvatarGroup

Renders a stack of overlapping avatars (images or initials derived from a name string), optionally collapsing extra avatars into a "+N" indicator and/or showing an "add" button at the end of the stack.

**Import**

```jsx
import { AvatarGroup } from 'react-atomic-design-system';
```

**Props**

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| avatars | array of string | `[]` | No | List of avatar entries. Each string is treated as an image URL if it starts with `http` or contains a `.`; otherwise it is treated as a name and rendered as initials. |
| size | string enum: `sm`, `md`, `lg` | `'md'` | No | Controls the diameter, border thickness, and text size of each avatar. |
| maxVisible | number | `5` | No | Maximum number of avatars shown before the rest are collapsed into a "+N" badge. |
| showMoreButton | bool | `true` | No | When `true` and there are more avatars than `maxVisible`, shows a "+N" badge for the remaining count. |
| showAddButton | bool | `false` | No | When `true`, renders a dashed circular button with a plus icon after the avatar stack. |
| onAddClick | function | `() => {}` | No | Click handler for the add button. Called with no documented arguments (the raw click event). |

**Example**

```jsx
<AvatarGroup
  avatars={['https://i.pravatar.cc/100', 'Jane Doe', 'John Smith']}
  size="md"
  maxVisible={2}
  showAddButton
  onAddClick={() => console.log('add clicked')}
/>
```

#### AvatarWithInfo

Pairs an `Avatar` with a name and optional email/subtitle text, used for user identity rows in lists, headers, and menus.

**Import**

```jsx
import { AvatarWithInfo } from 'react-atomic-design-system';
```

**Props**

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| size | string enum: `sm`, `md`, `lg`, `xl` | `'md'` | No | Controls both the avatar size (forwarded to `Avatar`) and the text sizes for the name/email. |
| userName | string | `''` | No | Display name rendered next to the avatar and passed through to `Avatar` for initials fallback. |
| email | string | `''` | No | Secondary line of text shown under the name; only rendered when non-empty. |
| ...avatarProps | object | `—` | No | Any other prop is spread onto the underlying `Avatar` atom (e.g. `imageUrl`, `showNotification`, `notificationColor`, `type`, `state`, `alt`, `showCompanyIcon`, `companyIcon`, `companyImageUrl`, `placeholderIcon`). |

**Example**

```jsx
<AvatarWithInfo
  size="sm"
  userName="Jese Leos"
  email="jese@example.com"
  imageUrl="https://i.pravatar.cc/100"
  showNotification
/>
```

#### BadgeGroup

An inline pill/badge that combines a label, an optional leading/trailing icon, and an optional embedded action button on either side of the label. Used for tags, statuses, or filter chips that also need a small inline action.

**Import**

```jsx
import { BadgeGroup } from 'react-atomic-design-system';
```

**Props**

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| label | string | `''` | No | Text shown in the badge. |
| icon | node | `—` | No | Icon element rendered next to the label. |
| iconPosition | string enum: `left`, `right` | `'left'` | No | Which side of the badge the `icon` appears on. |
| variant | string enum: `primary`, `success`, `warning`, `error`, `gray`, `blueGray`, `sky`, `blue`, `indigo`, `pink`, `rose`, `orange` | `'primary'` | No | Controls the badge's background/text color scheme. |
| size | string enum: `sm`, `md`, `lg` | `'md'` | No | Controls padding and font size of the badge and its embedded button. |
| showButton | bool | `false` | No | Whether to render the embedded action button. |
| buttonPosition | string enum: `left`, `right` | `'right'` | No | Which side of the label the embedded button appears on. |
| buttonLabel | string | `'Click'` | No | Text shown on the embedded button. |
| buttonIcon | node | `—` | No | Icon element rendered inside the embedded button. |
| buttonIconPosition | string enum: `left`, `right` | `'right'` | No | Which side of `buttonLabel` the `buttonIcon` appears on. |

**Example**

```jsx
<BadgeGroup
  label="In review"
  variant="warning"
  size="md"
  showButton
  buttonLabel="Undo"
  buttonPosition="right"
/>
```

#### ChatMessage

A self-contained chat panel with a header (title/subtitle and optional "Messages"/"Participants" tabs), a scrollable message thread (with date dividers and file-attachment rendering), a participants list, and a message input with attach/emoji/send actions. It manages its own text-input and active-tab state internally.

**Import**

```jsx
import { ChatMessage } from 'react-atomic-design-system';
```

**Props**

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| currentUser | string | `'You'` | No | Name used to determine which messages are rendered as "sent by me" (right-aligned, violet bubble) vs. others. |
| messages | array of object | `[]` | No | Each item: `{ id, name, message, time, dateString, avatar, attachment: { url, name, size } }`. `dateString` drives the "Today"/"Yesterday"/weekday date dividers; if `attachment` is present its `url`/`name`/`size` are rendered as a downloadable link instead of `message`. |
| onSend | function | `() => {}` | No | Called with the trimmed message string when the user submits the input (Enter key or send button). |
| chatTitle | string | `''` | No | Title text shown in the header. |
| chatSubtitle | string | `''` | No | Subtitle text shown under the title. |
| participants | array of object | `[]` | No | Each item: `{ name, email, imageUrl }`. Rendered in the "Participants" tab via `AvatarWithInfo`, and its length is shown as a count badge next to the "Participants" tab label. |
| showTabs | bool | `false` | No | When `true`, shows the "Messages" / "Participants" tab switcher in the header. |
| onAttach | function | `() => {}` | No | Click handler for the paperclip (attach) button. |
| onEmoji | function | `() => {}` | No | Click handler for the emoji button. |
| className | string | `''` | No | Additional classes merged onto the root container. |
| ...props | object | `—` | No | Any other native HTML attributes are passed through to the root `<div>`. |

**Example**

```jsx
<ChatMessage
  chatTitle="Team Chat"
  chatSubtitle="3 members"
  currentUser="You"
  showTabs
  messages={[
    { id: 1, name: 'Jane', message: 'Hey there!', time: '9:00 AM', dateString: '2026-09-16' },
  ]}
  participants={[{ name: 'Jane', email: 'jane@example.com' }]}
  onSend={(text) => console.log(text)}
/>
```

#### CheckBox

A single checkbox or radio input with a custom styled control (check mark, radio dot, or indeterminate dash), an optional label and description, and forwarded ref access to the underlying native input.

**Import**

```jsx
import { CheckBox } from 'react-atomic-design-system';
```

**Props**

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| type | string enum: `checkbox`, `radio` | `'checkbox'` | No | Native input type; also determines which custom mark (tick vs. dot) is drawn and the control's shape (rounded vs. circular). |
| label | string | `—` | No | Primary label text shown next to the control. |
| description | string | `—` | No | Secondary helper text shown under the label. |
| name | string | `—` | No | Native `name` attribute of the input. |
| value | string | `—` | No | Native `value` attribute of the input. |
| checked | bool | `—` | No | Whether the input is checked (controlled). |
| onChange | function | `—` | No | Native `onChange` handler, called with the change event. |
| disabled | bool | `false` | No | Disables the input and dims/greys out the control. |
| id | string | `—` | No | Native `id`, also used as the wrapping `<label>`'s `htmlFor`. |
| indeterminate | bool | `false` | No | When `type="checkbox"`, sets the native `indeterminate` DOM property (via a `useEffect`) and renders a dash instead of a check mark. |
| size | string enum: `sm`, `md` | `'md'` | No | Controls the control, label, description, and icon sizing. |
| variant | string enum: `primary`, `secondary`, `tertiary` | `'primary'` | No | Controls the checked/hover/focus color scheme (violet, rose, or green). |
| className | string | `''` | No | Additional classes merged onto the visually-hidden native `<input>`. |
| ...props | object | `—` | No | Any other native HTML attributes are passed through to the native `<input>`. |

Forwards its ref to the underlying `<input>` element via `forwardRef`.

**Example**

```jsx
<CheckBox
  id="terms"
  label="Accept terms"
  description="You agree to our terms of service"
  checked={accepted}
  onChange={(e) => setAccepted(e.target.checked)}
  variant="primary"
/>
```

#### CheckBoxGroup

A card-style checkbox or radio item: a bordered, clickable card containing a label, optional helper label and description, an optional leading icon/avatar, and a check/radio control positioned on the left or right.

**Import**

```jsx
import { CheckBoxGroup } from 'react-atomic-design-system';
```

**Props**

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| id | string | `—` | No | Native `id`, used as the wrapping `<label>`'s `htmlFor`. |
| type | string enum: `checkbox`, `radio` | `'checkbox'` | No | Determines the native input type, the drawn control shape/icon, and whether indeterminate state applies. |
| label | string | `—` | No | Primary label text. |
| name | string | `—` | No | Native `name` attribute of the input. |
| helperLabel | string | `—` | No | Small extra text rendered next to the label. |
| description | string | `—` | No | Secondary description text under the label. |
| iconholder | node | `—` | No | Icon element rendered as leading/trailing media (takes priority over `image`). |
| image | string | `—` | No | Image URL rendered via an `Avatar` (`size="xs"`) when `iconholder` is not provided. |
| checkboxPosition | string enum: `left`, `right` | `'right'` | No | Which side of the card the check/radio control is rendered on. |
| mediaPosition | string enum: `left`, `right` | `'left'` | No | Which side the icon/avatar media is rendered on. |
| checked | bool | `false` | No | Whether the item is checked/selected. |
| indeterminate | bool | `false` | No | For `type="checkbox"`, renders a dash mark and indeterminate styling; also sets the native DOM `indeterminate` property. |
| onChange | function | `—` | No | Native `onChange` handler for the hidden input. |
| disabled | bool | `false` | No | Disables the card and greys it out. |
| size | string enum: `sm`, `md` | `'md'` | No | Controls control/label/description sizing. |
| variant | string enum: `primary`, `secondary` | `'primary'` | No | Controls the checked color scheme (violet vs. gray). |
| squareCheckbox | bool | `false` | No | For `type="checkbox"`, renders a square/rounded control instead of a circular one. |
| className | string | `—` | No | Additional classes merged onto the card `<div>`. |
| ...props | object | `—` | No | Any other native HTML attributes are passed through to the card `<div>`. |

**Example**

```jsx
<CheckBoxGroup
  id="plan-basic"
  name="plan"
  type="radio"
  label="Basic plan"
  description="Great for individuals"
  checked={selected === 'basic'}
  onChange={() => setSelected('basic')}
/>
```

#### CardCheckboxWithHeader

A checkbox card with a distinct header row (icon, title, and the check control) separated from a body section (label, helper label, description, and an optional badge).

**Import**

```jsx
import { CardCheckboxWithHeader } from 'react-atomic-design-system';
```

**Props**

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| id | string | `—` | No | Native `id`, used as the wrapping `<label>`'s `htmlFor`. |
| name | string | `—` | No | Native `name` attribute of the hidden checkbox input. |
| title | string | `''` | No | Text shown in the header row, next to the optional `icon`. |
| label | string | `''` | No | Main body text (rendered as a large heading-like line). |
| description | string | `''` | No | Secondary body text under `label`. |
| helperLabel | string | `''` | No | Extra inline text appended after `label`. |
| icon | node | `—` | No | Icon rendered in the header, before `title`. |
| badge | node or string | `—` | No | If a string, rendered as `<Badge {...badgeProps}>{badge}</Badge>`; if any other node, rendered as-is. |
| badgeProps | object | `{}` | No | Props spread onto the `Badge` atom when `badge` is a string. |
| checked | bool | `false` | No | Whether the card is checked/selected. |
| indeterminate | bool | `false` | No | Renders a dash mark instead of a check, and sets the native DOM `indeterminate` property. |
| onChange | function | `—` | No | Native `onChange` handler for the hidden checkbox. |
| disabled | bool | `false` | No | Disables the card and dims it. |
| shape | string (Tailwind class) | `'rounded-full'` | No | Tailwind class applied to the check control's shape (e.g. `rounded-full`, `rounded-md`). |
| size | string enum: `sm`, `md` | `'md'` | No | Controls title/label/description/icon sizing. |
| variant | string enum: `primary`, `secondary` | `'primary'` | No | Controls the checked/header/border color scheme (violet vs. gray). |
| className | string | `—` | No | Additional classes merged onto the outer `<label>`. |
| ...props | object | `—` | No | Any other native HTML attributes are passed through to the outer `<label>`. |

**Example**

```jsx
<CardCheckboxWithHeader
  id="addon-storage"
  title="Extra Storage"
  label="100GB"
  description="Additional cloud storage for your account"
  badge="Popular"
  checked={hasStorage}
  onChange={(e) => setHasStorage(e.target.checked)}
/>
```

#### PaymentCheckBoxCard

A checkbox card tailored for payment-method selection: an icon, title, description, optional helper text, and an inline "Edit" button, with the check control on the right.

**Import**

```jsx
import { PaymentCheckBoxCard } from 'react-atomic-design-system';
```

**Props**

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| id | string | `—` | No | Native `id`, used as the wrapping `<label>`'s `htmlFor`. |
| name | string | `—` | No | Native `name` attribute of the hidden checkbox. |
| checked | bool | `false` | No | Whether the payment method card is selected. |
| indeterminate | bool | `false` | No | Renders a dash mark instead of a check, and sets the native DOM `indeterminate` property. |
| onChange | function | `—` | No | Native `onChange` handler for the hidden checkbox. |
| disabled | bool | `false` | No | Disables the card and dims it. |
| size | string enum: `sm`, `md` | `'md'` | No | Controls control and text sizing. |
| variant | string enum: `primary` | `'primary'` | No | Controls the checked color scheme; only `primary` is defined in `variantStyles`. |
| squareCheckbox | bool | `false` | No | Renders a square/rounded control instead of a circular one. |
| icon | node | `—` | No | Leading icon (e.g. a card-brand logo). |
| title | string | `—` | No | Title text, e.g. the card name. |
| description | string | `—` | No | Description text, e.g. masked card number. |
| helperText | string | `—` | No | Extra text shown next to the edit button (e.g. "Expires 12/26"). |
| buttonLabel | string | `'Edit'` | No | Label of the inline action button; the button is only rendered if `helperText` or `buttonLabel` is truthy. |
| onButtonClick | function | `—` | No | Called when the inline button is clicked (the click's default is prevented so it doesn't toggle the checkbox). |
| className | string | `—` | No | Additional classes merged onto the card `<div>`. |
| ...props | object | `—` | No | Any other native HTML attributes are passed through to the card `<div>`. |

**Example**

```jsx
<PaymentCheckBoxCard
  id="card-visa"
  title="Visa ending in 4242"
  description="Expires 08/27"
  buttonLabel="Edit"
  checked={defaultCard === 'visa'}
  onChange={() => setDefaultCard('visa')}
  onButtonClick={() => openEditCard('visa')}
/>
```

#### ComboboxDropdown

A searchable/selectable combobox: a text input that opens a list of items on focus/click, supports client-side filtering by name/tag, optional in-list search, and renders each item as plain text, with an avatar, a generic user icon, or a status indicator dot.

**Import**

```jsx
import { ComboboxDropdown } from 'react-atomic-design-system';
```

**Props**

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| label | string | `''` | No | Label text shown above the combobox. |
| placeholder | string | `'Select an option'` | No | Placeholder text for the input. |
| leftIcon | node | `null` | No | Icon rendered at the start of the input. |
| showSecondaryText | bool | `true` | No | Declared but not read anywhere in the render logic (has no observable effect). |
| showRightAvatar | bool | `true` | No | Declared but not read anywhere in the render logic (has no observable effect). |
| items | array of object | `[]` | No | Each item: `{ name, tag, disabled, url, statusColor }`. `name`/`tag` are used for filtering and display; `url` is used as the avatar image when `variant="avatar"`; `statusColor` is a Tailwind text-color class used as the status dot color when `variant="statusIndicator"`. |
| inputClassName | string | `''` | No | Additional classes appended to the input's container. |
| variant | string enum: `simple`, `avatar`, `userIcon`, `statusIndicator` | `'simple'` | No | Controls what leading visual is rendered per item (`simple` renders nothing extra). |
| hoverClass | string (Tailwind classes) | `'hover:bg-gray-100'` | No | Classes applied on hover to the trigger and list items. |
| focusClass | string (Tailwind classes) | `'focus:ring-2 focus:ring-violet-300'` | No | Classes applied on focus to the trigger. |
| disabledClass | string (Tailwind classes) | `'opacity-50 cursor-not-allowed'` | No | Classes applied when `disabled` is `true` or an individual item has `disabled: true`. |
| disabled | bool | `false` | No | Disables the whole combobox. |
| showTag | bool | `false` | No | When `true`, renders each item's `tag` next to its `name`. |
| defaultSelected | object | `null` | No | Initial selected item, matching the `items` shape. |
| searchable | bool | `false` | No | When `true`, shows an additional search input inside the open dropdown panel. |

**Example**

```jsx
<ComboboxDropdown
  label="Assignee"
  variant="avatar"
  items={[
    { name: 'Jane Doe', tag: '@jane', url: 'https://i.pravatar.cc/100' },
    { name: 'John Smith', tag: '@john', url: 'https://i.pravatar.cc/101' },
  ]}
  searchable
/>
```

#### DataTableGrid

A full-featured data grid built on `@tanstack/react-table`, with a title/description header, a global text filter input, a rows-per-page select, an optional `FilterPanel` (name/email/status search), sticky left/right column pinning, top/bottom row pinning, striped rows, and built-in pagination via the `Pagination` component.

**Import**

```jsx
import { DataTableGrid } from 'react-atomic-design-system';
```

**Props**

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| title | string | `'Data Table'` | No | Heading text shown above the table. |
| description | string | `'Manage and view your records below.'` | No | Subtext shown under the title. |
| columns | array of object (`@tanstack/react-table` `ColumnDef`) | `—` | Yes | Passed directly to `useReactTable`. Each column definition typically has `accessorKey`/`accessorFn`, `header`, and `cell` (rendered via `flexRender`). |
| data | array of object | `—` | Yes | Row data passed directly to `useReactTable`. Row ids are derived from `row.id`, else `row.email`, else a JSON-stringified fallback. |
| filterColumnKey | array of string | `[]` | No | Column accessor keys used both for the "Filter by ..." input placeholder text and for a custom `multi` filter function that checks those columns' values. |
| showFilterInput | bool | `true` | No | Shows the global filter text input (only rendered when `filterColumnKey` is also non-empty). |
| showFilteration | bool | `true` | No | Shows the `FilterPanel` (name/email/status filter popover), whose `onSearch` result is applied to the table's global filter. |
| stripedRows | bool | `false` | No | Alternates background color on odd non-pinned rows. |
| enableRowPinning | bool | `false` | No | Passed to `useReactTable` as `enableRowPinning`. |
| leftpinnedColumnCount | number | `0` | No | Number of leading columns rendered with sticky `position: 'sticky'; left: ...` styling. |
| rightPinnedColumnCount | number | `0` | No | Number of trailing columns rendered with sticky `position: 'sticky'; right: ...` styling. |
| pinnedRows | object | `{ top: [], bottom: [] }` | No | Read for `top`/`bottom` arrays, though the component recomputes its own top/bottom pinned row ids from `topPinnedRowCount`/`bottomPinnedRowCount` rather than using these arrays directly. |
| topPinnedRowCount | number | `0` | No | Number of leading rows (by data order) pinned to the top of the body, rendered with a gray background. |
| bottomPinnedRowCount | number | `0` | No | Number of trailing rows (by data order) pinned to the bottom of the body, rendered with a gray background. |

**Example**

```jsx
<DataTableGrid
  title="Users"
  description="All registered users"
  columns={[
    { accessorKey: 'name', header: 'Name' },
    { accessorKey: 'email', header: 'Email' },
  ]}
  data={[
    { id: '1', name: 'Jane Doe', email: 'jane@example.com' },
    { id: '2', name: 'John Smith', email: 'john@example.com' },
  ]}
  filterColumnKey={['name', 'email']}
  stripedRows
/>
```

#### DataTable

A simpler HTML-table component (not backed by `@tanstack/react-table`) with column definitions, optional row selection via checkboxes (with an indeterminate "select all" header checkbox), an optional per-row action column (icon buttons or a "menu" `⋮` popover), striping, client-side pagination, and a title/description header.

**Import**

```jsx
import { DataTable } from 'react-atomic-design-system';
```

**Props**

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| items | array of object | `[]` | No | Row data. Each object's fields are looked up by `column.accessor` (e.g. `item[col.accessor]`) unless the column defines a custom `render`. |
| columns | array of object | `[]` | No | Each item: `{ accessor, header, render }`. `accessor` is the key used for both React `key`s and default cell rendering; `header` is the column header text; `render(item)` is an optional custom cell renderer. |
| selectable | bool | `false` | No | Shows a checkbox column with per-row selection and a "select all" checkbox (with indeterminate state) in the header. |
| pageSize | number | `5` | No | Number of rows shown per page; pagination is computed as `Math.ceil(items.length / pageSize)`. |
| title | string | `''` | No | Heading text above the table. |
| description | string | `''` | No | Subtext under the title. |
| actionColumn | object | `null` | No | Shape: `{ header, variant, getActions(item) }`. `variant` is `'menu'` (a `⋮` hover popover) or any other value (inline icon/ghost buttons, default treated as icon-only unless `variant === 'ghost'` which also shows the label). `getActions(item)` must return an array of `{ label, icon, onClick }`. |
| striped | bool | `false` | No | Alternates background color on odd rows. |

**Example**

```jsx
<DataTable
  title="Users"
  items={[{ name: 'Jane Doe', email: 'jane@example.com' }]}
  columns={[
    { accessor: 'name', header: 'Name' },
    { accessor: 'email', header: 'Email' },
  ]}
  selectable
  pageSize={10}
  actionColumn={{
    variant: 'ghost',
    getActions: (item) => [{ label: 'Edit', onClick: () => console.log(item) }],
  }}
/>
```

#### Dropdowns

A generic dropdown/menu panel: a list of items with optional checkboxes, leading icons, trailing counts/shortcuts, dividers, and an optional header (string or custom node). Manages its own internal checked-state array when `withCheckbox` is used.

**Import**

```jsx
import { Dropdowns } from 'react-atomic-design-system';
```

**Props**

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| items | array of object | `[]` | No | Each item: `{ label, icon, checked, count, shortcut, disabled }`. `label` is the item text; `icon` is shown when `withIcons` is true; `count` shown when `withCount` is true; `shortcut` shown when `withShortcuts` is true; `checked` seeds the initial checkbox state. |
| withDivider | bool | `false` | No | Renders a divider `<hr>` after every 3rd item and before the last item. |
| withIcons | bool | `false` | No | Shows each item's `icon` (if present). |
| withCheckbox | bool | `false` | No | Shows a `CheckBox` per item; when enabled, clicking the row toggles the checkbox instead of directly firing `onSelect`. |
| withHeader | string or node | `''` | No | If a string, rendered as a bold header line; if any other node, rendered as-is; falsy values render no header. |
| withShortcuts | bool | `false` | No | Shows each item's `shortcut` text on the right. |
| withCount | bool | `false` | No | Shows each item's `count` on the right (only when `count !== undefined`). |
| onSelect | function | `() => {}` | No | Called with the selected item object when a row is clicked (without `withCheckbox`), or with `{ ...item, checked }` when a checkbox is toggled. |
| className | string | `—` | No | Additional classes merged onto the root `<div>`. |
| ...props | object | `—` | No | Any other native HTML attributes are passed through to the root `<div>`. |

**Example**

```jsx
<Dropdowns
  withHeader="Actions"
  withDivider
  withIcons
  withShortcuts
  items={[
    { label: 'New File', icon: <FileIcon />, shortcut: '⌘N' },
    { label: 'Logout', icon: <LogOut />, shortcut: '⌘Q' },
  ]}
  onSelect={(item) => console.log(item)}
/>
```

#### DropdownSelect

A single-select dropdown button: click to open a list of items, optionally search/filter them, select one (rendered back on the trigger), and clear the selection with an "X" icon. Each item can render as plain text, with an avatar, a generic user icon, or a status dot.

**Import**

```jsx
import { DropdownSelect } from 'react-atomic-design-system';
```

**Props**

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| label | string | `—` | No | Label text shown above the dropdown. |
| items | array of object | `[]` | No | Each item: `{ name, tag, disabled, url, statusColor }`, same shape as `ComboboxDropdown`. |
| variant | string enum: `default`, `primary`, `secondary`, `destructive` | `'primary'` | No | Controls the trigger button's border/focus color scheme. |
| type | string enum: `avatar`, `userIcon`, `statusIndicator` (or `''`) | `''` | No | Controls the leading visual rendered for the selected item and each list item. |
| onChange | function | `—` | No | Called with the selected item object, or `null` when cleared. |
| placeholder | string | `'Select your user'` | No | Text shown on the trigger when nothing is selected. |
| placeholderIcon | node | `<Search className="size-5" />` | No | Icon shown next to the placeholder text when `showPlaceholderIcon` is `true`. |
| showPlaceholderIcon | bool | `false` | No | Whether to show `placeholderIcon` next to the placeholder. |
| defaultSelected | object | `null` | No | Initial selected item. |
| disabled | bool | `false` | No | Disables opening the dropdown. |
| disabledClass | string (Tailwind classes) | `'opacity-50 cursor-not-allowed'` | No | Classes applied to the trigger when `disabled`, and to individual list items with `disabled: true`. |
| className | string | `''` | No | Additional classes appended to the root wrapper's class string. |
| showTag | bool | `false` | No | When `true`, shows each item's `tag` next to its `name`. |
| searchable | bool | `false` | No | When `true`, shows a search input inside the open dropdown panel. |

**Example**

```jsx
<DropdownSelect
  label="Owner"
  type="avatar"
  items={[{ name: 'Jane Doe', url: 'https://i.pravatar.cc/100' }]}
  onChange={(item) => console.log(item)}
  searchable
/>
```

#### InputWithDropDown

A text input that can be combined with a native `<select>` attached to its left or right edge (e.g. a currency or unit picker next to a numeric field), plus optional leading/trailing icons, error and helper text, and size/variant styling.

**Import**

```jsx
import { InputWithDropDown } from 'react-atomic-design-system';
```

**Props**

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| label | string | `—` | No | Label text shown above the field. |
| name | string | `—` | Yes | Native `name`/`id` for the text input (declared required via PropTypes). |
| type | string | `'text'` | No | Native input `type` (e.g. `text`, `number`, `email`). |
| placeholder | string | `—` | No | Native input placeholder. |
| value | string | `—` | No | Controlled input value. |
| onChange | function | `—` | No | Native `onChange` handler. |
| leftIcon | node | `—` | No | Icon rendered before the input (and before an attached dropdown, if the dropdown has no `rightIcon`). |
| rightIcon | node | `—` | No | Icon rendered after the input. When both `dropdown` and `rightIcon` are set, the dropdown is placed on the left instead. |
| dropdown | object | `—` | No | Shape: `{ name, defaultValue, options }` where `options` is an array of strings rendered as `<option>`s. Renders an attached native `<select>` on the left (if `rightIcon` is also set) or the right (otherwise). |
| error | string | `—` | No | Error message shown below the field; also applies destructive border/ring styling. |
| helperText | string | `—` | No | Helper text shown below the field when there is no `error`. |
| className | string | `—` | No | Additional classes merged onto the root wrapper. |
| disabled | bool | `false` | No | Disables the input, the attached dropdown, and dims the field. |
| size | string enum: `sm`, `default`, `lg` | `'default'` | No | Controls field height, padding, and text size. |
| variant | string enum: `default`, `primary`, `secondary`, `destructive` | `'default'` | No | Controls the field's background/border/focus color scheme. |

Declares PropTypes matching the table above (`name` and `dropdown.name`/`dropdown.options` are marked required).

**Example**

```jsx
<InputWithDropDown
  label="Amount"
  name="amount"
  type="number"
  placeholder="0.00"
  value={amount}
  onChange={(e) => setAmount(e.target.value)}
  dropdown={{ name: 'currency', defaultValue: 'USD', options: ['USD', 'EUR', 'GBP'] }}
/>
```

#### Modal

A centered, overlay-based confirmation/alert dialog with an icon, title, description, an optional "don't show again" checkbox, and primary/secondary action buttons. Supports a `default` (stacked, centered icon) or `inline` (icon beside content) layout. It is a simple conditionally-rendered component, not a Radix `Dialog` — visibility is controlled purely by the `isOpen` prop, and there is no focus trap, portal, or escape-key handling.

**Import**

```jsx
import { Modal } from 'react-atomic-design-system';
```

**Props**

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| isOpen | bool | `—` | Yes | Whether the modal is rendered; when falsy, the component renders `null`. |
| onClose | function | `—` | No | Used as the fallback `onClick` handler for the secondary button when `secondaryAction.onClick` is not provided. |
| title | string | `—` | No | Modal title text. |
| description | string | `—` | No | Modal body text. |
| textAlign | string enum: `center`, `left` | `'center'` | No | Text alignment for the title/description in the `default` layout. |
| variant | string enum: `primary`, `warning`, `danger` | `'primary'` | No | Controls the icon badge color and is forwarded as the primary button's `variant`. |
| iconPosition | string enum: `center`, `left` | `'center'` | No | Icon alignment in the `default` layout. |
| layout | string enum: `default`, `inline` | `'default'` | No | `inline` places the icon beside the title/description/checkbox/buttons in one row; `default` stacks icon, then text, then buttons. |
| showCheckbox | bool | `false` | No | Shows a "don't show again" checkbox (only rendered in the `inline` layout). |
| checkboxLabel | string | `'Don’t show again'` | No | Label text for that checkbox. |
| onCheckboxChange | function | `() => {}` | No | Native `onChange` handler for that checkbox. |
| primaryAction | object | `{ label: 'OK', onClick: () => {} }` | No | Shape: `{ label, onClick }`. Rendered as the primary button; hidden entirely if `label` is falsy. |
| secondaryAction | object | `{ label: 'Cancel', onClick: () => {} }` | No | Shape: `{ label, onClick }`. Rendered as an outline button; hidden entirely if `label` is falsy; falls back to `onClose` if `onClick` is not provided. |

**Example**

```jsx
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Delete item?"
  description="This action cannot be undone."
  variant="danger"
  primaryAction={{ label: 'Delete', onClick: handleDelete }}
  secondaryAction={{ label: 'Cancel', onClick: () => setIsOpen(false) }}
/>
```

#### Navbar

A fixed, self-contained top navigation bar with a light/dark theme toggle button (backed by an internal `toggleTheme` helper that flips a `dark` class on `document.body`), a notification bell, and a user avatar with a dropdown menu (built from the internal `Dropdowns` component) offering New File/Upload/Download/Logout actions. Its content (avatar image, user name, email, and menu items) is currently hardcoded in the component rather than passed in as props.

**Import**

```jsx
import { Navbar } from 'react-atomic-design-system';
```

**Props**

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| className | string | `''` | No | Additional classes merged onto the root `<nav>` element. |

**Example**

```jsx
<Navbar className="border-b" />
```

#### Pagination

A three-column (previous / page numbers / next) pagination control with truncated page-number ranges (showing ellipses for large page counts) and a choice of button style, color, and shape.

**Import**

```jsx
import { Pagination } from 'react-atomic-design-system';
```

**Props**

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| totalPages | number | `10` | No | Total number of pages. |
| currentPage | number | `1` | No | Currently active page (1-indexed). |
| onPageChange | function | `—` | No | Called with the target page number when a page button, or the prev/next button, is clicked. |
| color | string enum: `primary` | `'primary'` | No | Controls the active page number's color scheme; only `primary` is defined in `colorStyles`. |
| arrowStyle | string enum: `ghost`, `outline`, `arrows-only` | `'ghost'` | No | Controls the prev/next button styling; `arrows-only` hides the `prevLabel`/`nextLabel` text and shows only the arrow icons. |
| shape | string enum: `square`, `circle` | `'square'` | No | Shape of the page-number buttons. |
| prevLabel | string | `'Previous'` | No | Text label for the previous button (hidden when `arrowStyle="arrows-only"`). |
| nextLabel | string | `'Next'` | No | Text label for the next button (hidden when `arrowStyle="arrows-only"`). |
| className | string | `''` | No | Additional classes merged onto the root grid container. |

**Example**

```jsx
<Pagination
  totalPages={12}
  currentPage={page}
  onPageChange={setPage}
  arrowStyle="outline"
  shape="circle"
/>
```

#### PaginationGroup

A single connected button-group pagination control (all buttons share one bordered, divided container), with configurable alignment, a text/arrow/text+arrow button style, and truncated page-number ranges.

**Import**

```jsx
import { PaginationGroup } from 'react-atomic-design-system';
```

**Props**

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| currentPage | number | `—` | No | Currently active page (1-indexed). |
| totalPages | number | `—` | No | Total number of pages; when `<= 7` all page numbers are shown, otherwise a truncated range with `...` is shown. |
| onPageChange | function | `—` | No | Called with the target page number when a page or prev/next button is clicked. |
| alignment | string enum: `left`, `center`, `right` | `'center'` | No | Horizontal alignment of the button group within its container. |
| buttonStyle | string enum: `text`, `arrow`, `text+arrow` | `'text+arrow'` | No | `text` shows only `prevLabel`/`nextLabel`; `arrow` shows only arrow icons; `text+arrow` shows both. |
| color | string enum: `primary`, `secondary`, `tertiary` | `'primary'` | No | Controls the active page button and group border color scheme. |
| prevLabel | string | `'Previous'` | No | Text for the previous button (used when `buttonStyle` includes text). |
| nextLabel | string | `'Next'` | No | Text for the next button (used when `buttonStyle` includes text). |
| className | string | `''` | No | Additional classes merged onto the root `<div>`. |
| ...props | object | `—` | No | Any other native HTML attributes are passed through to the root `<div>`. |

**Example**

```jsx
<PaginationGroup
  currentPage={page}
  totalPages={9}
  onPageChange={setPage}
  buttonStyle="text+arrow"
  color="secondary"
/>
```

#### PaginationInfoBar

A "Page X of Y" indicator combined with previous/next buttons, arranged according to one of four layouts (`top`, `center`, `split`, `mobile`).

**Import**

```jsx
import { PaginationInfoBar } from 'react-atomic-design-system';
```

**Props**

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| totalPages | number | `1` | No | Total number of pages, shown in the "Page X of Y" text. |
| currentPage | number | `1` | No | Currently active page, shown in the "Page X of Y" text. |
| onPageChange | function | `—` | No | Called with the clamped target page number (`Math.max`/`Math.min` against `1`/`totalPages`) when prev/next is clicked. |
| variant | string enum: `ghost`, `outline`, `arrows-only` | `'ghost'` | No | Controls prev/next button styling; `arrows-only` renders only the arrow icons (no text). |
| layout | string enum: `top`, `center`, `split`, `mobile` | `'top'` | No | Controls the relative placement of the page text and the prev/next buttons. |
| prevLabel | string | `'Previous'` | No | Text for the previous button (hidden when `variant="arrows-only"`). |
| nextLabel | string | `'Next'` | No | Text for the next button (hidden when `variant="arrows-only"`). |
| className | string | `''` | No | Additional classes merged onto the root `<div>`. |
| ...props | object | `—` | No | Any other native HTML attributes are passed through to the root `<div>`. |

**Example**

```jsx
<PaginationInfoBar
  currentPage={page}
  totalPages={5}
  onPageChange={setPage}
  layout="split"
  variant="outline"
/>
```

#### SocialMediaButton

A single social-login/share button with a preset color scheme per provider, an icon, and an optional visible label (falling back to an icon-only square button when there is no label or `showLabel` is `false`).

**Import**

```jsx
import { SocialMediaButton } from 'react-atomic-design-system';
```

**Props**

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| icon | node | `—` | No | Icon element rendered inside the button. |
| label | string | `—` | No | Text label rendered next to the icon (only shown when `showLabel` is also `true`). |
| variant | string enum: `google`, `facebook`, `apple`, `twitter`, `figma`, `dribble` | `''` | No | Selects the provider's color scheme. An unrecognized/empty value results in no variant classes being applied. |
| showLabel | bool | `true` | No | Whether to render `label` (and switch from icon-only to icon+text sizing). |
| onClick | function | `—` | No | Native click handler. |
| disabled | bool | `false` | No | Disables the button and dims it. |
| className | string | `''` | No | Additional classes merged onto the `<button>`. |
| ...props | object | `—` | No | Any other native HTML button attributes are passed through to the `<button>`. |

**Example**

```jsx
<SocialMediaButton
  variant="google"
  icon={<GoogleIcon />}
  label="Continue with Google"
  onClick={handleGoogleLogin}
/>
```

#### Stepper

A horizontal (desktop) / stacked (mobile) progress stepper rendered as an ordered list of linked steps, each showing a label, a checkmark when done, a description, and a chevron-style connector between steps.

**Import**

```jsx
import { Stepper } from 'react-atomic-design-system';
```

**Props**

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| steps | array of object | `—` | Yes | Each item: `{ id: number, label: string, description?: string, href?: string, status?: 'done' \| 'active' \| 'inactive' }`. `href` is used as the step link's `href`; `status` drives text color and whether a checkmark icon is shown. Declared required via PropTypes, with `id` and `label` required on each step. |

**Example**

```jsx
<Stepper
  steps={[
    { id: 1, label: 'Account', description: 'Create your account', status: 'done', href: '#' },
    { id: 2, label: 'Profile', description: 'Add your details', status: 'active', href: '#' },
    { id: 3, label: 'Review', description: 'Confirm and finish', status: 'inactive', href: '#' },
  ]}
/>
```

#### Tabs

A responsive tab bar: a native `<select>` dropdown on mobile and a row of tab buttons on desktop, each optionally carrying a badge. Supports outline/filled visual styles and a pluggable badge component.

**Import**

```jsx
import { Tabs } from 'react-atomic-design-system';
```

**Props**

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| tabs | array of object | `—` | Yes | Each item: `{ name: string, current?: boolean, badge?: node, badgeProps?: object }`. `name` is the tab's label/value; `current` marks the active tab; `badge` (if present) is rendered via the badge component. |
| onChange | function | `—` | No | Called with the selected tab's `name` when a desktop tab button is clicked, or with the `<select>`'s value on mobile. |
| variant | string enum: `outline`, `filled` | `'outline'` | No | Controls the active/inactive tab styling. |
| size | string enum: `sm`, `md` | `'md'` | No | Controls tab padding/text size. |
| color | string enum: `primary`, `secondary` | `'primary'` | No | Controls the active/inactive color scheme. |
| className | string | `—` | No | Additional classes merged onto the root `<div>`. |
| badgeComponent | component | `Badge` (the atom) | No | Custom component used to render each tab's `badge`; receives `tab.badgeProps` as props and the badge content as `children`. |
| ...props | object | `—` | No | Any other native HTML attributes are passed through to the root `<div>`. |

**Example**

```jsx
<Tabs
  tabs={[
    { name: 'Overview', current: true },
    { name: 'Activity', current: false, badge: 3 },
  ]}
  onChange={(name) => console.log(name)}
  variant="outline"
  color="primary"
/>
```

#### Toast

A dismissible inline alert/notification card with a colored icon badge (by type), a title, a description, and a close button.

**Import**

```jsx
import { Toast } from 'react-atomic-design-system';
```

**Props**

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| type | string enum: `primary`, `success`, `warning`, `error` | `'primary'` | No | Controls the icon badge's background/text color scheme. |
| title | string | `'Notification'` | No | Bold title text. |
| description | string | `'This is a toast message.'` | No | Body text under the title. |
| icon | node | `—` | No | Icon element rendered inside the colored icon badge. |
| onClose | function | `() => {}` | No | Click handler for the close (×) button. |
| className | string | `''` | No | Additional classes merged onto the root `<div>`. |

Note: unlike a typical toast system, this component does not manage visibility, timers, or portal/stacking behavior itself — there is no `open` prop; the host application is responsible for conditionally rendering `Toast` and for auto-dismiss timing.

**Example**

```jsx
<Toast
  type="success"
  title="Saved"
  description="Your changes have been saved."
  icon={<CheckIcon className="size-4" />}
  onClose={() => setShowToast(false)}
/>
```

#### Toggle

A styled checkbox rendered as an on/off switch, with an optional label and description and both controlled (`checked`) and uncontrolled (`defaultChecked`) usage.

**Import**

```jsx
import { Toggle } from 'react-atomic-design-system';
```

**Props**

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| label | string | `—` | No | Label text shown next to the switch. |
| description | string | `—` | No | Secondary text shown under the label. |
| color | string enum: `primary` | `'primary'` | No | Controls the checked-state track color; only `primary` is defined in `COLOR_CLASSES`. |
| size | string enum: `sm`, `md`, `lg` | `'md'` | No | Controls the track/thumb dimensions and label/description text size. |
| checked | bool | `—` | No | Controlled checked state of the underlying checkbox. |
| onChange | function | `—` | No | Native `onChange` handler. |
| disabled | bool | `false` | No | Disables the switch and dims it. |
| name | string | `—` | No | Native `name` attribute. |
| id | string | `—` | No | Native `id` attribute. |
| defaultChecked | bool | `—` | No | Initial checked state for uncontrolled usage. |
| className | string | `—` | No | Additional classes merged onto the root `<label>`. |
| ...props | object | `—` | No | Any other native HTML attributes are passed through to the underlying `<input type="checkbox">`. |

**Example**

```jsx
<Toggle
  label="Enable notifications"
  description="Receive email updates"
  checked={enabled}
  onChange={(e) => setEnabled(e.target.checked)}
/>
```

#### Tooltip

A hover-triggered (or always-visible) tooltip that wraps its `children` as the trigger element and renders a small floating panel with a label, optional description, and a directional arrow.

**Import**

```jsx
import { Tooltip } from 'react-atomic-design-system';
```

**Props**

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| label | string | `—` | No | Bold text shown in the tooltip panel. |
| description | string | `—` | No | Additional text shown under `label` (only rendered when present). |
| arrow | string enum: `top-center`, `bottom-center`, `bottom-left`, `bottom-right`, `right`, `left`, `none`, `auto` | `'auto'` | No | Position of the tooltip's arrow/caret. Note: only the listed values have defined positions in `arrowPositions`; `'auto'` (the default) does not match any key, so no arrow position class is applied unless a valid value is passed explicitly. |
| variant | string enum: `primary`, `secondary`, `tertiary` | `'primary'` | No | Controls the tooltip panel's background/text color scheme. |
| alwaysVisible | bool | `false` | No | When `true`, the tooltip is always shown (no hover-triggered `group`/opacity behavior); when `false`, it shows on hover of `children`. |
| className | string | `—` | No | Additional classes merged onto the root wrapper `<div>`. |
| children | node | `—` | No | The trigger element the tooltip is attached to/positioned relative to. |

**Example**

```jsx
<Tooltip label="Save" description="Save your changes" arrow="top-center">
  <button>Save</button>
</Tooltip>
```

## Peer dependencies

| Package | Version |
| --- | --- |
| `react` | `^18.0.0 \|\| ^19.0.0` |
| `react-dom` | `^18.0.0 \|\| ^19.0.0` |

All other runtime dependencies (Radix UI, Lucide icons, date-fns, etc.) are installed automatically.

## License

MIT
