/* $(document).ready(function () {
    var calendarEl = $('#calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth'
    });
    calendar.render();
}); */

document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        //initialView: 'dayGridMonth'
        initialView: 'dayGridWeek',
        events: [
            {
                id: 'a',
                title: 'Mon événement : le reste de la semaine',
                start: new Date('2023-11-22T09:10:00'),
                end: new Date('2023-11-24T16:00:00'),	
            }
        ]
    });
    calendar.render();
});

/* import { Calendar } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
document.addEventListener('DOMContentLoaded', function () {
    const calendar = new Calendar(calendarEl, {
        plugins: [dayGridPlugin],
        initialView: 'dayGridWeek',
        headerToolbar: {
            left: 'prev,next',
            center: 'title',
            right: 'dayGridWeek,dayGridDay' // user can switch between the two
        }
    })
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth'
    });
    calendar.render();
}); */

