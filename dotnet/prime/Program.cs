using System;
using System.Linq;

namespace prime
{
    class Program
    {
        static void Main(string[] args)
        {
            for (long i = 0; i < 600851475143; i ++) {
                if (isPrime(i)) {
                    
                }
            }

        }

        static bool isPrime(long number) {
            for(long i = 2; i < number; i ++) {
                if (number % i == 0) {
                    return false;
                }
            }
            return true;
        }
    }
}
