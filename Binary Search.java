import java.util.*;

class Program {
  public static int binarySearch(int[] array, int target) {
		
		int leftIndex = 0;
		int rightIndex = array.length;
		
		while (leftIndex <= rightIndex) {
			int middle = (leftIndex+rightIndex)/2;
			int index = array[middle];
			
			if (target == index) {
				return middle;
			} else if (target < index){
				rightIndex = middle-1;
			} else {
				leftIndex = middle+1;
			}
		}
		
		
    return -1;
  }
}
