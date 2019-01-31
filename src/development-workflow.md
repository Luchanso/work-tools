# Development Workflow

## 1. Check design list
- [ ] Design ready
    - [ ] Мобильная версия
    - [ ] Планшетная версия
    - [ ] Desktop версия
    - [ ] Спинеры/лоадеры
        - [ ] При загрузке
        - [ ] При отправке
        - [ ] При обновлении
    - [ ] Fallback/пустые страницы
    - [ ] Кейсы ошибок загрузки и т.д
    - [ ] Проверить, что все отступы/размеры понятны или соответствуют сетке
    - [ ] Проверить все возможные логические пути пользователя и экраны
        - [ ] Составить блоксхему
    - [ ] Какие области клика у элемента?
    - [ ] Какие есть анимации, какие их параметры?
    - [ ] По каким правилам сортируются списки/данные?
    - [ ] Скролы и что делать если текст слишком длинный
    - [ ] Что будет если количество элементов списка выезжает за экран?
    - [ ] Что делать, если запрос не успел завершиться, а пользователь уже делает следующий

## 2. JS/React/Redux/Typescript
- [ ] Data Model GraphQL/REST/Mocks
  - [ ] Fetchers
    - [ ] Unit tests
  - [ ] Mocks
- [ ] Unit/Integration tests
  - [ ] Units
    - [ ] Selectors
    - [ ] Validators
    - [ ] Utils & tools
  - [ ] Integration
    - [ ] User success workflow
    - [ ] User failed workflow
    - [ ] Mocks
- [ ] Redux store
  - [ ] ActionsTypes
  - [ ] Actions
  - [ ] Reducers
  - [ ] AsyncActions
    - [ ] Selectors
- [ ] Components/Containers
  - [ ] Logics
    - [ ] Selectors
    - [ ] AsyncActions
  - [ ] Layout
    - [ ] Mobile version
    - [ ] Tablet version
    - [ ] Desktop version
    - [ ] First layout from Server Side Rendering

## 3. Definition to deploy production
- [ ] Work in
  - [ ] First rendering
  - [ ] With throttling CPU/Network
  - [ ] IE >= 11
  - [ ] Chrome windows
  - [ ] Safari
  - [ ] Firefox windows
  - [ ] Phone view
  - [ ] Laptop view
  - [ ] Desktop view
- [ ] E2E Tests
  - [ ] Exist
  - [ ] Runned
  - [ ] 100% Success
- [ ] API Exist on production
