import Item from "../components/Item.astro";
const cursor = document.getElementById("cursor");
const yOffset = 50; //TODO

document.addEventListener("astro:page-load", () => {
  cursor?.addEventListener("click", () => {
    run(cursor);
    console.log("start cursor run");
  });
});

function run(cursor: any): void {
  const items = document.getElementById("one")?.children;
  const zero = htmlToArray(items!);
  const one = firstPass(zero);
  const two = secondPass(one);

  if (items) {
    for (let i = 1; i < items?.length - 1; i++) {
      // setTimeout(moveCursorTo, 500, items[i]);
      // showNextItem(items[i], one);
    }
  }

  // function moveCursorTo(element: any): void {
  //   const pos = element.getBoundingClientRect();
  //   cursor.style.top = pos.top + yOffset + "px";
  //   cursor.style.left = pos.left + "px";
  // }

  function htmlToArray(prev: HTMLCollection): number[] {
    const newArray = [];
    for (const child of prev) {
      newArray.push(parseInt(child.textContent!));
    }
    return newArray;
  }

  function firstPass(prev: number[]): number[] {
    let newArray = [];
    for (let i = 0; i < prev.length - 2; i++) {
      const x =
        prev[i].toString() + prev[i + 1].toString() + prev[i + 2].toString();

      if (x === "000" || x === "111") {
        newArray.push(1);
      } else if (x === "101" || x === "010") {
        newArray.push(3);
      } else {
        newArray.push(2);
      }
    }
    return newArray;
  }

  function secondPass(prev: number[]): string[] {
    let newArray = [];
    for (let i = 0; i < prev.length - 2; i++) {
      const x = prev[i].toString() + prev[i + 1].toString();

      if (x === "11" || x === "33" || x === "13" || x === "31") {
        newArray.push("a");
      } else if (x === "12" || x === "32") {
        newArray.push("b");
      } else if (x === "22") {
        newArray.push("c");
      } else if (x === "21" || x === "23") {
        newArray.push("d");
      } else {
        throw new Error(`${x} is not supposed to happen`);
      }
    }
    return newArray;
  }
}
