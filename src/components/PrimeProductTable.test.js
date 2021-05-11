import { render, screen } from "@testing-library/react"

import PrimeProductTable from "./PrimeProductTable"

describe("PrimeProductTable", () => {
  it("should render properly with default value", () => {
    render(<PrimeProductTable />);

    const columnHeaders = screen.getAllByTestId("columnHeader");
    expect(columnHeaders.length).toBe(10);
    const rowLeaders = screen.getAllByTestId("rowLeader");
    expect(rowLeaders.length).toBe(10);

    const product1 = screen.getAllByText("667");
    expect(product1.length).toBe(2);
    const product2 = screen.getAllByText("841")
    expect(product2.length).toBe(1);
    const allCells = screen.getAllByText(/^\d+$/);
    expect(allCells.length).toBe(120);


    expect(screen).toMatchSnapshot();
  });

  it("should render properly with set value", () => {
    render(<PrimeProductTable numberOfPrimes={100} />);

    const columnHeaders = screen.getAllByTestId("columnHeader");
    expect(columnHeaders.length).toBe(100);
    const rowLeaders = screen.getAllByTestId("rowLeader");
    expect(rowLeaders.length).toBe(100);

    const product1 = screen.getAllByText("667");
    expect(product1.length).toBe(2);
    const product2 = screen.getAllByText("841")
    expect(product2.length).toBe(1);
    const allCells = screen.getAllByText(/^\d+$/);
    expect(allCells.length).toBe(10200);


    expect(screen).toMatchSnapshot();
  });
})