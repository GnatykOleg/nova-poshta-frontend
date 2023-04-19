### ENG: Application for tracking New Mail shipments and receiving branches (Version with its backend)

👉 ❗❗ ATTENTION ❗❗ The backend uses render.com, and the server goes to sleep after 15 minutes of user inactivity (no requests to the server). And when a new request comes in, the server restarts. But it takes 2-4 minutes.

- [Server log screenshot](https://drive.google.com/file/d/1fbICQXqsWVrv7g6nYYimenGZe7vaQosE/view?usp=share_link)

- [Backend](https://github.com/GnatykOleg/nova-poshta-backend)


### This application allows users to track the status of their shipments by TTN number and view the list of Nova Poshta branches.

#### Usage:

- Enter the TTN number in the input field on the page.
- Click on the "Get TTN status" button.
- The application will send a request to receive data on the current status of the place of delivery of the product and display information about the shipment to the user.

- Click on the "History of entered TTN" button to receive the history of entered TTN.
- Previous TTN numbers entered by the user will be automatically saved in the list in the sidebar.
- The user can clear all old TTN numbers by clicking the "Clear TTN History" button.
- The user can delete TTN 1 piece at a time by clicking the "Delete" button.
- The user can check the status of the shipment by clicking on the TTN number in the list in the sidebar. The TTN number will automatically be displayed in the input field, and the request for the status of finding the product will be performed automatically.

- By switching to the second tab, the user can search for the New Post branch.
- The first field is "Enter the city".
- Cards with departments will be rendered. There is pagination, 12 cards each with divisions for 1 page.

### Technologies

- JavaScript
- TypeScript
- React
- Redux Toolkit
- MUI

\*\* Usually in my projects all content and interaction are in English, but this project is made in Ukrainian. simply because I love my country.


### UKR: Додаток для відстеження відправок Нової пошти та отримання вiддiлень (Верciя з власним бекендом)

👉 ❗❗ УВАГА ❗❗ Бекенд використовує render.com, сервер засинає через 15 хвилин бездіяльності користувача (відсутності запитів до сервера). І коли йде новий запит, сервер запускається заново. Але це займає 2-4 хвилини.

- [Скріншот логі сервера](https://drive.google.com/file/d/1fbICQXqsWVrv7g6nYYimenGZe7vaQosE/view?usp=share_link)

- [Бекенд](https://github.com/GnatykOleg/nova-poshta-backend)


### Цей додаток дозволяє користувачам відстежувати статус своїх відправок за номером ТТН та переглядати список відділень Нової пошти.

#### Використання:

- Введіть номер ТТН в поле введення на сторінці.
- Натисніть на кнопку "Отримати статус ТТН".
- Додаток відправить запит на отримання даних про актуальний статус місця доставки товару та виведе інформацію про відправку користувачеві.

- Натисніть на кнопку "Iсторія введенних ТТН" для отримання icторii введенних ТТН.
- Попередні номери ТТН, введені користувачем, будуть автоматично зберігатися в списку в сайтбарі.
- Користувач може очистити всі старі номери ТТН, натиснувши кнопку "Очистити Icторiю ТТН".
- Користувач може видаляти ТТН по 1 штуцi, натиснувши кнопку "Видалити".
- Користувач може перевірити статус відправки, натиснувши на номер ТТН у списку в сайтбарі. Номер ТТН автоматично відображатиметься в полі введення, а запит на статус - знаходження товару буде виконано автоматично.

- Перейшовши на другу вкладку, користувач може шукати відділення Нової пошти.
- Перше поле "Введiть місто".
- Відрендеряться картки з відділеннями. Присутня пагінація, по 12 карток з відділеннями на 1 сторінку.

### Технології

- JavaScript
- TypeScript
- React
- Redux Toolkit
- MUI

\*\* Зазвичай у моїх проектах весь контент і взаємодія англійською мовою, але цей проект зроблено українською мовою. просто тому, що я люблю свою країну.
