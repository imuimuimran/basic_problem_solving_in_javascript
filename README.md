# basic_problem_solving_in_javascript
This repository deals with some of very basic problems like Prime Number, Palindrome, Factorial, Find &amp; Remove Duplicates etc. in JavaScript.  

## Question 1 explanation (Prime number or not):
1. First we will take a number using input.
2. Then check all positive numbers from 2 to n/2.
3. If any number divides n exactly then the number is Not a Prime number.
4. Otherwise the number is a Prime number.
5. Special case: When the number is = 1 it will Neither prime nor composite.

## Question 2 explanation (Largest Element in an array):
1. We need to take an array first.
2. Assume the first element is the largest.
3. Check each remaining element one by one by traversing the array.
4. If an element is larger than the current largest, Update element as largest .
5. After checking all elements the largest element contains the answer.

## Question 3 explanation (Reverse String):
1. First we have to take a string as input.
2. Then start from the last character.
3. Add each character to a new string.
4. Continue the process until the first character come.
5. As a result the new string is the reversed string of the main string.

## Question 4 explanation (Palindrome or not):
1. we will take a number or string at first.
2. Then reverse it.
3. Compare original value with reversed value and join them again.
4. If both are same the word is Palindrome.
5. Otherwise Not Palindrome

## Question 5 explanation (Factorial Calculation):
1. First we have to take a non-negative number n.
2. Start with factorial = 1.
3. Multiply factorial by every number from 1 to n (n! = n × (n-1) × (n-2) × ... × 2 × 1).
4. After the loop ends the inputed factorial contains n!
5. Special case: if n = 0, The factorial = 1

## Question 6 explanation (Find Duplicate Elements):
1. We have to take an array as input.
2. Then check each element one by one.
3. Keep track of elements already seen.
4. If an element appears again, It is a duplicate.
5. Finally, print all duplicate elements.

## Question 7 explanation (Swap Two Numbers):
1. First we have to take two numbers a and b.
2. Then placed b into a and a into b at the same time.
3. As a result the numbers are swapped.

## Question 8 explanation (Vowels Count):
1. We need to take a string first as input.
2. Then we have to check each character one by one.
3. If the character is a vowel, increase count by 1.
4. Continue the process until the end of the string.
5. We will get the total number of vowels.

## Question 9 explanation (Second Largest Element):
1. Need to take an array first.
2. Have to keep track of the following two: largest, secondLargest
3. Then check each element one by one.
4. If current element is larger than largest:
       → secondLargest = largest
       → largest = current element
5. Else if current element is larger than secondLargest and not equal to largest:
       → secondLargest = current element
6. After checking all elements we found the secondLargest contains the answer.

## Question 10 explanation (Remove Duplicates):
1. Have to take an array first.
2. Then need to create an empty array for unique elements.
3. After that we have to check each element one by one.
4. If the element is not already in the unique array we will add it.
5. Otherwise we will skip the element of array.
6. Finally when checking all elements we will find the unique array elements.