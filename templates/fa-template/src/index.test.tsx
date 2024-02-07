import React from 'react';
import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';
import { render } from '@testing-library/react';

jest.mock('react-dom/client', () => ({
  createRoot: jest.fn(() => ({
    render: jest.fn(),
  })),
}));

jest.mock('web-vitals', () => ({
  getCLS: jest.fn(),
  getFID: jest.fn(),
  getFCP: jest.fn(),
  getLCP: jest.fn(),
  getTTFB: jest.fn(),
}));

describe('Index', () => {
  test('renders App within React.StrictMode and calls reportWebVitals', () => {
    act(() => {
      require('./index'); // This will execute the code in your index file
    });

    // Check if createRoot was called with the expected arguments
    expect((ReactDOM as any).createRoot).toHaveBeenCalledWith(document.getElementById('root'));

    // Check if render was called with the expected component
    expect((ReactDOM as any).createRoot().render).toHaveBeenCalledWith(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );

    expect(reportWebVitals).toHaveBeenCalled();
  });
});

describe('reportWebVitals', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('calls web-vitals functions if onPerfEntry is a function', async () => {
    const onPerfEntryMock = jest.fn();
    const webVitals = await import('web-vitals');
    act(() => {
      reportWebVitals(onPerfEntryMock);

      webVitals.getCLS(onPerfEntryMock);
      webVitals.getFID(onPerfEntryMock);
      webVitals.getFCP(onPerfEntryMock);
      webVitals.getLCP(onPerfEntryMock);
      webVitals.getTTFB(onPerfEntryMock);
    });

    expect(webVitals.getCLS).toHaveBeenCalledWith(onPerfEntryMock);
    expect(webVitals.getFID).toHaveBeenCalledWith(onPerfEntryMock);
    expect(webVitals.getFCP).toHaveBeenCalledWith(onPerfEntryMock);
    expect(webVitals.getLCP).toHaveBeenCalledWith(onPerfEntryMock);
    expect(webVitals.getTTFB).toHaveBeenCalledWith(onPerfEntryMock);
  });

  it('does not call web-vitals functions if onPerfEntry is not a function', () => {
    act(() => {
      reportWebVitals(undefined);
    });

    expect(getCLS).not.toHaveBeenCalled();
    expect(getFID).not.toHaveBeenCalled();
    expect(getFCP).not.toHaveBeenCalled();
    expect(getLCP).not.toHaveBeenCalled();
    expect(getTTFB).not.toHaveBeenCalled();
  });
});
