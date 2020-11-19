package ChttingProgram;

import java.io.IOException;
import java.io.OutputStream;
import java.net.Socket;
import java.nio.charset.StandardCharsets;
import java.util.Scanner;

/**
 * 클라이언트
 */
public class ClientApplication {

   private static final String IP = "192.168.40.124";    //강사님 자리 IP 주소
   private static final int PORT = 12345;                //포트번호는 내가 좋아하는 번호 입력

   public static void main(String[] args) {
      try {
         final Socket socket = new Socket(IP, PORT);
         final ListenerThread listener = new ListenerThread(socket.getInputStream());
         listener.start();

         while (true) {
            writeMessage(socket.getOutputStream());
         }
      } catch (IOException e) {
         e.printStackTrace();
      }
   }

   private static void writeMessage(OutputStream outputStream) throws IOException {
      final Scanner scanner = new Scanner(System.in);
      System.out.print("입력 > ");
      final String messageToSend = scanner.next();
      final byte[] raw = messageToSend.getBytes(StandardCharsets.UTF_8);
      outputStream.write(raw);
   }
}