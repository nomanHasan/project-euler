using System;
using System.Collections.Generic;
using System.Linq;

namespace _8.largest_product_series
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450";

            // input.Split("").Select(int.Parse).ToList();

            List<int> numbers = new List<int>();

            foreach (var item in input)
            {
                numbers.Add(Int32.Parse(item.ToString()));
            }

            Console.WriteLine(numbers.Count);

            List<AdjacencyProduct> apList = numbers.Select(x => Adjacency(x, 13)).ToList();

            long maxProduct = 23514624000;


            AdjacencyProduct ap = apList.Where(x => x.product.Equals(maxProduct)).FirstOrDefault();


            Console.WriteLine(apList[50]);
            Console.WriteLine(ap);

        }

        static Queue<int> q = new Queue<int>();

        static int[] qU =  {5, 9, 8, 4, 6, 6, 9, 8, 6, 6, 7, 5, 5 };


        static AdjacencyProduct Adjacency(int n, int count)
        {
            // Console.WriteLine(n);
            if (q.Count >= count)
            {
                q.Dequeue();
                q.Enqueue(n);
            }
            else
            {
                q.Enqueue(n);
            }


            long product = q.Aggregate(1, (accm, obj) => accm * obj);

            return new AdjacencyProduct(new Queue<int>(q), product);
        }



    }

    public struct AdjacencyProduct
    {
        public Queue<int> queue;
        public long product;

        public AdjacencyProduct(Queue<int> queue, long product)
        {
            this.queue = queue;
            this.product = product;
        }

        override public string ToString () {
            string s = "";
            foreach (var el in queue) {
                s += $"{el}, ";
            }
            s += $" Product: {product}";

            return s;
        }
    }
}
