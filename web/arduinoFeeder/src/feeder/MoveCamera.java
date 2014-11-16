package feeder;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class MoveCamera
 */
@WebServlet("/MoveCamera")
public class MoveCamera extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private int xPos = 90;
	private int yPos = 90;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public MoveCamera() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	    PrintWriter out = response.getWriter();
	    out.print(xPos + "x" + yPos + "y");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	    PrintWriter out = response.getWriter();
		Map parameters = request.getParameterMap();
		
		if (parameters.containsKey("left") && parameters.containsKey("up")){
			int leftAmount = Integer.parseInt(((String[])parameters.get("left"))[0]);
			int upAmount = Integer.parseInt(((String[])parameters.get("up"))[0]);
			
			if (leftAmount == 0 && upAmount == 0){
				xPos = 90;
				yPos = 90;
			}else{
				xPos += 5 * leftAmount;
				yPos += 5 * -upAmount;
				
				if (xPos < 10){
					xPos = 10;
				}else if (xPos > 170){
					xPos = 170;
				}
				
				if (yPos < 10){
					yPos = 10;
				}else if (yPos > 170){
					yPos = 170;
				}
			}
			
			
		}
		out.print("posted");	
	}

}
