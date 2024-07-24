#include <stdio.h>
#include <stdbool.h>
#include <math.h>

bool isArmstrong(int number) {
    int originalNumber = number;
    int n = 0; // Counting the number of digits
    int sum = 0;

    // Counting the number of digits
    while (originalNumber != 0) {
        originalNumber /= 10;
        n++;
    }

    originalNumber = number; // Resetting to the original number

    // Calculating the sum of digits raised to the power of n
    while (originalNumber != 0) {
        int digit = originalNumber % 10;
        sum += pow(digit, n);
        originalNumber /= 10;
    }

    return (sum == number);
}

int main() {
    int num;

    // Taking input from the user
    printf("Enter a number: ");
    scanf("%d", &num);

    // Checking if the number is an Armstrong number and returning true or false
    if (isArmstrong(num)) {
        printf("%d is an Armstrong number. Returning true.\n", num);
        return true;
    } else {
        printf("%d is not an Armstrong number. Returning false.\n", num);
        return false;
    }
}
