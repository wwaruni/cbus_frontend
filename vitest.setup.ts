import '@testing-library/jest-dom';
import axios from 'axios';
import { vi } from 'vitest';

const mock_axios_data: Record<string, unknown> = {
};

afterEach(() => {
  vi.clearAllMocks();
});

beforeAll(() => {
  vi.spyOn(axios, 'get').mockImplementation((url) =>
    // eslint-disable-next-line security/detect-object-injection
    Promise.resolve(mock_axios_data[url])
  );
});

afterAll(() => {
  vi.clearAllMocks();
});
