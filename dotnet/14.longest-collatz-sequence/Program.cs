using System;

namespace _14.longest_collatz_sequence
{
    class Program
    {
        static void Main(string[] args)
        {
            int i = 0;

            int maxNumber = 0, maxCollNumber = 0;

            while(true) {
                int l = collatz(i);
                Console.WriteLine(i + " - " + l);
                i ++;

                if (i > 1000000) {
                    break;
                }

                if (l > maxNumber) {
                    maxNumber = l;
                    maxCollNumber = i-1;
                }

            }

            Console.WriteLine("Max Collatz Sequence Number : "+ maxCollNumber + ", Length: " + maxNumber);

        }


        static int collatz ( int number, int length = 0) {
            length ++;
            int x;

            if (isEven(number)) {
                x = evenEq(number);
            } else {
                x = oddEq(number);
            }

            if (x > 1) {
                length += collatz(x);
            } else {
                length ++;
            }

            return length;

        }


        static bool isEven(int number) {
            return number % 2 == 0;
        }

        static int evenEq(int n) {
            return n / 2;
        }

        static int oddEq (int n) {
            return 3 * n + 1;
        }

    }
}
