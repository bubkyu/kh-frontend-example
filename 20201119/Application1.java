public class Application1 {

	public static void main(String[] args) {
		final Task task = new Task();
        fianl Thread thread = new Thread(task);
        thread.start();
	}
}