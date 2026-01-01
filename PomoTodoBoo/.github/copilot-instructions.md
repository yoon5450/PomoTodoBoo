# PomoTodoBoo - AI Coding Guidelines

## Architecture Overview

- **Vue 3 Composition API** with `<script setup>` syntax for all components
- **Pinia** for state management (stores in `src/stores/`)
- **Vue Router** for navigation (routes in `src/router/index.ts`)
- **TypeScript** with strict type checking via `vue-tsc`
- Component hierarchy: Views → Containers → Components (e.g., `HomeView.vue` → `TodoList.vue` → `TodoItem.vue`)

## Key Patterns

- **State Management**: Currently todos stored in component `ref` (TodoList.vue), plan to migrate to Pinia stores
- **Component Communication**: Parent-child via props/emit (e.g., `@addTodo`, `@deleteTodo`)
- **Icons**: Lucide Vue Next icons imported individually (e.g., `import { Plus } from 'lucide-vue-next'`)
- **Styling**: Scoped CSS with Tailwind-like utility classes, dark theme (#111111)
- **Date Handling**: Custom `transferDate()` in `src/utils/dateUtils.ts` (Korean format: "2024년 12월 31일 14:30")

## Developer Workflows

- **Development**: `npm run dev` (Vite hot reload)
- **Build**: `npm run build` (includes `vue-tsc --build` type checking)
- **Linting**: `npm run lint` (ESLint with auto-fix)
- **Formatting**: `npm run format` (Prettier)
- **Type Checking**: `npm run type-check` (vue-tsc only)

## Conventions

- **Language**: Korean UI text and comments
- **Imports**: `@/` alias for `src/` directory
- **File Structure**: Components grouped by feature (e.g., `home/`, `icons/`)
- **Naming**: PascalCase for components, camelCase for functions/variables
- **Types**: Interfaces in `src/types.ts` (e.g., `Todo` interface)

## Known Issues

- `transferDate()` uses `getDay()` instead of `getDate()` for day of month
- No tests implemented yet
- StatView.vue is empty/placeholder

## Examples

- Adding todo: Emit from TodoInput → handle in TodoList → update ref array
- Todo completion: Checkbox change → emit updateTodo → toggle completed flag
- Date display: `transferDate(todo.createAt)` in TodoItem.vue</content>
  <parameter name="filePath">c:\Users\yoon\Desktop\school\Programmmers\PomoTodoBoo\PomoTodoBoo\.github\copilot-instructions.md
