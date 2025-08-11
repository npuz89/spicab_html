// Simulated data (replacing API calls)
const subscriberData = {
    subscriber: {
        id: 'demo',
        first_name: 'Иван',
        last_name: 'Иванов',
        middle_name: 'Иванович',
        login: 'sp998000000000',
        address: 'г. Ташкент, ул. Саракульская, д. 10, кв. 5',
        contract_number: '19061234',
        phone_number_1: '+998 90 123 45 67',
        phone_number_2: '+998 90 987 65 43',
        password: 'current_password', // For demo purposes
        balance: 1500,
        tariff_id: 1,
        tariff_change_date: '2025-07-01T00:00:00Z'
    },
    tariff: {
        id: 1,
        name: 'Базовый',
        price: 500,
        description: 'Базовый тариф с ограниченной скоростью',
        speed: '100 Мбит/с'
    }
};

const tariffs = [
    { id: 1, name: 'Базовый', price: 500, description: 'Базовый тариф с ограниченной скоростью', speed: '100 Мбит/с' },
    { id: 2, name: 'Стандарт', price: 800, description: 'Стандартный тариф со средней скоростью', speed: '200 Мбит/с' },
    { id: 3, name: 'Премиум', price: 1200, description: 'Премиум тариф с высокой скоростью', speed: '500 Мбит/с' }
];

const notifications = [
    { id: 1, title: 'Технические работы', message: 'Плановые работы 10.08.2025', created_date: '2025-08-01T10:00:00Z', is_read: false, type: 'maintenance' },
    { id: 2, title: 'Смена тарифа', message: 'Ваш тариф успешно изменен', created_date: '2025-07-01T12:00:00Z', is_read: true, type: 'info' }
];

const payments = [
    { id: 1, payment_date: '2025-07-01T10:00:00Z', amount: 500, payment_method: 'card', description: 'Оплата тарифа Базовый', status: 'completed', transaction_id: 'TX12345' },
    { id: 2, payment_date: '2025-08-01T12:00:00Z', amount: 500, payment_method: 'bank_transfer', description: 'Оплата тарифа Базовый', status: 'pending', transaction_id: 'TX67890' }
];

const paymentStats = {
    total_payments: 2,
    completed_payments: 1,
    total_amount: 1000
};

const services = [
    { name: 'Роутер', status: 'Активна' },
    { name: 'Allplay', status: 'Активна' }
];

const discount = { name: 'Скидка', value: '15%' };

const documents = [
    { name: 'Договор', url: '#', type: 'pdf' },
    { name: 'Квитанция об оплате', url: '#', type: 'pdf' }
];

const translations = {
    ru: {
        loading: 'Загрузка...',
        dashboard: 'Личный кабинет',
        change_tariff: 'Смена тарифа',
        payment_history: 'История платежей',
        notifications: 'Оповещения',
        change_password: 'Сменить пароль',
        logout: 'Выход',
        current_tariff: 'Текущий тариф',
        tariff_change_date_label: 'Дата смены тарифа: ',
        tariff_shortage_label: 'Для оплаты тарифа не хватает: ',
        per_month: 'в месяц',
        current_balance: 'Текущий баланс',
        days_left: 'До окончания тарифа',
        recent_notifications: 'Последние уведомления',
        all_notifications: 'Все уведомления',
        tariff_info: 'Информация о тарифе',
        edit_phones: 'Редактировать номера телефонов',
        change_password: 'Сменить пароль',
        current_password: 'Текущий пароль',
        new_password: 'Новый пароль',
        confirm_password: 'Подтверждение пароля',
        contract_number_label: 'Номер договора: ',
        phone_number_1_label: 'Телефон 1: ',
        phone_number_2_label: 'Телефон 2: ',
        edit: 'Редактировать',
        save: 'Сохранить',
        cancel: 'Отмена',
        services: 'Услуги',
        documents: 'Документы',
        discount: 'Скидка',
        phone_numbers: 'Номера телефонов',
        date: 'Дата',
        amount: 'Сумма',
        payment_method: 'Способ оплаты',
        description: 'Описание',
        status: 'Статус',
        transaction_id: 'ID операции',
        all: 'Все',
        completed: 'Выполненные',
        pending: 'В обработке',
        login_label: 'Логин',
        address_label: 'Адрес',
        status_label: 'Статус',
        discount_label: 'Скидка',
        type_label: 'Тип',
        speed_label: 'Скорость',
        current_label: 'Текущий',
        tariff_changed: 'Тариф успешно изменен!',
        password_changed: 'Пароль успешно изменен!',
        password_mismatch: 'Новый пароль и подтверждение не совпадают',
        invalid_current_password: 'Неверный текущий пароль',
        no_notifications: 'Нет уведомлений',
        no_payments: 'Нет платежей в выбранной категории'
    },
    uz: {
        loading: 'Yuklanmoqda...',
        dashboard: 'Shaxsiy kabinet',
        change_tariff: 'Tarifni o‘zgartirish',
        payment_history: 'To‘lovlar tarixi',
        notifications: 'Bildirishnomalar',
        change_password: 'Parolni o‘zgartirish',
        logout: 'Chiqish',
        current_tariff: 'Joriy tarif',
        tariff_change_date_label: 'Tarif o‘zgartirilgan sana: ',
        tariff_shortage_label: 'Tarifni to‘lash uchun yetishmaydi: ',
        per_month: 'oyiga',
        current_balance: 'Joriy balans',
        days_left: 'Tarif tugashiga',
        recent_notifications: 'Oxirgi bildirishnomalar',
        all_notifications: 'Barcha bildirishnomalar',
        tariff_info: 'Tarif haqida ma’lumot',
        edit_phones: 'Telefon raqamlarini tahrirlash',
        change_password: 'Parolni o‘zgartirish',
        current_password: 'Joriy parol',
        new_password: 'Yangi parol',
        confirm_password: 'Parolni tasdiqlash',
        contract_number_label: 'Shartnoma raqami: ',
        phone_number_1_label: 'Telefon 1: ',
        phone_number_2_label: 'Telefon 2: ',
        edit: 'Tahrirlash',
        save: 'Saqlash',
        cancel: 'Bekor qilish',
        services: 'Xizmatlar',
        documents: 'Hujjatlar',
        discount: 'Chegirma',
        phone_numbers: 'Telefon raqamlari',
        date: 'Sana',
        amount: 'Miqdor',
        payment_method: 'To‘lov usuli',
        description: 'Tavsif',
        status: 'Holati',
        transaction_id: 'Operatsiya ID',
        all: 'Barcha',
        completed: 'Bajarildi',
        pending: 'Jarayonda',
        login_label: 'Login',
        address_label: 'Manzil',
        status_label: 'Holati',
        discount_label: 'Chegirma',
        type_label: 'Turi',
        speed_label: 'Tezlik',
        current_label: 'Joriy',
        tariff_changed: 'Tarif muvaffaqiyatli o‘zgartirildi!',
        password_changed: 'Parol muvaffaqiyatli o‘zgartirildi!',
        password_mismatch: 'Yangi parol va tasdiqlash mos kelmaydi',
        invalid_current_password: 'Noto‘g‘ri joriy parol',
        no_notifications: 'Bildirishnomalar yo‘q',
        no_payments: 'Tanlangan toifada to‘lovlar yo‘q'
    },
    en: {
        loading: 'Loading...',
        dashboard: 'Dashboard',
        change_tariff: 'Change Tariff',
        payment_history: 'Payment History',
        notifications: 'Notifications',
        change_password: 'Change Password',
        logout: 'Logout',
        current_tariff: 'Current Tariff',
        tariff_change_date_label: 'Tariff Change Date: ',
        tariff_shortage_label: 'Amount Needed for Tariff Payment: ',
        per_month: 'per month',
        current_balance: 'Current Balance',
        days_left: 'Until Tariff Expires',
        recent_notifications: 'Recent Notifications',
        all_notifications: 'All Notifications',
        tariff_info: 'Tariff Information',
        edit_phones: 'Edit Phone Numbers',
        change_password: 'Change Password',
        current_password: 'Current Password',
        new_password: 'New Password',
        confirm_password: 'Confirm Password',
        contract_number_label: 'Contract Number: ',
        phone_number_1_label: 'Phone 1: ',
        phone_number_2_label: 'Phone 2: ',
        edit: 'Edit',
        save: 'Save',
        cancel: 'Cancel',
        services: 'Services',
        documents: 'Documents',
        discount: 'Discount',
        phone_numbers: 'Phone Numbers',
        date: 'Date',
        amount: 'Amount',
        payment_method: 'Payment Method',
        description: 'Description',
        status: 'Status',
        transaction_id: 'Transaction ID',
        all: 'All',
        completed: 'Completed',
        pending: 'Pending',
        login_label: 'Login',
        address_label: 'Address',
        status_label: 'Status',
        discount_label: 'Discount',
        type_label: 'Type',
        speed_label: 'Speed',
        current_label: 'Current',
        tariff_changed: 'Tariff successfully changed!',
        password_changed: 'Password successfully changed!',
        password_mismatch: 'New password and confirmation do not match',
        invalid_current_password: 'Incorrect current password',
        no_notifications: 'No notifications',
        no_payments: 'No payments in the selected category'
    }
};

let paymentFilter = 'all';
let selectedTariff = null;
let currentLanguage = 'ru';

// Utility functions
function formatCurrency(amount) {
    const currency = 'UZS'; // Установим UZS как фиксированную валюту для всех языков
    return new Intl.NumberFormat(currentLanguage === 'ru' ? 'ru-RU' : currentLanguage === 'uz' ? 'uz-UZ' : 'en-US', {
        style: 'currency',
        currency: currency
    }).format(amount);
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString(currentLanguage === 'ru' ? 'ru-RU' : currentLanguage === 'uz' ? 'uz-UZ' : 'en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}

function formatPaymentDate(dateStr) {
    return new Date(dateStr).toLocaleDateString(currentLanguage === 'ru' ? 'ru-RU' : currentLanguage === 'uz' ? 'uz-UZ' : 'en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function getPaymentMethodLabel(method) {
    const labels = {
        ru: { card: 'Банковская карта', bank_transfer: 'Банковский перевод', cash: 'Наличные' },
        uz: { card: 'Bank kartasi', bank_transfer: 'Bank o‘tkazmasi', cash: 'Naqd pul' },
        en: { card: 'Credit Card', bank_transfer: 'Bank Transfer', cash: 'Cash' }
    };
    return labels[currentLanguage][method] || method;
}

function getStatusColor(status) {
    switch (status) {
        case 'completed': return 'text-green-600 bg-green-100';
        case 'pending': return 'text-yellow-600 bg-yellow-100';
        case 'failed': return 'text-red-600 bg-red-100';
        default: return 'text-gray-600 bg-gray-100';
    }
}

function getStatusLabel(status) {
    const labels = {
        ru: { completed: 'Выполнен', pending: 'В обработке', failed: 'Отклонен' },
        uz: { completed: 'Bajarildi', pending: 'Jarayonda', failed: 'Rad etildi' },
        en: { completed: 'Completed', pending: 'Pending', failed: 'Failed' }
    };
    return labels[currentLanguage][status] || status;
}

function getNotificationTypeColor(type) {
    switch (type) {
        case 'emergency': return 'bg-red-500';
        case 'maintenance': return 'bg-orange-500';
        default: return 'bg-blue-500';
    }
}

function getServiceStatusLabel(status) {
    const labels = {
        ru: { active: 'Активна' },
        uz: { active: 'Faol' },
        en: { active: 'Active' }
    };
    return labels[currentLanguage][status.toLowerCase()] || status;
}

// Language change function
function changeLanguage(lang) {
    currentLanguage = lang;
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (element.tagName === 'BUTTON' || element.tagName === 'H3' || element.tagName === 'H4' || element.tagName === 'LABEL') {
            element.textContent = translations[lang][key];
        } else {
            const prefix = element.textContent.split(': ')[0];
            element.textContent = `${translations[lang][key]}${element.id.includes('tariff-shortage') ? formatCurrency(Math.max(0, subscriberData.tariff.price - subscriberData.subscriber.balance)) : element.id.includes('tariff-change-date') ? formatDate(subscriberData.subscriber.tariff_change_date) : element.id.includes('contract-number') ? subscriberData.subscriber.contract_number : element.id.includes('phone-number-1') ? subscriberData.subscriber.phone_number_1 : element.id.includes('phone-number-2') ? subscriberData.subscriber.phone_number_2 : ''}`;
        }
    });
    loadData(); // Refresh UI with new language
}

// Load data
function loadData() {
    setTimeout(() => {
        document.getElementById('loading').classList.add('hidden');
        document.getElementById('app').classList.remove('hidden');

        // Populate subscriber data
        document.getElementById('user-name').textContent = `${subscriberData.subscriber.last_name} ${subscriberData.subscriber.first_name} ${subscriberData.subscriber.middle_name}`;
        document.getElementById('user-login').textContent = `${translations[currentLanguage].login_label}: ${subscriberData.subscriber.login}`;
        document.getElementById('user-address').textContent = `${translations[currentLanguage].address_label}: ${subscriberData.subscriber.address}`;
        document.getElementById('contract-number').textContent = `${translations[currentLanguage].contract_number_label}: ${subscriberData.subscriber.contract_number}`;
        document.getElementById('phone-number-1').textContent = `${translations[currentLanguage].phone_number_1_label}: ${subscriberData.subscriber.phone_number_1}`;
        document.getElementById('phone-number-2').textContent = `${translations[currentLanguage].phone_number_2_label}: ${subscriberData.subscriber.phone_number_2 || ''}`;
        document.getElementById('tariff-name').textContent = subscriberData.tariff.name;
        document.getElementById('tariff-price').textContent = formatCurrency(subscriberData.tariff.price);
        document.getElementById('tariff-change-date').textContent = `${translations[currentLanguage].tariff_change_date_label}: ${formatDate(subscriberData.subscriber.tariff_change_date)}`;
        document.getElementById('balance').textContent = formatCurrency(subscriberData.subscriber.balance);
        document.getElementById('balance').className = `text-xl md:text-2xl font-bold ${subscriberData.subscriber.balance >= 0 ? 'text-green-600' : 'text-red-600'}`;
        document.getElementById('days-left').textContent = '30 дней'; // Static for demo
        document.getElementById('tariff-shortage').textContent = `${translations[currentLanguage].tariff_shortage_label}: ${formatCurrency(Math.max(0, subscriberData.tariff.price - subscriberData.subscriber.balance))}`;

        // Populate notifications
        const unreadCount = notifications.filter(n => !n.is_read).length;
        const badge = document.getElementById('notification-badge');
        const mobileBadge = document.getElementById('mobile-notification-badge');
        badge.textContent = unreadCount;
        mobileBadge.textContent = unreadCount;
        if (unreadCount === 0) {
            badge.classList.add('hidden');
            mobileBadge.classList.add('hidden');
        }

        const notificationsList = document.getElementById('notifications-list');
        if (notificationsList) {
            notificationsList.innerHTML = notifications.slice(0, 3).map(notification => `
                <div class="notification-item p-3 md:p-4 rounded-lg border ${!notification.is_read ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-gray-200'} cursor-pointer" onclick="markNotificationRead(${notification.id})">
                    <div class="flex justify-between items-start">
                        <div class="flex-1">
                            <div class="flex items-center space-x-2">
                                <h4 class="font-medium text-gray-900 text-sm md:text-base">${notification.title}</h4>
                                ${!notification.is_read ? '<span class="w-2 h-2 bg-blue-500 rounded-full"></span>' : ''}
                            </div>
                            <p class="text-xs md:text-sm text-gray-600 mt-1">${notification.message}</p>
                            <p class="text-xs text-gray-500 mt-2">${new Date(notification.created_date).toLocaleString(currentLanguage === 'ru' ? 'ru-RU' : currentLanguage === 'uz' ? 'uz-UZ' : 'en-US')}</p>
                        </div>
                        <div class="w-3 h-3 rounded-full ml-3 ${getNotificationTypeColor(notification.type)}"></div>
                    </div>
                </div>
            `).join('');
        }

        // Populate payment stats
        const paymentStatsElement = document.getElementById('payment-stats');
        if (paymentStatsElement) {
            paymentStatsElement.innerHTML = `
                <span>${translations[currentLanguage].total_payments_label || 'Всего платежей'}: <strong>${paymentStats.total_payments}</strong></span>
                <span>${translations[currentLanguage].completed_payments_label || 'Выполнено'}: <strong>${paymentStats.completed_payments}</strong></span>
                <span>${translations[currentLanguage].total_amount_label || 'Общая сумма'}: <strong>${formatCurrency(paymentStats.total_amount)}</strong></span>
            `;
        }

        // Populate services
        const servicesList = document.getElementById('services-list');
        if (servicesList) {
            servicesList.innerHTML = `
                <div class="p-3 md:p-4 rounded-lg border bg-gray-50">
                    <h4 class="font-medium text-gray-900 text-sm md:text-base">${services[0].name}</h4>
                    <p class="text-xs md:text-sm text-gray-600 mt-1">${translations[currentLanguage].status_label}: ${getServiceStatusLabel(services[0].status)}</p>
                </div>
                <div class="p-3 md:p-4 rounded-lg border bg-gray-50">
                    <h4 class="font-medium text-gray-900 text-sm md:text-base">${services[1].name}</h4>
                    <p class="text-xs md:text-sm text-gray-600 mt-1">${translations[currentLanguage].status_label}: ${getServiceStatusLabel(services[1].status)}</p>
                </div>
            `;
        }

        // Populate discount
        const discountValue = parseInt(discount.value); // Assuming '15%'
        const maxDiscount = 15;
        const circumference = 251.2;
        const offset = circumference - (discountValue / maxDiscount) * circumference;
        const discountSvg = document.querySelector('#discount-block svg circle:nth-child(2)');
        if (discountSvg) {
            discountSvg.style.strokeDashoffset = offset.toFixed(1);
        }
        const discountValueElement = document.getElementById('discount-value');
        if (discountValueElement) {
            discountValueElement.textContent = `${discount.value}`;
        }

        // Populate documents
        const documentsList = document.getElementById('documents-list');
        if (documentsList) {
            documentsList.innerHTML = documents.map(doc => `
                <div class="p-3 md:p-4 rounded-lg border bg-gray-50">
                    <a href="${doc.url}" class="text-indigo-600 hover:text-indigo-800 font-medium text-sm md:text-base">${doc.name}</a>
                    <p class="text-xs md:text-sm text-gray-600 mt-1">${translations[currentLanguage].type_label}: ${doc.type.toUpperCase()}</p>
                </div>
            `).join('');
        }

        // Initial payments load
        renderPayments();
    }, 1000); // Simulate loading
}

// Modal controls
function showTariffModal() {
    selectedTariff = subscriberData.tariff;
    const tariffDetails = document.getElementById('tariff-details');
    if (tariffDetails) {
        tariffDetails.innerHTML = `
            <h4 class="font-semibold text-gray-900 text-base md:text-lg">${selectedTariff.name}</h4>
            <p class="text-gray-600 text-xs md:text-sm mt-2">${selectedTariff.description}</p>
            <p class="text-gray-600 text-xs md:text-sm mt-1">${translations[currentLanguage].speed_label}: ${selectedTariff.speed}</p>
            <p class="font-bold text-base md:text-lg mt-2">${formatCurrency(selectedTariff.price)}</p>
            <p class="text-xs md:text-sm text-gray-600">${translations[currentLanguage].per_month}</p>
        `;
    }
    const tariffModal = document.getElementById('tariff-modal');
    if (tariffModal) {
        tariffModal.classList.remove('hidden');
    }
}

function closeTariffModal() {
    const tariffModal = document.getElementById('tariff-modal');
    if (tariffModal) {
        tariffModal.classList.add('hidden');
    }
}

function showChangeTariffModal() {
    const tariffsList = document.getElementById('tariffs-list');
    if (tariffsList) {
        tariffsList.innerHTML = tariffs.map(tariff => `
            <div class="tariff-card border rounded-lg p-3 md:p-4 cursor-pointer transition-colors ${subscriberData.subscriber.tariff_id === tariff.id ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 hover:border-gray-300'}" onclick="changeTariff(${tariff.id})">
                <div class="flex justify-between items-start">
                    <div class="flex-1">
                        <h4 class="font-semibold text-gray-900 text-sm md:text-base flex items-center">
                            ${tariff.name}
                            ${subscriberData.subscriber.tariff_id === tariff.id ? `<span class="ml-2 bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">${translations[currentLanguage].current_label}</span>` : ''}
                        </h4>
                        <p class="text-gray-600 text-xs md:text-sm">${tariff.description}</p>
                        <p class="text-gray-600 text-xs md:text-sm mt-1">${translations[currentLanguage].speed_label}: ${tariff.speed}</p>
                    </div>
                    <div class="text-right">
                        <p class="font-bold text-base md:text-lg">${formatCurrency(tariff.price)}</p>
                        <p class="text-xs md:text-sm text-gray-600">${translations[currentLanguage].per_month}</p>
                    </div>
                </div>
            </div>
        `).join('');
    }
    const changeTariffModal = document.getElementById('change-tariff-modal');
    if (changeTariffModal) {
        changeTariffModal.classList.remove('hidden');
    }
    const tariffModal = document.getElementById('tariff-modal');
    if (tariffModal) {
        tariffModal.classList.add('hidden');
    }
    toggleMobileMenu(false);
}

function closeChangeTariffModal() {
    const changeTariffModal = document.getElementById('change-tariff-modal');
    if (changeTariffModal) {
        changeTariffModal.classList.add('hidden');
    }
}

function showEditPhonesModal() {
    const editPhone1 = document.getElementById('edit-phone-1');
    const editPhone2 = document.getElementById('edit-phone-2');
    if (editPhone1 && editPhone2) {
        editPhone1.value = subscriberData.subscriber.phone_number_1 || '';
        editPhone2.value = subscriberData.subscriber.phone_number_2 || '';
    }
    const editPhonesModal = document.getElementById('edit-phones-modal');
    if (editPhonesModal) {
        editPhonesModal.classList.remove('hidden');
    }
    toggleMobileMenu(false);
}

function closeEditPhonesModal() {
    const editPhonesModal = document.getElementById('edit-phones-modal');
    if (editPhonesModal) {
        editPhonesModal.classList.add('hidden');
    }
}

function savePhoneNumbers() {
    const editPhone1 = document.getElementById('edit-phone-1');
    const editPhone2 = document.getElementById('edit-phone-2');
    if (editPhone1 && editPhone2) {
        subscriberData.subscriber.phone_number_1 = editPhone1.value;
        subscriberData.subscriber.phone_number_2 = editPhone2.value;
    }
    closeEditPhonesModal();
    loadData();
}

function showChangePasswordModal() {
    const currentPassword = document.getElementById('current-password');
    const newPassword = document.getElementById('new-password');
    const confirmPassword = document.getElementById('confirm-password');
    if (currentPassword && newPassword && confirmPassword) {
        currentPassword.value = '';
        newPassword.value = '';
        confirmPassword.value = '';
    }
    const changePasswordModal = document.getElementById('change-password-modal');
    if (changePasswordModal) {
        changePasswordModal.classList.remove('hidden');
    }
    toggleMobileMenu(false);
}

function closeChangePasswordModal() {
    const changePasswordModal = document.getElementById('change-password-modal');
    if (changePasswordModal) {
        changePasswordModal.classList.add('hidden');
    }
}

function savePassword() {
    const currentPassword = document.getElementById('current-password');
    const newPassword = document.getElementById('new-password');
    const confirmPassword = document.getElementById('confirm-password');
    if (currentPassword && newPassword && confirmPassword) {
        const currentPassValue = currentPassword.value;
        const newPassValue = newPassword.value;
        const confirmPassValue = confirmPassword.value;

        if (currentPassValue !== subscriberData.subscriber.password) {
            alert(translations[currentLanguage].invalid_current_password);
            return;
        }

        if (newPassValue !== confirmPassValue) {
            alert(translations[currentLanguage].password_mismatch);
            return;
        }

        subscriberData.subscriber.password = newPassValue;
        closeChangePasswordModal();
        alert(translations[currentLanguage].password_changed);
    }
}

function showNotificationsModal() {
    const allNotificationsList = document.getElementById('all-notifications-list');
    if (allNotificationsList) {
        allNotificationsList.innerHTML = notifications.length === 0 ? `<p class="text-gray-500 text-center py-8 text-sm">${translations[currentLanguage].no_notifications}</p>` : notifications.map(notification => `
            <div class="notification-item p-3 md:p-4 rounded-lg border cursor-pointer transition-colors ${!notification.is_read ? 'bg-blue-50 border-blue-200 hover:bg-blue-100' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'}" onclick="markNotificationRead(${notification.id})">
                <div class="flex justify-between items-start">
                    <div class="flex-1">
                        <div class="flex items-center space-x-2">
                            <h4 class="font-medium text-gray-900 text-sm md:text-base">${notification.title}</h4>
                            ${!notification.is_read ? '<span class="w-2 h-2 bg-blue-500 rounded-full"></span>' : ''}
                        </div>
                        <p class="text-xs md:text-sm text-gray-600 mt-1">${notification.message}</p>
                        <p class="text-xs text-gray-500 mt-2">${new Date(notification.created_date).toLocaleString(currentLanguage === 'ru' ? 'ru-RU' : currentLanguage === 'uz' ? 'uz-UZ' : 'en-US')}</p>
                    </div>
                    <div class="w-3 h-3 rounded-full ml-3 ${getNotificationTypeColor(notification.type)}"></div>
                </div>
            </div>
        `).join('');
    }
    const notificationsModal = document.getElementById('notifications-modal');
    if (notificationsModal) {
        notificationsModal.classList.remove('hidden');
    }
    toggleMobileMenu(false);
}

function closeNotificationsModal() {
    const notificationsModal = document.getElementById('notifications-modal');
    if (notificationsModal) {
        notificationsModal.classList.add('hidden');
    }
}

function showPaymentsModal() {
    renderPayments();
    const paymentsModal = document.getElementById('payments-modal');
    if (paymentsModal) {
        paymentsModal.classList.remove('hidden');
    }
    toggleMobileMenu(false);
}

function closePaymentsModal() {
    const paymentsModal = document.getElementById('payments-modal');
    if (paymentsModal) {
        paymentsModal.classList.add('hidden');
    }
}

function filterPayments(filter) {
    paymentFilter = filter;
    const filterAll = document.getElementById('filter-all');
    const filterCompleted = document.getElementById('filter-completed');
    const filterPending = document.getElementById('filter-pending');
    if (filterAll && filterCompleted && filterPending) {
        filterAll.className = `px-3 md:px-4 py-2 rounded-lg font-medium transition-colors ${filter === 'all' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} text-sm`;
        filterCompleted.className = `px-3 md:px-4 py-2 rounded-lg font-medium transition-colors ${filter === 'completed' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} text-sm`;
        filterPending.className = `px-3 md:px-4 py-2 rounded-lg font-medium transition-colors ${filter === 'pending' ? 'bg-yellow-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} text-sm`;
    }
    renderPayments();
}

function renderPayments() {
    const paymentsList = document.getElementById('payments-list');
    if (paymentsList) {
        const filteredPayments = paymentFilter === 'all' ? payments : payments.filter(p => p.status === paymentFilter);
        const filterAll = document.getElementById('filter-all');
        const filterCompleted = document.getElementById('filter-completed');
        const filterPending = document.getElementById('filter-pending');
        if (filterAll && filterCompleted && filterPending) {
            filterAll.textContent = `${translations[currentLanguage].all} (${payments.length})`;
            filterCompleted.textContent = `${translations[currentLanguage].completed} (${payments.filter(p => p.status === 'completed').length})`;
            filterPending.textContent = `${translations[currentLanguage].pending} (${payments.filter(p => p.status === 'pending').length})`;
            paymentsList.innerHTML = filteredPayments.length === 0 ? `
                <tr>
                    <td colspan="6" class="text-center py-8 text-gray-500 text-xs md:text-sm">${translations[currentLanguage].no_payments}</td>
                </tr>
            ` : filteredPayments.map(payment => `
                <tr class="border-b border-gray-100 hover:bg-gray-50">
                    <td class="py-2 md:py-3 px-2 text-xs md:text-sm">${formatPaymentDate(payment.payment_date)}</td>
                    <td class="py-2 md:py-3 px-2 font-semibold text-xs md:text-sm">${formatCurrency(payment.amount)}</td>
                    <td class="py-2 md:py-3 px-2 text-xs md:text-sm text-gray-600">${getPaymentMethodLabel(payment.payment_method)}</td>
                    <td class="py-2 md:py-3 px-2 text-xs md:text-sm">${payment.description}</td>
                    <td class="py-2 md:py-3 px-2">
                        <span class="inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(payment.status)}">
                            ${getStatusLabel(payment.status)}
                        </span>
                    </td>
                    <td class="py-2 md:py-3 px-2 text-xs text-gray-500 font-mono">${payment.transaction_id}</td>
                </tr>
            `).join('');
        }
    }
}

function markNotificationRead(notificationId) {
    const notification = notifications.find(n => n.id === notificationId);
    if (notification && !notification.is_read) {
        notification.is_read = true;
        loadData();
    }
}

function changeTariff(tariffId) {
    if (subscriberData.subscriber.tariff_id !== tariffId) {
        subscriberData.subscriber.tariff_id = tariffId;
        subscriberData.tariff = tariffs.find(t => t.id === tariffId);
        subscriberData.subscriber.tariff_change_date = new Date().toISOString();
        closeChangeTariffModal();
        alert(translations[currentLanguage].tariff_changed);
        loadData();
    }
}

function toggleMobileMenu(force) {
    const mobileMenu = document.getElementById('mobile-menu');
    const burgerIcon = document.getElementById('burger-menu').querySelector('svg');
    if (mobileMenu && burgerIcon) {
        if (force === undefined) {
            mobileMenu.classList.toggle('hidden');
        } else {
            mobileMenu.classList.toggle('hidden', !force);
        }
        if (!mobileMenu.classList.contains('hidden')) {
            burgerIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />';
        } else {
            burgerIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />';
        }
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('burger-menu').addEventListener('click', () => toggleMobileMenu());
    loadData();
});