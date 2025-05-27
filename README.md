## Настройка и запуск

### Предварительные требования

1. Установите [Node.js](https://nodejs.org/)
2. Установите [Angular CLI](https://angular.io/cli)
3. Клонируйте репозиторий [bypass-cors-policies](https://github.com/Miorey/bypass-cors-policies)

### Настройка bypass-cors-policies

1. Перейдите в директорию bypass-cors-policies
2. Создайте файл `.env` со следующим содержимым:
```
SERVER_NAME=https://wow.zamimg.com
PORT=3001
```
3. Запустите сервер:
```bash
npm start
```

### Запуск приложения

1. Установите зависимости:
```bash
npm install
```

2. Запустите приложение:
```bash
ng serve
```

3. Откройте браузер и перейдите по адресу `http://localhost:4200`

## Технические детали

- Приложение использует локальный прокси-сервер (bypass-cors-policies) для обхода CORS-ограничений при обращении к API WowHead
- 3D модели загружаются через viewer, размещенный в index.html
- Данные персонажей хранятся в JSON формате в директории public/