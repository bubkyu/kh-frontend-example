package 20201120.Application;

import java.io.IOException;
import java.net.Socket;

/**
 * 클라이언트. 서버에서 그거 말고..!
 */
public class Application {

    // 접속할 `서버` 주소
    private static final String IP_ADDRESS = "localhost";
    // 접속할 서버 포트
    private static final int PORT = 12345;

    public static void main(String[] args) {
        try {
            // 1. 접속
            final Socket socket = new Socket(IP_ADDRESS, PORT);
            final ListenerThread listener = new ListenerThread(socket);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
