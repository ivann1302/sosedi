# Деплой на Sprinthost Node.js 22

Проект собирается как Next.js standalone-приложение и запускается через Phusion Passenger.

## 1. Собрать проект локально

```bash
npm run lint
npm run build:standalone
```

Готовая папка для загрузки:

```text
.next/standalone
```

В ней обязательно должны быть:

```text
server.js
package.json
node_modules
.next
```

Папка `public` будет добавлена только если она есть в проекте.

Папка `.next` скрытая, поэтому в FTP/SFTP-клиенте нужно включить отображение скрытых файлов.

## 2. Куда загружать на хостинге

Рекомендуемая структура на сервере:

```text
/home/LOGIN/sosedi-app
/home/LOGIN/public_html/.htaccess
```

Содержимое локальной папки `.next/standalone` загрузить в:

```text
/home/LOGIN/sosedi-app
```

Если используете подготовленный архив `sosedi-sprinthost-standalone.tar.gz`, то из него папку `app` нужно загрузить или распаковать как `/home/LOGIN/sosedi-app`, а файл `public_html/.htaccess` положить в `/home/LOGIN/public_html/.htaccess`.

Не в `public_html`, чтобы служебные файлы приложения не лежали в публичной директории.

## 3. Настроить Node.js 22 в панели Sprinthost

В панели управления Sprinthost:

1. Открыть `Сайты` -> `Веб-серверы`.
2. Для нужного сайта выбрать `Node.js 22`.
3. Сохранить настройки.

## 4. Создать `.htaccess`

В файле:

```text
/home/LOGIN/public_html/.htaccess
```

добавить:

```apache
PassengerEnabled on
PassengerAppType node
PassengerAppRoot /home/LOGIN/sosedi-app
PassengerStartupFile server.js
PassengerAppEnv production
```

`LOGIN` заменить на логин аккаунта Sprinthost.

## 5. Перезапустить Passenger

По SSH:

```bash
cd /home/LOGIN/sosedi-app
mkdir -p tmp
touch tmp/restart.txt
```

Для активной разработки можно временно создать:

```bash
touch tmp/always_restart.txt
```

После проверки сайта удалить:

```bash
rm tmp/always_restart.txt
```

## 6. Если нужно выполнить команды на сервере

На Sprinthost для Node.js 22 используются команды:

```bash
node22 -v
npm22 -v
```

Обычно при загрузке standalone-сборки выполнять `npm install` на сервере не нужно, потому что нужные зависимости уже лежат внутри `node_modules` в `.next/standalone`.

## 7. Что проверять при ошибках

- В панели сайта выбран `Node.js 22`.
- В `.htaccess` путь `PassengerAppRoot` указывает на папку с `server.js`.
- На сервер загружена скрытая папка `.next`.
- В `/home/LOGIN/sosedi-app/tmp/restart.txt` обновлено время изменения после последнего деплоя.
- Если сайт показывает старую версию, выполнить `touch tmp/restart.txt` еще раз.
