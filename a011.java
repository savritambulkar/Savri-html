public class a011 {
    public static void main(String[] args) {
         for(int i=1;i<13;i++){
      for(int j=6;j>0;j--){
         if(i==1||i-j==j){
        System.out.print(j);
      }
      else{
         System.out.print("");
      }
   }
   
    }
    }
}
