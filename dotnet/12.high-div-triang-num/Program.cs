using System;
using System.Linq;

namespace _12.high_div_triang_num
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");


            int i = 1;
            int n = 2;

            while (true)
            {
                i = Enumerable.Range(1, n).Aggregate((accm, obj) => accm + obj);
                n++;

                int divisorCount = divisors(i).Length;
                Console.WriteLine(divisorCount);

                if (divisorCount > 500)
                {
                    Console.WriteLine("Number is : " + i + ". Divisor Count: " + divisorCount);
                    break;
                }
            }



        }

        // Answer: 76576500.

        static int[] divisors(int number)
        {
            return Enumerable.Range(1, number).Where(x => number % x == 0).ToArray();
        }


    }
}
