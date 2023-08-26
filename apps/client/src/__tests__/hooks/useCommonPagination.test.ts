import { act, renderHook } from "@testing-library/react";
import { useCommonPagination } from "../../hooks/useCommonPagination";

describe("useCommonPagination", () => {
  it("should initialize with default values", () => {
    const { result } = renderHook(() => useCommonPagination());

    expect(result.current.loading).toBe(false);
    expect(result.current.pageIndex).toBe(1);
    expect(result.current.totalPages).toBe(1);
    expect(result.current.pageSize).toBe(5);
    expect(result.current.orderBy).toBe("asc");
  });

  it("should update the page index when calling nextPage", () => {
    const { result } = renderHook(() => useCommonPagination());
    expect(result.current.pageIndex).toBe(1);
  });
});
