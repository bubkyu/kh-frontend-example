
public class Task implements Runnable{
    
    /**
     * 스레드가 수행 할 작업을 작성
     */
    @Override
    public void run(){
        while(true){
            System.out.println("안녕");
            try{
                Thread.sleep(1000);
            }catch(InterruptedException ignore){

            }
        }

    }
}
