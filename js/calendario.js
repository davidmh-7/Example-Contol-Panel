const calendarDays = document.querySelector('.grid.grid-cols-7.grid-rows-6.items-start.text-sm.gap-1');
const monthYearDisplay = document.querySelector('.text-lg.font-medium');

function getLastDayOfMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

function getDaysFromNextMonth(year, month) {
    const lastDayOfMonth = getLastDayOfMonth(year, month);
    const lastDayOfMonthDate = new Date(year, month, lastDayOfMonth);
    const lastDayOfWeek = lastDayOfMonthDate.getDay();
    return 7 - lastDayOfWeek - 1;
}

function getDaysFromPreviousMonth(year, month) {
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    return firstDayOfMonth;
}

function clearCalendar() {
    calendarDays.innerHTML = '';
}

function renderCalendar(year, month) {
    clearCalendar();

    const lastDayOfMonth = getLastDayOfMonth(year, month);
    const daysFromNextMonth = getDaysFromNextMonth(year, month);
    const daysFromPreviousMonth = getDaysFromPreviousMonth(year, month);
    const daysInMonth = [];

    // Obtener los días de antes del mes actual
    const previousMonthYear = month === 0 ? year - 1 : year;
    const previousMonth = month === 0 ? 11 : month - 1;
    const lastDayOfPreviousMonth = getLastDayOfMonth(previousMonthYear, previousMonth);
    for (let i = lastDayOfPreviousMonth - daysFromPreviousMonth + 1; i <= lastDayOfPreviousMonth; i++) {
        daysInMonth.push({ day: i, isPreviousMonth: true });
    }

    // Obtener los días del mes actual
    for (let i = 1; i <= lastDayOfMonth; i++) {
        daysInMonth.push({ day: i, isPreviousMonth: false });
    }

    // Obtener los días del mes siguiente si hay espacio en el calendario
    for (let i = 1; i <= daysFromNextMonth; i++) {
        daysInMonth.push({ day: i, isNextMonth: true });
    }

    for (let dayObj of daysInMonth) {
        const button = document.createElement('button');
        button.textContent = dayObj.day;
        button.classList.add(
            'inline-flex', 'items-center', 'justify-center', 'whitespace-nowrap',
            'text-sm', 'font-medium', 'ring-offset-background', 'transition-colors',
            'focus-visible:outline-none', 'focus-visible:ring-2', 'focus-visible:ring-ring',
            'focus-visible:ring-offset-2', 'border', 'border-input', 'bg-background',
            'hover:bg-accent', 'hover:text-accent-foreground', 'px-4', 'py-2', 'rounded-full',
            'w-full', 'h-10'
        );

        if (dayObj.isPreviousMonth || dayObj.isNextMonth) {
            button.classList.add('text-gray-400', 'dark:text-gray-400');
            button.disabled = true;
        }

        calendarDays.appendChild(button);
    }

    monthYearDisplay.textContent = `${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}`;
}

let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();

renderCalendar(currentYear, currentMonth);

document.querySelector('.prev-month-btn').addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar(currentYear, currentMonth);
});

document.querySelector('.next-month-btn').addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar(currentYear, currentMonth);
});