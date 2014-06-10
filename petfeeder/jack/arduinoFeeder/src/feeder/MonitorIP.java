package feeder;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class MonitorIP
 */
@WebServlet("/MonitorIP")
public class MonitorIP extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static String ipAddress = "128.223.6.87";
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public MonitorIP() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	    PrintWriter out = response.getWriter();
		Map parameters = request.getParameterMap();	
		
		// get the ip of the client
		if (parameters.containsKey("type") && ((String[])parameters.get("type"))[0].equals("setIP")){
			// set the ip of
			System.out.println(request.getRemoteAddr());
			ipAddress = request.getRemoteAddr();
			
		    out.print("ip set");
		}else{
			System.out.println("not found");
			out.print("ip not found");			
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	    PrintWriter out = response.getWriter();
	    out.print(ipAddress);
	}

}
