var nameList = [
    "Rahul",
    "Sukesh",
    "Ramesh",
    "Aditya",
    "Bhushan",
    "Prakash",
    "Vivek",
    "Rohan",
    "Suresh",
    "Amit",
    "Vikram",
    "Akash",
    "Aryan",
    "Siddharth",
    "Girish",
    "Ganesh",
    "Hemant",
    "Kunal",
    "Nikhil",
    "Vishal",
    "Alok",
    "Harsh",
    "Varun",
    "Mayank",
    "Nitin",
    "Amar",
    "Vijay",
    "Sachin",
    "Ankit",
    "Arjun",
    "Rajat",
    "Arun",
    "Sunil",
    "Vinay",
    "Sanjay",
    "Vishnu",
    "Rajesh",
    "Ravi",
    "Amitabh",
    "Kumar",
    "Abhinav",
    "Suman",
    "Sandeep",
    "Satish",
    "Pawan",
    "Rajendra",
    "Naveen",
    "Mukesh",
    "Pradeep",
    "Jatin",
    "Navin",
    "Rajeev",
    "Ashok",
    "Nitin",
    "Avinash",
    "Manish",
    "Sumanth",
    "Anirudh",
    "Kartik",
    "Aaditya",
    "Yogesh",
    "Akhil",
    "Shubham",
    "Arvind",
    "Pranav",
    "Vijay",
    "Rahul",
    "Rohit",
    "Vishesh",
    "Kamal",
    "Rajnish",
    "Neeraj",
    "Aryan",
    "Kabir",
    "Sahil",
    "Aniket",
    "Abhishek",
    "Rishabh",
    "Ritesh",
    "Rishi",
    "Rudra",
    "Krishna",
    "Kiran",
    "Suraj",
    "Nandan",
    "Shyam",
    "Achintya",
    "Aaryan",
    "Amogh",
    "Parth",
    "Kushal",
    "Divyansh",
    "Aahan",
    "Dhruv",
    "Shaurya",
    "Advait",
    "Ishaan",
    "Arnav",
    "Ansh",
    "Vihaan",
    "Yash",
    "Virat",
    "Devansh",
    "Daksh",
    "Kabir",
    "Pranav",
    "Rudra",
    "Reyansh",
    "Aarav",
    "Ayaan",
    "Vivaan",
    "Advait",
    "Arjun",
    "Aarush",
    "Aryan",
    "Atharva",
    "Avyukt",
    "Vihaan",
    "Yuvan",
    "Zayan",
    "Zayd",
    "Rehan",
    "Rohan",
    "Sai",
    "Samay",
    "Shaurya",
    "Arnav",
    "Vihaan",
    "Vivaan",
    "Yug",
    "Zayd",
    "Aditya",
    "Advait",
    "Anay",
    "Arjun",
    "Arnav",
    "Aryan",
    "Ayush",
    "Dhruv",
    "Krish",
    "Rohan",
    "Rudra",
    "Samit",
    "Shaurya",
    "Vihaan",
    "Yuvan",
    "Zayan",
    "Zayd",
  ];
  
  export function generateRandomName() {
    return nameList[Math.floor(Math.random() * nameList.length)];
  }
  
  export function makeRandomMessage(length) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }
  
  export const findPrime = (num) => {
    let i,
      primes = [2, 3],
      n = 5;
    const isPrime = (n) => {
      let i = 1,
        p = primes[i],
        limit = Math.ceil(Math.sqrt(n));
      while (p <= limit) {
        if (n % p === 0) {
          return false;
        }
        i += 1;
        p = primes[i];
      }
      return true;
    };
    for (i = 2; i <= num; i += 1) {
      while (!isPrime(n)) {
        n += 2;
      }
      primes.push(n);
      n += 2;
    }
    return primes[num - 1];
  };