using System;
using System.Linq;

namespace _6.sum_square_difference
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            Console.WriteLine(findDiff(1, 10));

            Console.WriteLine(findDiff(1, 100));



        }
        static Func<int, int, double> findDiff = (start, end) =>
        pow(Enumerable.Range(start, end).Aggregate((double)0, (accm, x) => accm + x), 2) -
             Enumerable.Range(start, end).Select(x => pow(x, 2)).Aggregate((double)0, (accm, x) => accm + x);



        static Func<double, double, double> pow = (x, y) => Math.Pow(x, y);

    }
}
