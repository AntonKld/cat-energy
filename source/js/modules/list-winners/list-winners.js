export const initWinners = () => {
  if (document.contains(document.querySelector('.list-winners'))) {
    const table = document.querySelector('[data-table]');
    const weekTitle = document.querySelector('[data-table-week]');
    const dateTitle = document.querySelector('[data-table-date]');
    const tableList = document.querySelector('[data-table-list]');
    const template = document.querySelector('#winners__template').content.querySelector('[data-table-item]');
    const searchInput = document.querySelector('[data-input-search] input');
    const searchButton = document.querySelector('[data-button-search]');
    const cleanButton = document.querySelector('[data-button-clean]');

    const winnersData = {
      'id-1': {
        week: '1 неделя',
        date: '02.08.23 — 09.08.23',
        clients: [
          {name: 'Вия', phone: '7XXXXXX8474', prize: 'Samsung Galaxy A52'},
          {name: 'Лилия', phone: '7XXXXXX8433', prize: 'Samsung Galaxy A35'},
          {name: 'Антон', phone: '7XXXXXX8573', prize: 'Сертификат на покупки в «Пятёрочке»'},
          {name: 'Валентин', phone: '7XXXXXX8483', prize: 'Apple iPhone 6s'},
          {name: 'Сергей', phone: '7XXXXXX9473', prize: 'Apple Iphone 12 Pro Max'},
          {name: 'Игнат', phone: '7XXXXXX2473', prize: 'Телевизор Samsung'},
          {name: 'Людмила', phone: '7XXXXXX8573', prize: 'Apple iPhone 14 Pro'},
          {name: 'Екатерина', phone: '7XXXXXX1473', prize: 'Телевизор Hisense'},
          {name: 'Иван', phone: '7XXXXXX8443', prize: 'Apple iPhone X'},
          {name: 'Виктор', phone: '7XXXXXX8473', prize: 'Телевизор Toshiba'},
          {name: 'Александр', phone: '7XXXXXX8343', prize: 'Apple iPhone 15 Pro'},
          {name: 'Артём', phone: '7XXXXXX2373', prize: 'Телевизор Grundig'},
          {name: 'Павел', phone: '7XXXXXX6773', prize: 'Apple iPhone 13 Pro'},
          {name: 'Никита', phone: '7XXXXXX3673', prize: 'Apple MacBook Air M2'},
          {name: 'Джони', phone: '7XXXXXX8456', prize: 'Apple Iphone 12 Pro'},
          {name: 'Майк', phone: '7XXXXXX8438', prize: 'Honor Magicbook'},
          {name: 'Андрей', phone: '7XXXXXX8274', prize: 'Huawei MateBook'},
          {name: 'Наталья', phone: '7XXXXXX8427', prize: 'Apple iPhone 14 Pro Max'},
          {name: 'Кристина', phone: '7XXXXXX8179', prize: 'Сертификат на покупки в «Пятёрочке»'},
          {name: 'Анатолий', phone: '7XXXXXX3894', prize: 'ASUS Vivobook Pro'}
          // other clients...
        ],
      },
      'id-2': {
        week: '2 неделя',
        date: '09.08.23  — 16.08.23',
        clients: [
          {name: 'Александр', phone: '7XXXXXX8474', prize: 'Сертификат на покупки в «Пятёрочке»'},
          {name: 'Андрей', phone: '7XXXXXX8433', prize: 'Яндекс колонка'},
          {name: 'Екатерина', phone: '7XXXXXX1473', prize: 'Телевизор Hisense'},
          {name: 'Иван', phone: '7XXXXXX8474', prize: 'Apple iPhone X'},
          {name: 'Виктор', phone: '7XXXXXX8473', prize: 'Телевизор Toshiba'},
          {name: 'Александр', phone: '7XXXXXX8343', prize: 'Apple iPhone 15 Pro'},
          {name: 'Артём', phone: '7XXXXXX2373', prize: 'Телевизор Grundig'},
          {name: 'Павел', phone: '7XXXXXX6773', prize: 'Apple iPhone 13 Pro'},
          {name: 'Никита', phone: '7XXXXXX3673', prize: 'Apple MacBook Air M2'},
          {name: 'Джони', phone: '7XXXXXX8456', prize: 'Apple Iphone 12 Pro'}
        ],
      },
      'id-3': {
        week: '3 неделя',
        date: '16.08.23 - 23.08.23',
        clients: [
          {name: 'Пётр', phone: '7XXXXXX8474', prize: 'Сертификат на покупки в «Пятёрочке»'},
          {name: 'Евгений', phone: '7XXXXXX8433', prize: 'Яндекс колонка'},
          {name: 'Майк', phone: '7XXXXXX8438', prize: 'Honor Magicbook'},
          {name: 'Андрей', phone: '7XXXXXX8274', prize: 'Huawei MateBook'},
          {name: 'Наталья', phone: '7XXXXXX8427', prize: 'Apple iPhone 14 Pro Max'},
          {name: 'Кристина', phone: '7XXXXXX8179', prize: 'Сертификат на покупки в «Пятёрочке»'},
          {name: 'Анатолий', phone: '7XXXXXX3894', prize: 'ASUS Vivobook Pro'}
        ],
      },
      'id-4': {
        week: '4 неделя',
        date: '23.08.23 - 30.08.23',
        clients: [
          {name: 'Максим', phone: '7XXXXXX8474', prize: 'Сертификат на покупки в «Пятёрочке»'},
          {name: 'Евгений', phone: '7XXXXXX8433', prize: 'Яндекс колонка'},
          {name: 'Антон', phone: '7XXXXXX8573', prize: 'Сертификат на покупки в «Пятёрочке»'},
          {name: 'Валентин', phone: '7XXXXXX8483', prize: 'Apple iPhone 6s'},
          {name: 'Сергей', phone: '7XXXXXX9473', prize: 'Apple Iphone 12 Pro Max'},
          {name: 'Игнат', phone: '7XXXXXX2473', prize: 'Телевизор Samsung'},
          {name: 'Людмила', phone: '7XXXXXX8573', prize: 'Apple iPhone 14 Pro'},
          {name: 'Екатерина', phone: '7XXXXXX1473', prize: 'Телевизор Hisense'},
          {name: 'Иван', phone: '7XXXXXX8443', prize: 'Apple iPhone X'}
        ],
      },
      'id-5': {
        week: '5 неделя',
        date: '30.08.23 - 07.09.23',
        clients: [
          {name: 'Сергей', phone: '7XXXXXX8474', prize: 'Сертификат на покупки в «Пятёрочке»'},
          {name: 'Екатерина', phone: '7XXXXXX8433', prize: 'Яндекс колонка'}
          // other clients...
        ],
      },
      'id-6': {
        week: '6 неделя',
        date: '07.09.23 - 14.09.23',
        clients: [
          {name: 'Дмитрий', phone: '7XXXXXX8474', prize: 'Сертификат на покупки в «Пятёрочке»'},
          {name: 'Владислав', phone: '7XXXXXX8433', prize: 'Яндекс колонка'}
          // other clients...
        ],
      },
      'id-7': {
        week: '7 неделя',
        date: '30.08.23 — 07.09.23 ',
        clients: [],
      },
    };

    const updateTable = (id, foundClients) => {
      const {week, date, clients} = (!foundClients) ? winnersData[id] : {week: winnersData[id].week, date: winnersData[id].date, clients: foundClients};

      if (!clients.length) {
        table.classList.remove('list-winners__table--full');
        table.classList.add('list-winners__table--empty');
      } else {
        table.classList.remove('list-winners__table--empty');
        table.classList.add('list-winners__table--full');
      }

      weekTitle.textContent = week;
      dateTitle.textContent = date;

      tableList.innerHTML = '';
      const fragment = document.createDocumentFragment();

      clients.forEach((client) => {
        const item = template.cloneNode(true);
        item.querySelector('[data-table-name]').textContent = client.name;
        item.querySelector('[data-table-phone]').textContent = client.phone;
        item.querySelector('[data-table-prize]').textContent = client.prize;
        fragment.appendChild(item);
      });

      tableList.appendChild(fragment);
    };

    document.querySelectorAll('[data-select-value]').forEach((selectItem) => {
      selectItem.addEventListener('click', () => {
        const id = selectItem.dataset.selectValue;
        updateTable(id);
      });
    });

    // работа с полем поиска
    const toggleButtons = () => {
      if (searchButton.style.display === 'none') {
        searchButton.style.display = 'flex';
        cleanButton.style.display = 'none';
      } else {
        searchButton.style.display = 'none';
        cleanButton.style.display = 'flex';
      }
    };

    const showError = (message) => {
      searchInput.classList.add('is-invalid');
      cleanButton.classList.add('is-invalid');
      const errorText = document.querySelector('.hero-search p');
      if (errorText) {
        errorText.classList.add('is-invalid');
        errorText.textContent = message;
      }
    };

    const clearError = () => {
      searchInput.classList.remove('is-invalid');
      cleanButton.classList.remove('is-invalid');
      const errorText = document.querySelector('.hero-search p');
      if (errorText) {
        errorText.classList.remove('is-invalid');
        errorText.textContent = 'Введите последние 4 цифры номера телефона';
      }
    };

    const filterWinners = (id) => {
      const searchValue = searchInput.value;

      const weekData = winnersData[id];
      const foundClients = weekData.clients.filter((client) => client.phone.endsWith(searchValue));

      if (foundClients.length > 0) {
        clearError();
        updateTable(id, foundClients);
      } else {
        showError('Номер не найден');
      }
    };

    const triggerFilterWinners = () => {
      const selectedItems = Array.from(document.querySelectorAll('[data-select-value]')).filter((item) => item.getAttribute('aria-selected') === 'true');
      filterWinners(selectedItems[0].dataset.selectValue);
    };

    searchInput.addEventListener('keypress', function (e) {

      const validKeys = /[0-9]/;
      if (!validKeys.test(e.key)) {
        e.preventDefault();
      }
      if (searchInput.value.length === 4) {
        if (e.key === 'Enter' && searchInput.value !== '') {
          if (!searchInput.classList.contains('is-invalid')) {
            toggleButtons();
          }
          triggerFilterWinners();
        }
      }
    });

    searchInput.addEventListener('input', function () {
      const isValid = searchInput.value.length === 4;
      searchButton.disabled = !isValid;
    });

    searchButton.addEventListener('click', () => {
      triggerFilterWinners();
      toggleButtons();
    });

    cleanButton.addEventListener('click', function () {
      searchInput.value = '';
      searchButton.disabled = true;
      toggleButtons();
      triggerFilterWinners();
      clearError();
    });

    updateTable('id-1');
  }
};
