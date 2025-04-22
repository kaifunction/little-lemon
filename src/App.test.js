import { render, screen } from '@testing-library/react';
import BookingForm from './pages/BookingForm';
import { MemoryRouter } from 'react-router-dom'; // 添加这个
import { initializeTimes } from "./components/Main";

test('Renders the BookingForm heading', () => {
  render(
    <MemoryRouter> {/* 提供路由上下文 */}
      <BookingForm availableTimes={["17:00", "18:00"]} dispatch={() => {}} />
    </MemoryRouter>
  );
  const headingElement = screen.getByText("Reserve Your Table");
  expect(headingElement).toBeInTheDocument();
});

test('initializeTimes returns correct initial times', () => {
  const initialTimes = initializeTimes();
  expect(initialTimes).toEqual(['17:00','18:00','19:00','20:00','21:00','22:00'])
})
