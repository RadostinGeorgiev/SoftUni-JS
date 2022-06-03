function createSortedList(input) {
    const list = [];

    return {
        add(element) {
            list.push(element);
            list.sort((a, b) => a - b);
        },
        remove(index) {
            if (index >= 0 && index < list.length) {
                list.splice(index, 1);
            }
        },
        get(index) { return list[index]; },
        get size() { return list.length },
    }
}

let list = createSortedList();
list.add(9);
list.add(6);
list.add(7);
list.add(2);
list.add(1);
console.log(list.get(1));
list.remove(1);
console.log(list.get(3));
console.log(list.size);