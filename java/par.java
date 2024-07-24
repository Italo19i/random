class Main {
  public static void main(String[] args)   {
    int number = 59;

    System.out.println("o numero "+ number + (
      (paridade(number)==0) 
        ? " é par"
        : " é impar") 
    );
  }
  static int paridade(int n) {
      return n & 1;
  }
}
