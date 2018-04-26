using System;

namespace _7._10001st_prime
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            int i = 0;
            int primeCount = 0;

            while(true) {
                i++;
                if (isPrime(i)) {
                    Console.WriteLine(i);
                    primeCount++;
                }

                if (primeCount == 10001) {
                    break;
                }
            }

        }

        
        static bool isPrime(long number)
        {
            if (number == 2 || number == 3)
            {
                return true;
            }

            if (number == 1) {
                return false;
            }

            for (long i = 2; i < number; i++)
            {
                if (number % i == 0)
                {
                    return false;
                }
            }
            return true;
        }
    }
}
