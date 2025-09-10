# Monorepo Graph Project

Современное TypeScript окружение для monorepo с поддержкой ESM модулей.

## Структура проекта

```
monorepo-graph/
├── packages/
│   ├── graph-core/    # Базовый пакет
│   ├── graph/         # Зависит от graph-core
│   └── react/         # React компоненты, зависит от graph
├── tsconfig.json      # Базовая TypeScript конфигурация
├── eslint.config.js   # ESLint конфигурация
├── jest.config.js     # Jest конфигурация
├── .prettierrc        # Prettier конфигурация
└── lerna.json         # Lerna конфигурация
```

## Технологии

- **TypeScript 5.6+** - современный ESM с поддержкой composite проектов
- **Jest 29** - тестирование с поддержкой ESM и TypeScript
- **ESLint 8** - линтинг TypeScript кода
- **Prettier 3** - форматирование кода
- **Lerna 8** - управление monorepo
- **Node.js 18+** - минимальная версия

## Установка

```bash
npm install
```

## Доступные команды

### Сборка
```bash
npm run build          # Сборка всех пакетов
npm run clean          # Очистка собранных файлов
```

### Тестирование
```bash
npm run test           # Запуск всех тестов
npm run test:watch     # Тесты в watch режиме (в конкретном пакете)
```

### Линтинг и форматирование
```bash
npm run lint           # Проверка ESLint
npm run lint:fix       # Исправление ESLint ошибок (в конкретном пакете)
npm run format         # Форматирование кода Prettier
npm run format:check   # Проверка форматирования
```

### Проверка типов
```bash
npm run typecheck      # Проверка TypeScript типов
```

## Особенности конфигурации

### TypeScript
- Поддержка ESM модулей (`"type": "module"`)
- Composite проекты для быстрой сборки
- Строгие настройки типизации
- Incremental compilation

### Jest
- Поддержка ESM и TypeScript
- Отдельные конфигурации для каждого workspace
- jsdom окружение для React тестов
- Mapping workspace зависимостей на исходники

### ESLint
- TypeScript правила
- Поддержка Node.js глобальных переменных
- Отдельные правила для тестовых файлов

### Prettier
- Современные настройки форматирования
- Интеграция с ESLint

## Workspace зависимости

- `graph-core` - базовая функциональность
- `graph` - расширенная функциональность (зависит от graph-core)
- `react` - React компоненты (зависит от graph)

## Разработка

1. Установите зависимости: `npm install`
2. Запустите сборку: `npm run build`
3. Запустите тесты: `npm run test`
4. Проверьте линтинг: `npm run lint`
5. Проверьте форматирование: `npm run format:check`

## Добавление нового пакета

1. Создайте папку в `packages/`
2. Создайте `package.json` с нужными настройками
3. Создайте `tsconfig.json` с extends от корневого
4. Создайте `jest.config.js` если нужны тесты
5. Добавьте reference в корневой `tsconfig.json`
6. Обновите workspace зависимости в Jest конфигурациях

## Проверка всего окружения

```bash
npm run build && npm run test && npm run lint && npm run format:check
```

Эта команда проверит что все инструменты работают корректно.
