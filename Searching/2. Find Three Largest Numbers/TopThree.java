/*
**  Three Sums Algorithm
**  Description: finds three largest numbers in an array of integers.
**  O(n) time | O(1) space
**  Date: May 18, 2020
**  Author: EngineerID
*/

public class TopThree {

    public static void main(String[] args) {
        int[] array = {-1, 35, -3, -7, 18, -27, -18, -505, -8, -7, 99};

        int min = java.util.Arrays.stream(array).min().getAsInt();
        int[] outArray = new int[3];
        java.util.Arrays.fill(outArray,min);

        
        System.out.println(java.util.Arrays.toString(array));
        for (int i = 0; i < array.length; i++) {
            if (array[i] > outArray[2]) {
                outArray[0] = outArray[1];
                outArray[1] = outArray[2];
                outArray[2] = array[i];
            } else if (array[i] > outArray[1]) {
                outArray[0] = outArray[1];
                outArray[1] = array[i];
            } else if (array[i] > outArray[0]){
                outArray[0] = array[i];
            }
        }

        System.out.println(java.util.Arrays.toString(outArray));
    }
    
}