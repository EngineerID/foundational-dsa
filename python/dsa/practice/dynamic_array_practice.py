from dsa.linear.dynamic_array import DynamicArray


class DynamicArrayPractice:
    def __init__(self) -> None:
        self._array: DynamicArray[int] = DynamicArray()

    def add(self, value: int) -> None:
        self._array.add(value)

    def get(self, index: int) -> int:
        return self._array.get(index)

    def size(self) -> int:
        return self._array.size()
