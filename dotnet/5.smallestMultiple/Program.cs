using System;
using System.Linq;

namespace _5.smallestMultiple
{
    class Program
    {
        static void Main(string[] args)
        {
            int i = 1;

            while(true) {
                if (isDividable20(i)) {
                    break;
                }
                Console.WriteLine(i);
                i ++;
            }

        }


        // 232792560


        static bool isDividable20(int number) {

            for (int i = 1 ; i <= 20; i ++) {
                if (number % i != 0) {
                    return false;
                }
            }
            return true;
        }
    }
}
