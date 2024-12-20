import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import styled from '@emotion/styled';

const StyleWrapper = styled.div`
  .fc .fc-toolbar.fc-header-toolbar {
    margin-bottom: 0;
  }
  .fc-toolbar-chunk {
    padding: 0 0.4rem;
    border: 1px solid #edebe6;
    border-radius: 100px;
  }
  .fc .fc-button-primary {
    font-size: 1.2rem;
    background-color: #ffffff00;
    color: #9ca3af;
    border: none;
    outline: none;
  }
  .fc .fc-today-button {
    background-color: #ffffff00;
    font-size: 1.2rem;
    font-weight: 500;
    color: #9ca3af;
    border: none;
    outline: none;
  }
  .fc .fc-button-primary:not(:disabled):active,
  .fc .fc-button-primary:not(:disabled).fc-button-active {
    background-color: #ffffff00;
    color: #acaba9;
    box-shadow: none;
  }
  .fc .fc-button-primary:not(:disabled):focus,
  .fc .fc-button-primary:not(:disabled).fc-button-focus {
    background-color: #ffffff00;
    color: #acaba9;
    box-shadow: none;
  }
  .fc .fc-today-button:disabled {
    opacity: 1;
  }
  .fc .fc-col-header-cell {
    font-size: 1.2rem;
    font-weight: normal;
    color: #b6b5b3;
    border: none;
  }
  .fc .fc-scrollgrid {
    border-width: 0;
  }

  .fc .fc-scrollgrid-section > * {
    border: none;
  }

  .fc .fc-scrollgrid-sync-table {
    border: 1px;
  }
  .fc .fc-daygrid-day.fc-day-today {
    background-color: #ffffff00;
  }
  .fc-day-today .fc-daygrid-day-number {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    flex-flow: column;
    vertical-align: top;
    background: #047857;
    color: white;
    width: 30px;
    height: 30px;
  }
  .fc-h-event {
    border: none;
  }
  .fc-daygrid-event {
    font-size: 1.4rem;
    display: flex;
    justify-content: center;
  }
  .fc .fc-daygrid-day-events {
    margin-top: 0;
  }
  .fc {
    margin: 0 auto;
    height: 58rem;
    gap: 1.8rem;
  }
`;

function BasicDateCalender({ array }) {
  return (
    <StyleWrapper>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        // headerToolbar={{ left: 'title', center: '', right: 'prev today next' }}
        headerToolbar={{ left: 'prev today next', center: '', right: '' }}
        businessHours={{ daysOfWeek: [1, 2, 3, 4, 5] }}
        eventBackgroundColor={'#FFFFFF'}
        eventTextColor={'#ffffff'}
        events={array}
      />
    </StyleWrapper>
  );
}

export default BasicDateCalender;
