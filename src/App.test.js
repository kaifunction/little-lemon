import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './pages/BookingForm';
import { MemoryRouter } from 'react-router-dom'; // 添加这个
// import { initializeTimes } from "./components/Main";

test('Renders the BookingForm heading', () => {
  render(
    <MemoryRouter> {/* 提供路由上下文 */}
      <BookingForm availableTimes={["17:00", "18:00"]} dispatch={() => {}} />
    </MemoryRouter>
  );
  const headingElement = screen.getByText("Reserve Your Table");
  expect(headingElement).toBeInTheDocument();
});

// test('initializeTimes returns correct initial times', () => {
//   const initialTimes = initializeTimes();
//   expect(initialTimes).toEqual(['17:00','18:00','19:00','20:00','21:00','22:00'])
// })

test("shows error if date is not selected", async () => {
  render(<BookingForm availableTimes={["17:00"]} dispatch={() => {}} submitForm={() => {}} />);
  const button = screen.getByRole("button", { name: /Make Your reservation/i });
  fireEvent.click(button);
  const error = await screen.findByText(/please pick a date/i);
  expect(error).toBeInTheDocument();
});

test("shows error for guests input when empty", async () => {
  render(<BookingForm availableTimes={["17:00"]} dispatch={() => {}} submitForm={() => {}} />);
  const guestsInput = screen.getByLabelText(/number of guests/i);
  fireEvent.change(guestsInput, { target: { value: "" } });
  fireEvent.blur(guestsInput);
  const error = await screen.findByText(/please enter number of guests/i);
  expect(error).toBeInTheDocument();
});


test('calls submitForm with valid data', async () => {
  const mockSubmit = jest.fn();
  const mockDispatch = jest.fn();

  render(<BookingForm availableTimes={['17:00']} dispatch={mockDispatch} submitForm={mockSubmit} />)

  fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: "2025-04-30" } });
  fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: "17:00" } });
  fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: "2" } });
  fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: "Birthday" } });

  fireEvent.click(screen.getByRole("button", { name: /Make Your Reservation/i }));

  await new Promise((resolve) => setTimeout(resolve, 0));

  expect(mockSubmit).toHaveBeenCalledWith({
    date: "2025-04-30",
    time: "17:00",
    guests: 2,
    occasion: "Birthday",
  });

})
