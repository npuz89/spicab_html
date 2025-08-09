// Simulated data (replacing API calls)
const subscriberData = {
    subscriber: {
        id: 'demo',
        first_name: 'Иван',
        last_name: 'Иванов',
        middle_name: 'Иванович',
        login: 'ivanov_123',
        address: 'г. Москва, ул. Ленина, д. 10, кв. 5',
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

let paymentFilter = 'all';
let selectedTariff = null;

// Utility functions
function formatCurrency(amount) {
    return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(amount);
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
}

function formatPaymentDate(dateStr) {
    return new Date(dateStr).toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function getPaymentMethodLabel(method) {
    switch (method) {
        case 'card': return 'Банковская карта';
        case 'bank_transfer': return 'Банковский перевод';
        case 'cash': return 'Наличные';
        default: return method;
    }
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
    switch (status) {
        case 'completed': return 'Выполнен';
        case 'pending': return 'В обработке';
        case 'failed': return 'Отклонен';
        default: return status;
    }
}

function getNotificationTypeColor(type) {
    switch (type) {
        case 'emergency': return 'bg-red-500';
        case 'maintenance': return 'bg-orange-500';
        default: return 'bg-blue-500';
    }
}

// Load data
function loadData() {
    setTimeout(() => {
        document.getElementById('loading').classList.add('hidden');
        document.getElementById('app').classList.remove('hidden');

        // Populate subscriber data
        document.getElementById('user-name').textContent = `${subscriberData.subscriber.last_name} ${subscriberData.subscriber.first_name} ${subscriberData.subscriber.middle_name}`;
        document.getElementById('user-login').textContent = `Логин: ${subscriberData.subscriber.login}`;
        document.getElementById('user-address').textContent = `Адрес: ${subscriberData.subscriber.address}`;
        document.getElementById('tariff-name').textContent = subscriberData.tariff.name;
        document.getElementById('tariff-price').textContent = formatCurrency(subscriberData.tariff.price);
        document.getElementById('tariff-change-date').textContent = `Дата смены тарифа: ${formatDate(subscriberData.subscriber.tariff_change_date)}`;
        document.getElementById('balance').textContent = formatCurrency(subscriberData.subscriber.balance);
        document.getElementById('balance').className = `text-xl md:text-2xl font-bold ${subscriberData.subscriber.balance >= 0 ? 'text-green-600' : 'text-red-600'}`;
        document.getElementById('days-left').textContent = '30 дней'; // Static for demo

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
        notificationsList.innerHTML = notifications.slice(0, 3).map(notification => `
            <div class="notification-item p-3 md:p-4 rounded-lg border ${!notification.is_read ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-gray-200'} cursor-pointer" onclick="markNotificationRead(${notification.id})">
                <div class="flex justify-between items-start">
                    <div class="flex-1">
                        <div class="flex items-center space-x-2">
                            <h4 class="font-medium text-gray-900 text-sm md:text-base">${notification.title}</h4>
                            ${!notification.is_read ? '<span class="w-2 h-2 bg-blue-500 rounded-full"></span>' : ''}
                        </div>
                        <p class="text-xs md:text-sm text-gray-600 mt-1">${notification.message}</p>
                        <p class="text-xs text-gray-500 mt-2">${new Date(notification.created_date).toLocaleString('ru-RU')}</p>
                    </div>
                    <div class="w-3 h-3 rounded-full ml-3 ${getNotificationTypeColor(notification.type)}"></div>
                </div>
            </div>
        `).join('');

        // Populate payment stats
        document.getElementById('payment-stats').innerHTML = `
            <span>Всего платежей: <strong>${paymentStats.total_payments}</strong></span>
            <span>Выполнено: <strong>${paymentStats.completed_payments}</strong></span>
            <span>Общая сумма: <strong>${formatCurrency(paymentStats.total_amount)}</strong></span>
        `;

        // Initial payments load
        renderPayments();
    }, 1000); // Simulate loading
}

// Modal controls
function showTariffModal() {
    selectedTariff = subscriberData.tariff;
    document.getElementById('tariff-details').innerHTML = `
        <h4 class="font-semibold text-gray-900 text-base md:text-lg">${selectedTariff.name}</h4>
        <p class="text-gray-600 text-xs md:text-sm mt-2">${selectedTariff.description}</p>
        <p class="text-gray-600 text-xs md:text-sm mt-1">Скорость: ${selectedTariff.speed}</p>
        <p class="font-bold text-base md:text-lg mt-2">${formatCurrency(selectedTariff.price)}</p>
        <p class="text-xs md:text-sm text-gray-600">в месяц</p>
    `;
    document.getElementById('tariff-modal').classList.remove('hidden');
}

function closeTariffModal() {
    document.getElementById('tariff-modal').classList.add('hidden');
}

function showChangeTariffModal() {
    document.getElementById('tariffs-list').innerHTML = tariffs.map(tariff => `
        <div class="tariff-card border rounded-lg p-3 md:p-4 cursor-pointer transition-colors ${subscriberData.subscriber.tariff_id === tariff.id ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 hover:border-gray-300'}" onclick="changeTariff(${tariff.id})">
            <div class="flex justify-between items-start">
                <div class="flex-1">
                    <h4 class="font-semibold text-gray-900 text-sm md:text-base flex items-center">
                        ${tariff.name}
                        ${subscriberData.subscriber.tariff_id === tariff.id ? '<span class="ml-2 bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">Текущий</span>' : ''}
                    </h4>
                    <p class="text-gray-600 text-xs md:text-sm">${tariff.description}</p>
                    <p class="text-gray-600 text-xs md:text-sm mt-1">Скорость: ${tariff.speed}</p>
                </div>
                <div class="text-right">
                    <p class="font-bold text-base md:text-lg">${formatCurrency(tariff.price)}</p>
                    <p class="text-xs md:text-sm text-gray-600">в месяц</p>
                </div>
            </div>
        </div>
    `).join('');
    document.getElementById('change-tariff-modal').classList.remove('hidden');
    document.getElementById('tariff-modal').classList.add('hidden'); // Close tariff modal when opening change tariff modal
    toggleMobileMenu(false); // Close mobile menu when opening modal
}

function closeChangeTariffModal() {
    document.getElementById('change-tariff-modal').classList.add('hidden');
}

function showNotificationsModal() {
    document.getElementById('all-notifications-list').innerHTML = notifications.length === 0 ? '<p class="text-gray-500 text-center py-8 text-sm">Нет уведомлений</p>' : notifications.map(notification => `
        <div class="notification-item p-3 md:p-4 rounded-lg border cursor-pointer transition-colors ${!notification.is_read ? 'bg-blue-50 border-blue-200 hover:bg-blue-100' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'}" onclick="markNotificationRead(${notification.id})">
            <div class="flex justify-between items-start">
                <div class="flex-1">
                    <div class="flex items-center space-x-2">
                        <h4 class="font-medium text-gray-900 text-sm md:text-base">${notification.title}</h4>
                        ${!notification.is_read ? '<span class="w-2 h-2 bg-blue-500 rounded-full"></span>' : ''}
                    </div>
                    <p class="text-xs md:text-sm text-gray-600 mt-1">${notification.message}</p>
                    <p class="text-xs text-gray-500 mt-2">${new Date(notification.created_date).toLocaleString('ru-RU')}</p>
                </div>
                <div class="w-3 h-3 rounded-full ml-3 ${getNotificationTypeColor(notification.type)}"></div>
            </div>
        </div>
    `).join('');
    document.getElementById('notifications-modal').classList.remove('hidden');
    toggleMobileMenu(false); // Close mobile menu when opening modal
}

function closeNotificationsModal() {
    document.getElementById('notifications-modal').classList.add('hidden');
}

function showPaymentsModal() {
    renderPayments();
    document.getElementById('payments-modal').classList.remove('hidden');
    toggleMobileMenu(false); // Close mobile menu when opening modal
}

function closePaymentsModal() {
    document.getElementById('payments-modal').classList.add('hidden');
}

function filterPayments(filter) {
    paymentFilter = filter;
    document.getElementById('filter-all').className = `px-3 md:px-4 py-2 rounded-lg font-medium transition-colors ${filter === 'all' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} text-sm`;
    document.getElementById('filter-completed').className = `px-3 md:px-4 py-2 rounded-lg font-medium transition-colors ${filter === 'completed' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} text-sm`;
    document.getElementById('filter-pending').className = `px-3 md:px-4 py-2 rounded-lg font-medium transition-colors ${filter === 'pending' ? 'bg-yellow-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} text-sm`;
    renderPayments();
}

function renderPayments() {
    const filteredPayments = paymentFilter === 'all' ? payments : payments.filter(p => p.status === paymentFilter);
    document.getElementById('filter-all').textContent = `Все (${payments.length})`;
    document.getElementById('filter-completed').textContent = `Выполненные (${payments.filter(p => p.status === 'completed').length})`;
    document.getElementById('filter-pending').textContent = `В обработке (${payments.filter(p => p.status === 'pending').length})`;
    document.getElementById('payments-list').innerHTML = filteredPayments.length === 0 ? `
        <tr>
            <td colspan="6" class="text-center py-8 text-gray-500 text-xs md:text-sm">Нет платежей в выбранной категории</td>
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
        alert('Тариф успешно изменен!');
        loadData();
    }
}

function toggleMobileMenu(force) {
    const mobileMenu = document.getElementById('mobile-menu');
    const burgerIcon = document.getElementById('burger-menu').querySelector('svg');
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

// Event listeners
document.getElementById('burger-menu').addEventListener('click', () => toggleMobileMenu());

// Initialize
loadData();