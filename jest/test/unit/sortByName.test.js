const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });

  it("Empty Books names should return empty result", () => {
    expect(
      sorting.sortByName([])
    ).toEqual([]);
  });

  it("Sorted Books names should return same result", () => {
    expect(
      sorting.sortByName([
        "Властелин Колец",
        "Властелин Колец",
        "Волшебник изумрудного города",
        "Гарри Поттер",
      ])
    ).toEqual([
      "Властелин Колец",
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });
});