package feeder;

import feeder.ScheduleFeed;

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
 * Servlet implementation class Feed
 */
@WebServlet("/Feed")
public class Feed extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static int feedAmount = 0;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Feed() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	    PrintWriter out = response.getWriter();
		
		// Check the schedule feed array
		Date date = new Date();
		for (FeedObject fo : ScheduleFeed.scheduleFeeds){
			// check the hour and minute
			if (fo.hour==date.getHours() && (date.getMinutes()-fo.minute)==0){
				// check its fed already
				if (!fo.isFedToday()){
					fo.lastFeedTime=date;
				    out.print(fo.amount);
				    return;
				}
			}
		}
		
		// response with the feed amount
	    out.print(feedAmount);
	    feedAmount = 0;
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	    PrintWriter out = response.getWriter();
		Map parameters = request.getParameterMap();
		
		// check whether there is a new feeding request
		if (parameters.containsKey("amount")){
			try{
				int amount = Integer.parseInt(((String[])parameters.get("amount"))[0]);
				
				//check whether is amount is within the valid range
				if (amount <= 0){
				    out.print("illegal amount");
				    return;
				}
				feedAmount = amount;
			    out.print("feed amount updated");
			}catch(NumberFormatException ex){
			    out.print("illegal amount");
			}
		}
	}
}
