import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './pages/BookingForm.js';
import { MemoryRouter } from 'react-router-dom';

test('Renders the BookingForm heading', () => {
  render(
    <MemoryRouter>
      <BookingForm availableTimes={["17:00"]} dispatch={() => {}} submitForm={() => {}} />
    </MemoryRouter>
  );
  const headingElement = screen.getByText("Reserve Your Table");
  expect(headingElement).toBeInTheDocument();
});

test("shows error if date is not selected", async () => {
  render(
    <MemoryRouter>
      <BookingForm availableTimes={["17:00"]} dispatch={() => {}} submitForm={() => {}} />
    </MemoryRouter>
  );
  const button = screen.getByRole("button", { name: /Make Your reservation/i });
  fireEvent.click(button);
  const error = await screen.findByText(/please pick a date/i);
  expect(error).toBeInTheDocument();
});

test("shows error for guests input when empty", async () => {
  render(
    <MemoryRouter>
      <BookingForm availableTimes={["17:00"]} dispatch={() => {}} submitForm={() => {}} />
    </MemoryRouter>
  );
  const guestsInput = screen.getByLabelText(/number of guests/i);
  fireEvent.change(guestsInput, { target: { value: "" } });
  fireEvent.blur(guestsInput);
  const error = await screen.findByText(/please enter number of guests/i);
  expect(error).toBeInTheDocument();
});

test('calls submitForm with valid data', async () => {
  const mockSubmit = jest.fn();
  const mockDispatch = jest.fn();

  render(
    <MemoryRouter>
      <BookingForm availableTimes={['17:00']} dispatch={mockDispatch} submitForm={mockSubmit} />
    </MemoryRouter>
  );

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
});
