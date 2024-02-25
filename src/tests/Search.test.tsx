import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import SearchComponent from '../Components/Search';
import { GET_CHARACTERS_LOCATIONS } from '../queries/Queries';

const mocks = [
  {
    request: {
      query: GET_CHARACTERS_LOCATIONS,
      variables: { name: 'test' },
    },
    result: {
      data: {
        characters: {
          results: [
            {
              id: 1,
              location: {
                name: 'Test Location',
              },
            },
          ],
        },
      },
    },
  },
];

describe('SearchComponent', () => {
  it('renders the search input and button', () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <SearchComponent />
      </MockedProvider>
    );

    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
  });

  it('updates the name state when input value changes', () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <SearchComponent />
      </MockedProvider>
    );

    const input: HTMLInputElement = screen.getByPlaceholderText('Search...') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'test' } });

    expect(input.value).toBe('test');
  });

  it('calls getLocations when search button is clicked', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <SearchComponent />
      </MockedProvider>
    );

    const input = screen.getByPlaceholderText('Search...');
    fireEvent.change(input, { target: { value: 'test' } });

    const searchButton = screen.getByRole('button', { name: 'Search' });
    fireEvent.click(searchButton);

    await waitFor(() => {
      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
  });

  it('renders the location name when data is fetched', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <SearchComponent />
      </MockedProvider>
    );

    const input = screen.getByPlaceholderText('Search...');
    fireEvent.change(input, { target: { value: 'test' } });

    const searchButton = screen.getByRole('button', { name: 'Search' });
    fireEvent.click(searchButton);

    await waitFor(() => {
      expect(screen.getByText('Test Location')).toBeInTheDocument();
    });
  });
});